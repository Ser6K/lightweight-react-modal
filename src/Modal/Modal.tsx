import React, { useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { getHeader, getFooter, getContent, handleEscPress, classNames, addModal, removeModal } from 'src/utils'
import CloseButton from './components/CloseButton/CloseButton'
import Overlay from './components/Overlay/Overlay'
import styles from './Modal.css'

interface ModalProps {
  onClose?: () => void
  fluid?: boolean
  closable?: boolean
  maxHeight?: number
  minHeight?: number
  maxWidth?: number
  minWidth?: number
  children: React.ReactNode
  customClassNames?: {
    wrapper: string | null
    modal: string | null
    closeBtn: string | null
    overlay: string | null
  }
  closeButtonIcon?: React.ReactNode
  [propName: string]: any
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  fluid = false,
  closable = true,
  maxHeight = 500,
  minHeight = 100,
  maxWidth = 500,
  minWidth = 200,
  children = null,
  customClassNames = {
    wrapper: null,
    modal: null,
    closeBtn: null,
    overlay: null,
  },
  closeButtonIcon = null,
  ...props
}) => {
  const header = useCallback(getHeader(children), [children])
  const footer = useCallback(getFooter(children), [children])
  const content = useCallback(getContent(children), [children])
  const modalRef = useRef(null)

  useEffect(() => {
    addModal(modalRef)
  }, [modalRef])

  const escPressed = handleEscPress(closable, modalRef)

  const closeModal = useCallback(() => {
    if (!closable || !onClose) {
      return
    }
    removeModal(modalRef)
    onClose()
  }, [closable, onClose, modalRef])

  useEffect(() => {
    if (escPressed) {
      closeModal()
    }
  }, [escPressed])

  return createPortal(
    <div {...props} className={classNames(styles.wrapper, customClassNames.wrapper)}>
      <div
        ref={modalRef}
        className={classNames(styles.modal, customClassNames.modal)}
        style={{
          maxWidth: `${!fluid ? `${maxWidth}px` : ''}`,
          minWidth: `${!fluid ? `${minWidth}px` : ''}`,
          maxHeight: `${!fluid ? `${maxHeight}px` : ''}`,
          minHeight: `${!fluid ? `${minHeight}px` : ''}`,
        }}
      >
        {closable && (
          <CloseButton onClick={closeModal} icon={closeButtonIcon} {...(customClassNames.closeBtn != null ? { className: customClassNames.closeBtn } : {})} />
        )}
        {header && header}
        {content && content}
        {footer && footer}
      </div>
      <Overlay onClick={closeModal} className={customClassNames.overlay} />
    </div>,
    document.body
  )
}

export default React.memo(Modal)
