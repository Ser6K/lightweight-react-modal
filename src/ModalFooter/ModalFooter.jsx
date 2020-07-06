import React from 'react';
import PropTypes from 'prop-types';
import { FooterDisplayName, classNames } from 'utils';
import styles from './ModalFooter.css';

const ModalFooter = ({ children, className, ...props }) => (
    <div
        {...props}
        className={classNames(styles.footer, className)}
    >
        {children}
    </div>
);

ModalFooter.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

ModalFooter.defaultProps = {
    className: null,
};

ModalFooter.displayName = FooterDisplayName;
export default React.memo(ModalFooter);
