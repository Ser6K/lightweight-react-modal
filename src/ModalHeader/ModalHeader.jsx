import React from 'react';
import PropTypes from 'prop-types';
import { HeaderDisplayName } from 'utils';
import { Header } from './ModalHeader.styles';

const ModalHeader = React.memo(({ children, ...props }) => (
    <Header {...props}>
        {children}
    </Header>
));

ModalHeader.propTypes = {
    children: PropTypes.node.isRequired,
};

ModalHeader.displayName = HeaderDisplayName;
export default ModalHeader;
