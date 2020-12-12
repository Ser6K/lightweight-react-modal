import React from 'react'
import { classNames } from 'src/utils'
import styles from './ModalHeader.css'

interface ModalHeaderProps {
  children: React.ReactNode
  className?: string | null
  [propName: string]: any
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ children, className = null, ...props }) => (
  <div {...props} className={classNames(styles.header, className)}>
    {children}
  </div>
)

export default ModalHeader
