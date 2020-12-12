import React from 'react'
import { classNames } from 'src/utils'
import styles from './Overlay.css'

interface OverlayProps {
  onClick?: () => void
  className?: string | null
}

const Overlay: React.FC<OverlayProps> = ({ onClick, className }) => <div onClick={onClick} className={classNames(styles.overlay, className)} />

export default Overlay
