import React from 'react';
import PropTypes from 'prop-types';
import styles from './CloseButton.css';

const CloseButton = ({ onClick, icon, className }) => (
    <button
        role="button"
        onClick={onClick}
        className={styles.closeButton}
    >
        {icon ? icon : 'x'}
    </button>
);

CloseButton.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.node,
};

CloseButton.defaultProps = {
    className: null,
    icon: null,
};

CloseButton.displayName = 'CloseButton';
export default React.memo(CloseButton);
