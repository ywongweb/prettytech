import React from 'react'
import {Navigation} from 'react-native-navigation'
import {ProductList} from './src/ProductList'
import {Provider} from 'react-redux'
import {store} from './src/redux/store'

Navigation.registerComponent('com.myApp.WelcomeScreen', () => {
  return props => (
    <Provider store={store}>
      <ProductList {...props} />
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
              name: 'com.myApp.WelcomeScreen',
            },
          },
        ],
      },
    },
  })
})
