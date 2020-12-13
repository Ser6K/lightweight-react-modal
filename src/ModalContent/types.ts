import { ClassNameType, ReactNodeType } from 'src/types'

export interface ModalContentTypes {
  children: ReactNodeType
  className?: ClassNameType
  [propName: string]: any
}
