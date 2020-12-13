import { ClassNameType, ReactNodeType } from 'src/types'

export interface ModalTypes {
  onClose?: () => void
  fluid?: boolean
  closable?: boolean
  maxHeight?: number
  minHeight?: number
  maxWidth?: number
  minWidth?: number
  children: ReactNodeType
  customClassNames?: {
    wrapper: ClassNameType
    modal: ClassNameType
    closeBtn: ClassNameType
    overlay: ClassNameType
  }
  closeButtonIcon?: ReactNodeType
  [propName: string]: any
}
