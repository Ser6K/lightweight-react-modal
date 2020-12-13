import React from 'react'
import ReactDom from 'react-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Modal from './Modal'

describe('Modal general', () => {
  const modalText = 'Modal'
  let events = {}

  beforeEach(() => {
    document.addEventListener = jest.fn((event, cb) => {
      events[event] = cb
    })
  })

  test('modal can be mounted', () => {
    render(<Modal>{modalText}</Modal>)
    expect(screen.getByText(modalText)).toBeDefined()
  })

  test('it mounts with create portal', () => {
    const portalSpy = jest.spyOn(ReactDom, 'createPortal')
    render(<Modal>Modal</Modal>)

    expect(portalSpy).toHaveBeenCalledTimes(1)
  })

  test("modal can't be closed if not closable property is false", () => {
    const onClose = jest.fn()
    render(
      <Modal onClose={onClose} closable={false}>
        Modal
      </Modal>
    )

    fireEvent.click(screen.getByTestId('modal-overlay'))

    expect(screen.queryByRole('button')).toBeNull()
    expect(onClose).toBeCalledTimes(0)
  })

  test('modal can be closed by close button click', () => {
    const onClose = jest.fn()
    render(<Modal onClose={onClose}>Modal</Modal>)

    fireEvent.click(screen.queryByRole('button'))

    expect(onClose).toBeCalled()
  })

  test('modal can be closed by overlay click', () => {
    const onClose = jest.fn()
    render(<Modal onClose={onClose}>Modal</Modal>)

    fireEvent.click(screen.getByTestId('modal-overlay'))

    expect(onClose).toBeCalled()
  })

  /*test('modal can be closed by pressing escape', () => {
    const onClose = jest.fn()

    render(<Modal onClose={onClose}>Modal</Modal>)

    events.keydown({ keyCode: '27' })

    console.log(events)

    expect(onClose).toBeCalled()
  })*/
})
