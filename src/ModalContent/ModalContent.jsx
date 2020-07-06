import React from 'react';
import PropTypes from 'prop-types';
import { ContentDisplayName } from 'utils';
import { Content } from './ModalContent.styles';

const ModalContent = React.memo(({ children, ...props }) => (
    <Content {...props}>
        {children}
    </Content>
));

ModalContent.propTypes = {
    children: PropTypes.node.isRequired,
};

ModalContent.displayName = ContentDisplayName;
export default ModalContent;
