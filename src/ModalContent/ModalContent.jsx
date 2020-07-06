import React from 'react';
import PropTypes from 'prop-types';
import { ContentDisplayName, classNames } from 'utils';
import styles from './ModalContent.css';

const ModalContent = ({ children, className, ...props }) => (
    <div
        {...props}
        className={classNames(styles.content, className)}
    >
        {children}
    </div>
);

ModalContent.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

ModalContent.defaultProps = {
    className: null,
};

ModalContent.displayName = ContentDisplayName;
export default React.memo(ModalContent);
