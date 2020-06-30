import { useContext } from 'react';
import ModalContext from './ModalContext';

const useModalContext = () => useContext(ModalContext);

export default useModalContext;
