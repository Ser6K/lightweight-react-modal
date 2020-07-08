import React, { useState, useEffect } from 'react';
import document from 'global/document';
import { isLastOpened } from './register';

const getNestedComponentByName = (name: string, children: React.ReactNode): any => {
    let component = null;

    React.Children.map(children, (child: any) => {
        if (!child?.props) {
            return null;
        }

        if (!child?.props?.children) {
            return null;
        }

        if (child?.type?.displayName && child.type.displayName === name) {
            component = child;
        }
    });

    return component;
};

export const HeaderDisplayName = 'ModalHeader';
export const FooterDisplayName = 'ModalFooter';
export const ContentDisplayName = 'ModalContent';

export const getHeader = (children: React.ReactNode) => getNestedComponentByName(HeaderDisplayName, children);
export const getFooter = (children: React.ReactNode) => getNestedComponentByName(FooterDisplayName, children);
export const getContent = (children: React.ReactNode) => getNestedComponentByName(ContentDisplayName, children);

export const handleEscPress = (closable: boolean, ref: { current: HTMLDivElement }) => {
    if (!closable) {
        return false;
    }

    const escKeyCode = 27;
    const [escPressed, setEscPressed] = useState(false);

    const onKeyDown = (event: KeyboardEvent) => {
        if (event.keyCode === escKeyCode) {
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

export const classNames = (...classes: any[]) => classes.filter((value: string) => !!value === true).join(' ');
