import React, { useState, useEffect, useContext } from 'react'
import { render } from 'react-dom'
import { Modal, ModalHeader, ModalFooter, ModalContent, ModalProvider, useModalContext } from 'lightweight-react-modal'

const ModalExample = () => {
  const [showHeader, setShowHeader] = useState(false)
  const modal = useModalContext()

  useEffect(() => {
    modal.open('dialog')
  }, [])

  return (
    <div>
      <button type="button" style={{ position: 'fixed', zIndex: 9999999, top: 10, left: 10 }} onClick={() => modal.toggle('dialog')}>
        {modal.isOpen('dialog') ? 'hide' : 'show'}
      </button>
      <button type="button" style={{ position: 'fixed', zIndex: 9999999, top: 10, left: 55 }} onClick={() => setShowHeader(!showHeader)}>
        {showHeader ? 'Hide header' : 'Show header'}
      </button>
      <button type="button" style={{ position: 'fixed', zIndex: 9999999, top: 10, left: 140 }} onClick={() => modal.closeAll()}>
        closeAll
      </button>
      {modal.isOpen('dialog') && (
        <Modal
          onClose={() => {
            modal.close('dialog')
          }}
          maxHeight={500}
          maxWidth={500}
        >
          {showHeader && <ModalHeader>Header</ModalHeader>}
          <ModalContent>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem
              Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
              Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <button type="button" onClick={() => modal.open('dialog2')}>
              {modal.isOpen('dialog2') ? 'hide' : 'show'}
            </button>
          </ModalContent>
          <ModalFooter>Footer</ModalFooter>
        </Modal>
      )}
      {modal.isOpen('dialog2') && (
        <Modal
          onClose={() => {
            modal.close('dialog2')
          }}
          maxHeight={300}
          maxWidth={500}
          closeButtonIcon={<i>gg wp</i>}
        >
          <ModalHeader>Header</ModalHeader>
          <ModalContent>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
          </ModalContent>
          <ModalFooter>Footer</ModalFooter>
        </Modal>
      )}
    </div>
  )
}

const Example = () => (
  <ModalProvider>
    <ModalExample />
  </ModalProvider>
)

render(<Example />, document.getElementById('modal'))
