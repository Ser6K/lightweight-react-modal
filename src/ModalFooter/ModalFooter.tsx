import React from 'react';
import { FooterDisplayName, classNames } from 'utils';
import styles from './ModalFooter.css';

interface ModalFooterProps {
    children: React.ReactNode,
    className?: string,
    [propName: string]: any,
};

const ModalFooter = React.memo(({
    children,
    className,
    ...props
}: ModalFooterProps) => (
    <div
        {...props}
        className={classNames(styles.footer, className)}
    >
        {children}
    </div>
));

ModalFooter.displayName = FooterDisplayName;
export default ModalFooter;