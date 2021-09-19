import React from 'react'
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
import {ProductItem} from './redux/products.slice'
import {basket} from './redux/basket.slice'

export const Basket = () => {
  const dispatch = useAppDispatch()

  const items = useAppSelector(state => {
    const basketItem = state.basket
    return state.products.filter(product => basketItem.includes(product.id))
  })

  const renderItem = ({item}: {item: ProductItem}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
        <Button
          title="Delete"
          onPress={() => {
            dispatch(basket.actions.deleteItem(item.id))
          }}
        />
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Clear basket"
        testID="clearBtn"
        onPress={() => {
          dispatch(basket.actions.clear())
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
  title: {
    fontSize: 32,
  },
})

Basket.displayName = 'Basket'
