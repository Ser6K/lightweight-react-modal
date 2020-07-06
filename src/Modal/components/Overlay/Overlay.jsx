import React from 'react';
import PropTypes from 'prop-types';
import styles from './Overlay.css';

const Overlay = ({ onClick, className }) => (
    <div
        onClick={onClick}
        className={styles.overlay}
    />
);

Overlay.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
};

Overlay.defaultProps = {
    onClick: () => {},
    className: null,
};

Overlay.displayName = 'Overlay';
export default React.memo(Overlay);
