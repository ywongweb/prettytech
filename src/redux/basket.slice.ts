import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ProductItem} from './products.slice'

export const initialState: Array<ProductItem['id']> = []

const slice = createSlice({
  name: 'basket',
  initialState: [],
  reducers: {
    addItem: (state, action: PayloadAction<ProductItem['id']>) => {
      state.push(action.payload)
    },
    clear: () => {
      return []
    },
  },
})

export const basket = {
  ...slice,
  actions: slice.actions,
}
