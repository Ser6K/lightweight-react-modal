import React from 'react'
import { classNames } from 'src/utils'

import { ModalHeaderTypes } from './types'

import styles from './ModalHeader.css'

const ModalHeader: React.FC<ModalHeaderTypes> = ({ children, className = null, ...props }) => (
  <div {...props} className={classNames(styles.header, className)}>
    {children}
  </div>
)

export default ModalHeader
