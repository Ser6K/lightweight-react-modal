import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ModalContext from './ModalContext';

const ModalProvider = ({ children }) => {
    const [modalList, setModalList] = useState([]);
    const [lastOpen, setLastOpen] = useState(null);

    const isOpen = name => modalList.includes(name);
    const isClosed = name => !modalList.includes(name);

    const openModal = (name) => {
        if (isOpen(name)) {
            return;
        }

        setModalList([...modalList, name]);
    };

    const closeModal = (name) => {
        if (isClosed(name)) {
            return;
        }

        const newList = modalList.filter(modalName => modalName !== name);

        setModalList(newList);
    };

    const closeAll = () => {
        if (modalList.length > 0) {
            setModalList([]);
        }
    };

    const toggleModal = (name) => {
        if (isOpen(name)) {
            closeModal(name);
            return;
        }

        openModal(name);
    };

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
            {children}
        </ModalContext.Provider>
    );
};

ModalProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ModalProvider;
