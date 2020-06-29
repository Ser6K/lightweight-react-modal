import React, { useState, useEffect } from 'react';
import document from 'global/document';
import get from 'lodash/get';
import { isLastOpened } from './register';

const getNestedComponentByName = (name, children) => {
    let component = null;

    React.Children.map(children, (child) => {
        if (!child || !child.props) {
            return null;
        }

        if (!get(child, 'props.children')) {
            return null;
        }

        if (get(child, 'type.type.displayName') && child.type.type.displayName === name) {
            component = child;
        }
    });

    return component;
};

export const HeaderDisplayName = 'ModalHeader';
export const FooterDisplayName = 'ModalFooter';
export const ContentDisplayName = 'ModalContent';

export const getHeader = children => getNestedComponentByName(HeaderDisplayName, children);
export const getFooter = children => getNestedComponentByName(FooterDisplayName, children);
export const getContent = children => getNestedComponentByName(ContentDisplayName, children);

export const handleEscPress = (closable, ref) => {
    if (!closable) {
        return false;
    }

    const [escPressed, setEscPressed] = useState(false);

    const onKeyDown = (event) => {
        if (event.keyCode === 27) {
            if (!isLastOpened(ref)) {
                return;
            }
            setEscPressed(true);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, []);

    return escPressed;
};
