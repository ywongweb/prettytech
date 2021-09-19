import React, {useEffect} from 'react'
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import {useAppDispatch, useAppSelector} from './redux/reduxHooks'
import {products} from './redux/products.slice'

export const ProductList = () => {
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
  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
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
  title: {
    fontSize: 32,
  },
})

ProductList.displayName = ProductList
