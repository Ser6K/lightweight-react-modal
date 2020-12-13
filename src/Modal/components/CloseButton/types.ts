import { ClassNameType, ReactNodeType } from 'src/types'

export interface CloseButtonTypes {
  className?: ClassNameType
  onClick: () => void
  icon: ReactNodeType
}
