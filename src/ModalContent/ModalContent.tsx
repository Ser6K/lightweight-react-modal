import React from 'react'
import { classNames } from 'src/utils'
import styles from './ModalContent.css'

interface ModalContentProps {
  children: React.ReactNode
  className?: string
  [propName: string]: any
}

const ModalContent: React.FC<ModalContentProps> = ({ children, className, ...props }) => (
  <div {...props} className={classNames(styles.content, className)}>
    {children}
  </div>
)

export default ModalContent
