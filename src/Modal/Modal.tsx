import React, {
    useCallback,
    useEffect,
    useRef,
} from 'react';
import { createPortal } from 'react-dom';
import {
    getHeader,
    getFooter,
    getContent,
    handleEscPress,
    classNames,
} from 'utils';
import { addModal, removeModal } from 'register';
import CloseButton from './components/CloseButton/CloseButton';
import Overlay from './components/Overlay/Overlay';
import * as styles from './Modal.css';

interface ModalProps {
    onClose?: () => void;
    fluid?: boolean;
    closable?: boolean;
    maxHeight?: number;
    minHeight?: number;
    maxWidth?: number;
    minWidth?: number;
    children: React.ReactNode;
    customClassNames?: {
        wrapper: string,
        modal: string,
        closeBtn: string,
        overlay: string,
    };
    closeButtonIcon?: React.ReactNode;
    [propName: string]: any;
};

const Modal = ({
    onClose = null,
    fluid = false,
    closable = true,
    maxHeight = 500,
    minHeight = 100,
    maxWidth = 500,
    minWidth = 200,
    children = null,
    customClassNames = {
        wrapper: null,
        modal: null,
        closeBtn: null,
        overlay: null,
    },
    closeButtonIcon = null,
    ...props
}: ModalProps) => {
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
            className={classNames(styles.wrapper, customClassNames.wrapper)}
        >
            <div
                ref={modalRef}
                className={classNames(styles.modal, customClassNames.modal)}
                style={{
                    maxWidth: `${!fluid ? `${maxWidth}px` : ''}`,
                    minWidth: `${!fluid ? `${minWidth}px` : ''}`,
                    maxHeight: `${!fluid ? `${maxHeight}px` : ''}`,
                    minHeight: `${!fluid ? `${minHeight}px` : ''}`,
                }}
            >
                {closable && (
                    <CloseButton
                        className={customClassNames.closeBtn}
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

Modal.displayName = 'Modal';
export default React.memo(Modal);