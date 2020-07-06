import React from 'react';
import PropTypes from 'prop-types';
import { FooterDisplayName } from 'utils';
import { Footer } from './ModalFooter.styles';

const ModalFooter = React.memo(({ children, ...props }) => (
    <Footer {...props}>
        {children}
    </Footer>
));

ModalFooter.propTypes = {
    children: PropTypes.node.isRequired,
};

ModalFooter.displayName = FooterDisplayName;
export default ModalFooter;
