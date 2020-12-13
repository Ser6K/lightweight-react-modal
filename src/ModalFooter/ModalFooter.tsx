import React from 'react'
import { classnames } from 'src/utils'

import { ModalFooterTypes } from './types'

import styles from './ModalFooter.css'

const ModalFooter: React.FC<ModalFooterTypes> = ({ children, className, ...props }) => (
  <div {...props} className={classnames(styles.footer, className)}>
    {children}
  </div>
)

export default ModalFooter
