import React, {useEffect} from 'react'
import {
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import {useAppDispatch, useAppSelector} from './redux/reduxHooks'
import {ProductItem, products} from './redux/products.slice'
import {basket} from './redux/basket.slice'
import {Navigation} from 'react-native-navigation'

type ProductListProps = {
  componentId: string
}

export const ProductList = (props: ProductListProps) => {
  const dispatch = useAppDispatch()
  const items = useAppSelector(state => state.products)
  useEffect(() => {
    async function fetchItems() {
      try {
        const res = await fetch(
          'https://my-json-server.typicode.com/benirvingplt/products/products',
        )
        const items = await res.json()
        dispatch(products.actions.addItems(items))
      } catch (err) {
        console.log(err)
      }
    }
    fetchItems()
  }, [])

  const renderItem = ({item}: {item: ProductItem}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>Price: £{item.price}</Text>
        <Text style={styles.description}>Color: {item.colour}</Text>
        <Button
          title="Add to basket"
          onPress={() => {
            dispatch(basket.actions.addItem(item.id))
          }}
        />
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="View basket"
        onPress={() => {
          Navigation.push(props.componentId, {
            component: {
              name: 'basketScreen',
            },
          })
        }}
      />
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 24,
    paddingBottom: 16,
  },
  description: {
    fontSize: 24,
  },
})

ProductList.displayName = 'ProductList'
