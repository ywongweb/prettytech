import {configureStore, Store} from '@reduxjs/toolkit'
import {RootState} from './store'
import {basket} from './basket.slice'

describe('basket slice', () => {
  let store: Store<RootState>

  beforeEach(() => {
    store = configureStore({reducer: {basket: basket.reducer}})
  })

  it('should add item to basket on addItem event', () => {
    const state = store.getState().basket
    expect(state).toEqual([])
    store.dispatch(basket.actions.addItem('123'))
    const newState = store.getState().basket
    expect(newState).toEqual(['123'])
  })

  it('should remove matching item from basket on deleteItem event', () => {
    const state = store.getState().basket
    expect(state).toEqual([])
    store.dispatch(basket.actions.addItem('111'))
    store.dispatch(basket.actions.addItem('222'))
    store.dispatch(basket.actions.addItem('333'))
    const newState = store.getState().basket
    expect(newState).toEqual(['111', '222', '333'])
    store.dispatch(basket.actions.deleteItem('222'))
    const deleteState = store.getState().basket
    expect(deleteState).toEqual(['111', '333'])
  })
})
