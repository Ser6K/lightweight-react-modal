import React from 'react';
import PropTypes from 'prop-types';
import { HeaderDisplayName } from 'utils';
import styles from './ModalHeader.css';

const ModalHeader = React.memo(({ children, ...props }) => (
    <div
        {...props}
        className={styles.header}
    >
        {children}
    </div>
));

ModalHeader.propTypes = {
    children: PropTypes.node.isRequired,
};

ModalHeader.displayName = HeaderDisplayName;
export default ModalHeader;
