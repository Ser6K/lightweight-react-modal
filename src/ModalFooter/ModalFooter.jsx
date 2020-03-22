import React from 'react';
import PropTypes from 'prop-types';
import { FooterDisplayName } from '../utils/utils';

const ModalFooter = ({ children }) => children;

ModalFooter.displayName = FooterDisplayName;

ModalFooter.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ModalFooter;
