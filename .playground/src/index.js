import React from 'react';
import { Modal } from 'react-modal';

const ModalExample = () => {
    const [open, setOpen] = useState(true);

    return (
        <Modal
            onClose={() => setOpen(false)}
            fluid
        >
            <div>Modal</div>
        </Modal>
    );
};

export default ModalExample;
