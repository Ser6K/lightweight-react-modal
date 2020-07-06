import React, {
    useState,
    useCallback,
    useEffect,
    useRef,
} from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import {
    getHeader,
    getFooter,
    getContent,
    handleEscPress,
} from 'utils';
import { addModal, removeModal } from 'register';
import CloseButton from './components/CloseButton/CloseButton';
import Overlay from './components/Overlay/Overlay';
import styles from './Modal.css';

const Modal = ({
    onClose,
    fluid,
    closable,
    maxHeight,
    minHeight,
    maxWidth,
    minWidth,
    children,
    customClassNames,
    closeButtonIcon,
    ...props
}) => {
    const header = useCallback(getHeader(children), [children]);
    const footer = useCallback(getFooter(children), [children]);
    const content = useCallback(getContent(children), [children]);
    const modalRef = useRef();

    useEffect(() => {
        addModal(modalRef);
    }, [modalRef]);

    const escPressed = handleEscPress(closable, modalRef);
    const closeModal = useCallback(() => {
        if (!closable || !onClose) {
            return;
        }
        removeModal(modalRef);
        onClose();
    }, [closable, onClose, modalRef]);

    useEffect(() => {
        if (escPressed) {
            closeModal();
        }
    }, [escPressed]);

    return createPortal(
        <div
            {...props}
            className={styles.wrapper}
        >
            <div
                ref={modalRef}
                className={styles.modal}
                style={{
                    maxWidth: `${!fluid ? `${maxWidth}px` : ''}`,
                    minWidth: `${!fluid ? `${minWidth}px` : ''}`,
                    maxHeight: `${!fluid ? `${maxHeight}px` : ''}`,
                    minHeight: `${!fluid ? `${minHeight}px` : ''}`,
                }}
            >
                {closable && (
                    <CloseButton
                        className={customClassNames.closeButton}
                        onClick={closeModal}
                        icon={closeButtonIcon}
                    />
                )}
                {header && header}
                {content && content}
                {footer && footer}
            </div>
            <Overlay
                onClick={closeModal}
                className={customClassNames.overlay}
            />
        </div>, document.body,
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
    customClassNames: PropTypes.shape({
        wrapper: PropTypes.string,
        modal: PropTypes.string,
        closeBtn: PropTypes.string,
        overlay: PropTypes.string,
    }),
    closeButtonIcon: PropTypes.node,
};

Modal.defaultProps = {
    onClose: null,
    fluid: false,
    closable: true,
    maxHeight: 500,
    minHeight: 100,
    maxWidth: 500,
    minWidth: 200,
    customClassNames: {
        wrapper: null,
        modal: null,
        closeButton: null,
        overlay: null,
    },
    closeButtonIcon: null,
};

Modal.displayName = 'Modal';
export default React.memo(Modal);
