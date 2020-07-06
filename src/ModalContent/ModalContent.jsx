import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { ContentDisplayName, classNames } from 'utils';
import styles from './ModalContent.styles';

const ModalContent = ({ children, className, ...props }) => {
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

ModalContent.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

ModalContent.defaultProps = {
    className: null,
};

ModalContent.displayName = ContentDisplayName;
export default React.memo(ModalContent);
