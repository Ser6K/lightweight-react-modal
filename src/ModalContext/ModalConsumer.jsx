import React from 'react';
import ModalContext from './ModalContext';

const ModalConsumer = (Component) => (
    <ModalContext.Consumer>
        {modal => <Component modal={modal} />}
    </ModalContext.Consumer>
);

export default ModalConsumer;
