import React from 'react';
import { classNames } from 'utils';
import styles from './CloseButton.css';

interface CloseButtonProps {
    className?: string;
    onClick: () => void;
    icon: React.ReactNode;
};

const CloseButton = React.memo(({
    onClick = () => {},
    icon = null,
    className = null,
}: CloseButtonProps) => (
    <button
        role="button"
        className={classNames(styles.closeButton, className)}
        onClick={onClick}
    >
        {icon ? icon : 'x'}
    </button>
));

CloseButton.displayName = 'CloseButton';
export default CloseButton;