import React from 'react'
import ModalContext from './ModalContext'

const ModalConsumer = ({ children }: any) => <ModalContext.Consumer>{(modal) => React.cloneElement(children, { modal })}</ModalContext.Consumer>

export default ModalConsumer
