import React from 'react'
import { classNames } from 'src/utils'
import styles from './ModalFooter.css'

interface ModalFooterProps {
  children: React.ReactNode
  className?: string | null
  [propName: string]: any
}

const ModalFooter: React.FC<ModalFooterProps> = ({ children, className, ...props }) => (
  <div {...props} className={classNames(styles.footer, className)}>
    {children}
  </div>
)

export default ModalFooter
