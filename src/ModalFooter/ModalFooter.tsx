import React from 'react'
import { classNames } from 'src/utils'

import { ModalFooterTypes } from './types'

import styles from './ModalFooter.css'

const ModalFooter: React.FC<ModalFooterTypes> = ({ children, className, ...props }) => (
  <div {...props} className={classNames(styles.footer, className)}>
    {children}
  </div>
)

export default ModalFooter
