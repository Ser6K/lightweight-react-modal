import React from 'react'
import { classnames } from 'src/utils'

import { ModalHeaderTypes } from './types'

import styles from './ModalHeader.css'

const ModalHeader: React.FC<ModalHeaderTypes> = ({ children, className, ...props }) => (
  <div {...props} className={classnames(styles.header, className)}>
    {children}
  </div>
)

export default ModalHeader
