import React, { useState, useCallback } from 'react'
import ModalContext from './ModalContext'
import ModalConsumer from './ModalConsumer'

type ModalProviderProps = {
  children: React.ReactNode
}

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modalList, setModalList] = useState<string[]>([])

  const isOpen = (name: string) => modalList.includes(name)
  const isClosed = (name: string) => !modalList.includes(name)

  const openModal = (name: string) => {
    if (isOpen(name)) {
      return
    }

    setModalList([...modalList, name])
  }

  const closeModal = (name: string) => {
    if (isClosed(name)) {
      return
    }

    const newList = modalList.filter((modalName) => modalName !== name)

    setModalList(newList)
  }

  const closeAll = () => {
    if (modalList.length > 0) {
      setModalList([])
    }
  }

  const toggleModal = (name: string) => {
    if (isOpen(name)) {
      closeModal(name)
      return
    }

    openModal(name)
  }

  const modal = {
    open: (name: string) => openModal(name),
    close: (name: string) => closeModal(name),
    toggle: (name: string) => toggleModal(name),
    closeAll: () => closeAll(),
    isOpen: (name: string) => isOpen(name),
    isClose: (name: string) => isClosed(name),
    list: modalList,
  }

  return (
    <ModalContext.Provider value={modal}>
      <ModalConsumer>{children}</ModalConsumer>
    </ModalContext.Provider>
  )
}

export default ModalProvider
