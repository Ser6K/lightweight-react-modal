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

        if (!Object.keys(child.props).length) {
            return null;
        }

        if (get(child, 'type.displayName') && child.type.displayName === name) {
            component = child;
        }
    });

    return component;
};

export const HeaderDisplayName = 'ModalHeader';
export const FooterDisplayName = 'ModalFooter';

export const getHeader = children => getNestedComponentByName(HeaderDisplayName, children);
export const getFooter = children => getNestedComponentByName(FooterDisplayName, children);

export const getContent = (children) => {
    const content = [];

    React.Children.map(children, (child) => {
        if (!child) {
            return;
        }

        if (child.type && [HeaderDisplayName, FooterDisplayName].includes(child.type.displayName)) {
            return;
        }

        content.push(child);
    });

    return content;
};

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
