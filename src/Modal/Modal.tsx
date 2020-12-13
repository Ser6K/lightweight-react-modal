import React, { memo, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { classnames } from 'src/utils'
import { useEscOnPress } from 'src/hooks'
import CloseButton from './components/CloseButton/CloseButton'
import Overlay from './components/Overlay/Overlay'
import { ModalTypes } from './types'

import styles from './Modal.css'

const Modal: React.FC<ModalTypes> = ({
  onClose = null,
  onOpen = null,
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
  const modalRef = useRef<HTMLDivElement>(null)
  const isReady = useRef(false)

  useEscOnPress(modalRef.current, onClose, closable)

  useEffect(() => {
    if (modalRef.current == null || isReady.current || onOpen == null) {
      return
    }
    onOpen(modalRef.current)
    isReady.current = true
  }, [modalRef, onOpen])

  let inlineStyles = {}

  if (!fluid) {
    inlineStyles = {
      maxWidth: `${maxWidth}px`,
      minWidth: `${minWidth}px`,
      maxHeight: `${maxHeight}px`,
      minHeight: `${minHeight}px`,
    }
  }

  return createPortal(
    <div {...props} className={classnames(styles.wrapper, customClassNames.wrapper)}>
      <div ref={modalRef} className={classnames(styles.modal, customClassNames.modal)} style={inlineStyles}>
        {closable ? (
          <CloseButton onClick={closeModal} icon={closeButtonIcon} {...(customClassNames.closeBtn != null ? { className: customClassNames.closeBtn } : {})} />
        ) : null}
        {children}
      </div>
      <Overlay onClick={closeModal} className={customClassNames.overlay} />
    </div>,
    document.body
  )

  function closeModal() {
    if (!closable || onClose == null || modalRef.current == null) {
      return
    }

    onClose(modalRef.current)
  }
}

export default memo(Modal)
