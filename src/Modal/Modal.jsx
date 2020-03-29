import React, {
    useState,
    useCallback,
    useEffect,
    useRef,
} from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import {
    getHeader,
    getFooter,
    getContent,
    handleEscPress,
} from '../utils/utils';
import { addModal, removeModal } from '../utils/register';
import styles from './Modal.styles';

const Modal = ({
    onClose,
    fluid,
    closable,
    maxHeight,
    minHeight,
    maxWidth,
    minWidth,
    children,
    customStyles,
}) => {
    const header = useCallback(getHeader(children), [children]);
    const footer = useCallback(getFooter(children), [children]);
    const content = useCallback(getContent(children), [children]);
    const modalRef = useRef();
    const escPressed = handleEscPress(closable, modalRef);

    const classes = createUseStyles(styles)({
        fluid, maxHeight, minHeight, maxWidth, minWidth,
    });

    const closeModal = useCallback(() => {
        removeModal(modalRef);
        onClose();
    }, []);

    const handleOverlayClick = useCallback((event) => {
        const { target } = event;

        if (target !== modalRef.current && !modalRef.current.contains(target)) {
            closeModal();
        }
    }, []);

    useEffect(() => addModal(modalRef), [modalRef]);

    useEffect(() => {
        if (escPressed) {
            closeModal();
        }
    }, [escPressed]);

    return createPortal(
        <>
            <div
                className={classNames(classes.wrapper, customStyles.wrapper)}
                onClick={handleOverlayClick}
            >
                <div
                    ref={modalRef}
                    className={classNames(classes.modal, customStyles.modal)}
                >
                    {closable && (
                        <button
                            role="button"
                            className={classNames(classes.close, customStyles.closeBtn)}
                            onClick={closeModal}
                        >x</button>
                    )}
                    {header && (
                        <div className={classNames(classes.header, customStyles.header)}>
                            {header}
                        </div>
                    )}
                    {content && (
                        <div className={classNames(classes.content, customStyles.content)}>
                            {content}
                        </div>
                    )}
                    {footer && (
                        <div className={classNames(classes.footer, customStyles.footer)}>
                            {footer}
                        </div>
                    )}
                </div>
            </div>
            <div className={classNames(classes.overlay, customStyles.overlay)} />
        </>, document.body,
    );
};

Modal.propTypes = {
    onClose: PropTypes.func,
    fluid: PropTypes.bool,
    closable: PropTypes.bool,
    maxHeight: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    minHeight: PropTypes.number,
    maxWidth: PropTypes.number,
    minWidth: PropTypes.number,
    children: PropTypes.node.isRequired,
    customStyles: PropTypes.shape({
        wrapper: PropTypes.string,
        modal: PropTypes.string,
        closeBtn: PropTypes.string,
        header: PropTypes.string,
        content: PropTypes.string,
        footer: PropTypes.string,
        overlay: PropTypes.string,
    }),
};

Modal.defaultProps = {
    onClose: () => {},
    fluid: false,
    closable: true,
    maxHeight: 500,
    minHeight: 100,
    maxWidth: 500,
    minWidth: 200,
    customStyles: {
        wrapper: null,
        modal: null,
        closeBtn: null,
        header: null,
        content: null,
        footer: null,
        overlay: null,
    },
};

export default React.memo(Modal);
