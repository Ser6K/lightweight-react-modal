import React from 'react';
import PropTypes from 'prop-types';
import { HeaderDisplayName } from '../utils/utils';

const ModalHeader = ({ children }) => children;

ModalHeader.displayName = HeaderDisplayName;

ModalHeader.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ModalHeader;
