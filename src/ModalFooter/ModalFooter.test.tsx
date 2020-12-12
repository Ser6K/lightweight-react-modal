import React from 'react'
import { mount } from 'enzyme'
import ModalFooter from './ModalFooter'

describe('Modal footer', () => {
  test('it matches snapshot with no props', () => {
    const modalFooter = mount(<ModalFooter>Footer</ModalFooter>)
    expect(modalFooter).toMatchSnapshot()
  })
  test('it matches snapshot with props', () => {
    const modalFooter = mount(
      <ModalFooter className="className" style={{ display: 'inline' }}>
        Footer
      </ModalFooter>
    )
    expect(modalFooter).toMatchSnapshot()
  })
})
