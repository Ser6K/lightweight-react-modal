import React from 'react'
import { classNames } from 'src/utils'
import styles from './CloseButton.css'

interface CloseButtonProps {
  className?: string
  onClick: () => void
  icon: React.ReactNode
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick, icon = null, className }) => (
  <button role="button" className={classNames(styles.closeButton, className)} onClick={onClick}>
    {icon ?? 'x'}
  </button>
)

export default CloseButton
