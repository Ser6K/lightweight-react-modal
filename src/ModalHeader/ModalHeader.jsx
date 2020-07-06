import React from 'react';
import PropTypes from 'prop-types';
import { HeaderDisplayName, classNames } from 'utils';
import { Header } from './ModalHeader.styles';

const ModalHeader = ({ children, className, ...props }) => (
    <Header
        {...props}
        className={classNames(className)}
    >
        {children}
    </Header>
);

ModalHeader.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

ModalHeader.defaultProps = {
    className: null,
};

ModalHeader.displayName = HeaderDisplayName;
export default React.memo(ModalHeader);
