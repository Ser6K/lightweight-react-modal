import React from 'react';
import { classNames } from 'utils';
import styles from './Overlay.css';

interface OverlayProps {
    onClick?: () => void,
    className?: string,
};

const Overlay = React.memo(({
    onClick = () => {},
    className = null,
}: OverlayProps) => (
    <div
        onClick={onClick}
        className={classNames(styles.overlay, className)}
    />
));

Overlay.displayName = 'Overlay';
export default Overlay;
