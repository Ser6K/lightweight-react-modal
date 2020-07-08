import React from 'react';
import { HeaderDisplayName, classNames } from 'utils';
import styles from './ModalHeader.css';

interface ModalHeaderProps {
    children: React.ReactNode,
    className?: string,
    [propName: string]: any,
};

const ModalHeader = React.memo(({
    children,
    className = null,
    ...props
}: ModalHeaderProps) => (
    <div
        {...props}
        className={classNames(styles.header, className)}
    >
        {children}
    </div>
));

ModalHeader.displayName = HeaderDisplayName;
export default ModalHeader;