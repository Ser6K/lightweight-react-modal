import React from 'react';
import PropTypes from 'prop-types';
import { FooterDisplayName, classNames } from 'utils';
import { Footer } from './ModalFooter.styles';

const ModalFooter = ({ children, className, ...props }) => (
    <Footer
        {...props}
        className={classNames(className)}
    >
        {children}
    </Footer>
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
