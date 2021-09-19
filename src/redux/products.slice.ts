import {createSlice} from '@reduxjs/toolkit'

type ProductItem = {
  id: string
  color: string
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
