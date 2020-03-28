import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { mount } from 'enzyme';
import Modal from './Modal';
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalFooter from '../ModalFooter/ModalFooter';

describe('Modal tests', () => {
    test('it can be mounted', () => {
        const modal = mount(<Modal>Modal</Modal>);
        expect(modal.children()).toHaveLength(1);
    });

    test('it matches snapshot', () => {
        const modal = mount(<Modal><div>dialog</div><div>contetn</div></Modal>);
        expect(modal).toMatchSnapshot();
    });

    test('it mounts with create portal', () => {
        const portalSpy = jest.spyOn(ReactDom, 'createPortal');
        mount(<Modal>Modal</Modal>);

        expect(portalSpy).toHaveBeenCalledTimes(1);
    });

    test('it can be mounted with header', () => {
        const modal = mount(<Modal><ModalHeader>Header</ModalHeader></Modal>);
        expect(modal.find('ModalHeader').text()).toBe('Header');
    });

    test('it doesn\'t mount header if it\'s empty', () => {
        const modal = mount(<Modal><ModalHeader /></Modal>);
        expect(modal.find('ModalHeader')).toEqual({});
    });

    test('it can be mounted with footer', () => {
        const modal = mount(<Modal><ModalFooter>Footer</ModalFooter></Modal>);
        expect(modal.find('ModalFooter').text()).toBe('Footer');
    });

    test('it doesn\'t mount footer if it\'s empty', () => {
        const modal = mount(<Modal><ModalFooter /></Modal>);
        expect(modal.find('ModalFooter')).toEqual({});
    });

    test('fluid modal matches snapshot', () => {
        const modal = mount(<Modal fluid>Modal</Modal>);
        expect(modal).toMatchSnapshot();
    });

    test('not closable modal matches snapshot', () => {
        const modal = mount(<Modal closable={false}>Modal</Modal>);
        expect(modal).toMatchSnapshot();
    });

    test('it closes with close btn click', () => {
        const Component = () => {
            const [open, setOpen] = useState(true);

            return open && (
                <Modal onClose={() => setOpen(false)}>
                    Modal
                </Modal>
            );
        };

        const modal = mount(<Component />);
        const closeBtn = modal.find('button');
        closeBtn.simulate('click');
        expect(modal.children()).toHaveLength(0);
    });

    test('it closes with overlay click', () => {
        const Component = () => {
            const [open, setOpen] = useState(true);

            return open && (
                <Modal onClose={() => setOpen(false)}>
                    Modal
                </Modal>
            );
        };

        const modal = mount(<Component />);
        const modalWrapper = modal.find('div[onClick]');
        modalWrapper.simulate('click');
        expect(modal.children()).toHaveLength(0);
    });
});
