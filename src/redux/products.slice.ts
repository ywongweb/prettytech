import {createSlice} from '@reduxjs/toolkit'

export type ProductItem = {
  id: string
  colour: string
  name: string
  price: number
  img: string
}

export const initialState: Array<ProductItem> = []

const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addItems: (state, action) => {
      return action.payload
    },
  },
})

export const products = {
  ...slice,
  actions: slice.actions,
}
