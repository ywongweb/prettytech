import {applyMiddleware, combineReducers, createStore} from '@reduxjs/toolkit'
import {products} from './products.slice'
import {basket} from './basket.slice'

const middlewares = [
  /* other middlewares */
]

if (__DEV__) {
  const reduxDebugger = require('redux-middleware-flipper').default
  const actionsBlacklist = []
  const actionsWhitelist = []
  const actionReplayDelay = 500

  middlewares.push(
    reduxDebugger({actionsBlacklist, actionsWhitelist, actionReplayDelay}),
  )
}

export const store = createStore(
  combineReducers({
    products: products.reducer,
    basket: basket.reducer,
  }),
  applyMiddleware(...middlewares),
)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
