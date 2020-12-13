import React from 'react'
import ModalContext from './ModalContext'

const ModalConsumer: React.FC<any> = ({ children }) => <ModalContext.Consumer>{(modal) => React.cloneElement(children, { modal })}</ModalContext.Consumer>

export default ModalConsumer
