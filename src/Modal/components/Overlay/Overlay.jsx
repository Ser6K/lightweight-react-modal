import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import { classNames } from 'utils';
import styles from './Overlay.styles';

const Overlay = ({ onClick, className }) => {
    const classes = createUseStyles(styles)();

    return <div onClick={onClick} className={classNames(classes.overlay, className)} />;
};

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
