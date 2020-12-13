import React from 'react'
import { classnames } from 'src/utils'

import { OverlayTypes } from './types'

import styles from './Overlay.css'

const Overlay: React.FC<OverlayTypes> = ({ onClick, className }) => (
  <div data-testid="modal-overlay" onClick={onClick} className={classnames(styles.overlay, className)} />
)

export default Overlay
