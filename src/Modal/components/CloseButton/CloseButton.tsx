import React from 'react'
import { classnames } from 'src/utils'

import { CloseButtonTypes } from './types'

import styles from './CloseButton.css'

const CloseButton: React.FC<CloseButtonTypes> = ({ onClick, icon, className }) => (
  <button role="button" className={classnames(styles.closeButton, className)} onClick={onClick}>
    {icon ?? 'x'}
  </button>
)

export default CloseButton
