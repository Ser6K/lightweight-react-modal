import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import ModalContext from './ModalContext';
import ModalConsumer from './ModalConsumer';

const ModalProvider = ({ children }) => {
    const [modalList, setModalList] = useState([]);
    const [lastOpen, setLastOpen] = useState(null);

    const isOpen = name => modalList.includes(name);
    const isClosed = name => !modalList.includes(name);

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
        open: name => openModal(name),
        close: name => closeModal(name),
        toggle: name => toggleModal(name),
        closeAll: () => closeAll(),
        isOpen: name => isOpen(name),
        isClose: name => isClosed(name),
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

ModalProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default React.memo(ModalProvider);
