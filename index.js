import React from 'react'
import {Navigation} from 'react-native-navigation'
import {ProductList} from './src/ProductList'
import {Provider} from 'react-redux'
import {store} from './src/redux/store'
import {Basket} from './src/Basket'

Navigation.registerComponent('productScreen', () => {
  return props => (
    <Provider store={store}>
      <ProductList {...props} />
    </Provider>
  )
})

Navigation.registerComponent('basketScreen', () => {
  return props => (
    <Provider store={store}>
      <Basket {...props} />
    </Provider>
  )
})

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'productScreen',
            },
          },
        ],
      },
    },
  })
})
