import React from 'react';
import PropTypes from 'prop-types';
import { ContentDisplayName } from 'utils';
import styles from './ModalContent.css';

const ModalContent = React.memo(({ children, ...props }) => (
    <div className={styles.content}>
        {children}
    </div>
));

ModalContent.propTypes = {
    children: PropTypes.node.isRequired,
};

ModalContent.displayName = ContentDisplayName;
export default ModalContent;
