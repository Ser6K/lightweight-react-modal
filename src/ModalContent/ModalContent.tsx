import React from 'react'
import { classNames } from 'src/utils'

import { ModalContentTypes } from './types'

import styles from './ModalContent.css'

const ModalContent: React.FC<ModalContentTypes> = ({ children, className, ...props }) => (
  <div {...props} className={classNames(styles.content, className)}>
    {children}
  </div>
)

export default ModalContent
