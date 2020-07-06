import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { classNames } from 'utils';
import styles from './CloseButton.styles';

const CloseButton = ({ onClick, icon, className }) => {
    const classes = createUseStyles(styles)();

    return (
        <button
            role="button"
            className={classNames(classes.close, className)}
            onClick={onClick}
        >
            {icon ? icon : 'x'}
        </button>
    );
};

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
