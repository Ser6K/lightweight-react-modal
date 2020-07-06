import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { FooterDisplayName, classNames } from 'utils';
import styles from './ModalFooter.styles';

const ModalFooter = ({ children, className, ...props }) => {
    const classes = createUseStyles(styles)();
    return (
        <div
            {...props}
            className={classNames(classes.content, className)}
        >
            {children}
        </div>
    );
};

ModalFooter.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

ModalFooter.defaultProps = {
    className: null,
};

ModalFooter.displayName = FooterDisplayName;
export default React.memo(ModalFooter);
