import React from 'react'
import {Basket} from './Basket'
import {render, fireEvent} from '@testing-library/react-native'
import {basket} from './redux/basket.slice'

const mockAppDispatch = jest.fn()
jest.mock('./redux/reduxHooks', () => {
  return {
    useAppDispatch: () => mockAppDispatch,
    useAppSelector: jest.fn().mockReturnValue([
      {
        id: 1,
        colour: 'Black',
        name: 'Black Sheet Strappy Textured Glitter Bodycon Dress',
        price: 10,
        img: 'http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024',
      },
    ]),
  }
})

describe('Basket screen', () => {
  it('should render basket items', () => {
    const test = render(<Basket />)
    expect(
      test.getByText('Black Sheet Strappy Textured Glitter Bodycon Dress'),
    ).toBeTruthy()
  })

  it('on Clear Basket press, should dispatch clear basket event', () => {
    const test = render(<Basket />)
    fireEvent.press(test.getByTestId('clearBtn'))
    expect(mockAppDispatch).toBeCalledWith(basket.actions.clear())
  })
})
