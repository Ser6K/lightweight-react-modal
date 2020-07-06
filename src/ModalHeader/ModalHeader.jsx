import React from 'react';
import PropTypes from 'prop-types';
import { HeaderDisplayName, classNames } from 'utils';
import styles from './ModalHeader.css';

const ModalHeader = ({ children, className, ...props }) => (
    <div
        {...props}
        className={classNames(styles.header, className)}
    >
        {children}
    </div>
);

ModalHeader.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

ModalHeader.defaultProps = {
    className: null,
};

ModalHeader.displayName = HeaderDisplayName;
export default React.memo(ModalHeader);
