import React from 'react';
import PropTypes from 'prop-types';
import { FooterDisplayName } from 'utils';
import styles from './ModalFooter.css';

const ModalFooter = React.memo(({ children, ...props }) => (
    <div
        {...props}
        className={styles.footer}
    >
        {children}
    </div>
));

ModalFooter.propTypes = {
    children: PropTypes.node.isRequired,
};

ModalFooter.displayName = FooterDisplayName;
export default ModalFooter;
