import React from 'react'
import { render } from '@testing-library/react'
import ModalContent from './ModalContent'

describe('Modal footer', () => {
  test('it matches snapshot', () => {
    const { asFragment } = render(
      <ModalContent className="className" style={{ display: 'inline' }}>
        Content
      </ModalContent>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
