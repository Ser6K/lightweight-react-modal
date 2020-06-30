import React from 'react';
import PropTypes from 'prop-types';
import ModalContext from './ModalContext';

const ModalConsumer = ({ children }) => (
    <ModalContext.Consumer>
        {modal => React.cloneElement(children, { modal })}
    </ModalContext.Consumer>
);

ModalConsumer.propTypes = {
    children: PropTypes.node.isRequired,
};

ModalConsumer.displayName = 'ModalConsumer';
export default React.memo(ModalConsumer);
