import React from 'react';
import PropTypes from 'prop-types';
import { ContentDisplayName, classNames } from 'utils';
import { Content } from './ModalContent.styles';

const ModalContent = ({ children, className, ...props }) => (
    <Content
        {...props}
        className={classNames(className)}
    >
        {children}
    </Content>
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
