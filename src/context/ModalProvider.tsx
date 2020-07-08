import React, { useState, useCallback, FunctionComponent } from 'react';
import ModalContext from './ModalContext';
import ModalConsumer from './ModalConsumer';

type ModalProviderProps = {
    children: React.ReactNode,
};

const ModalProvider: FunctionComponent<ModalProviderProps> = ({ children }) => {
    const [modalList, setModalList] = useState([]);

    const isOpen = (name: string) => modalList.includes(name);
    const isClosed = (name: string) => !modalList.includes(name);

    const openModal = useCallback((name) => {
        if (isOpen(name)) {
            return;
        }

        setModalList([...modalList, name]);
    }, [isOpen, modalList]);

    const closeModal = useCallback((name) => {
        if (isClosed(name)) {
            return;
        }

        const newList = modalList.filter(modalName => modalName !== name);

        setModalList(newList);
    }, [modalList, isClosed]);

    const closeAll = useCallback(() => {
        if (modalList.length > 0) {
            setModalList([]);
        }
    }, [modalList]);

    const toggleModal = useCallback((name) => {
        if (isOpen(name)) {
            closeModal(name);
            return;
        }

        openModal(name);
    }, [isOpen]);

    const modal = {
        open: (name: string) => openModal(name),
        close: (name: string) => closeModal(name),
        toggle: (name: string) => toggleModal(name),
        closeAll: () => closeAll(),
        isOpen: (name: string) => isOpen(name),
        isClose: (name: string) => isClosed(name),
        list: modalList,
    };

    return (
        <ModalContext.Provider value={modal}>
            <ModalConsumer>
                {children}
            </ModalConsumer>
        </ModalContext.Provider>
    );
};

export default React.memo(ModalProvider);