import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'utils';
import styles from './CloseButton.css';

const CloseButton = ({ onClick, icon, className }) => (
    <button
        role="button"
        className={classNames(styles.closeButton, className)}
        onClick={onClick}
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
