import React from 'react'
import { render } from '@testing-library/react'
import ModalHeader from './ModalHeader'

describe('Modal footer', () => {
  test('it matches snapshot', () => {
    const { asFragment } = render(
      <ModalHeader className="className" style={{ display: 'inline' }}>
        Header
      </ModalHeader>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
