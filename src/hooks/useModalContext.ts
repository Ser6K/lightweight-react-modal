import { useContext } from 'react'
import ModalContext from 'src/context/ModalContext'

const useModalContext = () => useContext(ModalContext)

export default useModalContext
