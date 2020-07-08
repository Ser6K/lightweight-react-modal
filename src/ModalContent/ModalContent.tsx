import React from 'react';
import { ContentDisplayName, classNames } from 'utils';
import styles from './ModalContent.css';

interface ModalContentProps {
    children: React.ReactNode,
    className?: string,
    [propName: string]: any,
};

const ModalContent = React.memo(({
    children,
    className,
    ...props
}: ModalContentProps) => (
    <div
        {...props}
        className={classNames(styles.content, className)}
    >
        {children}
    </div>
));

ModalContent.displayName = ContentDisplayName;
export default ModalContent;