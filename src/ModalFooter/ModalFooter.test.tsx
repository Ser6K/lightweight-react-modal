import React from 'react'
import { render } from '@testing-library/react'
import ModalFooter from './ModalFooter'

describe('Modal footer', () => {
  test('it matches snapshot', () => {
    const { asFragment } = render(
      <ModalFooter className="className" style={{ display: 'inline' }}>
        Footer
      </ModalFooter>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
