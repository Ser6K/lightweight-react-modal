import React from 'react';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
import document from 'global/document';
import ReactDom from 'react-dom';
import * as ModalRegister from 'register';
import Modal from './Modal';
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalFooter from '../ModalFooter/ModalFooter';
import ModalContent from '../ModalContent/ModalContent';

describe('Modal snapshots', () => {
    test('default modal matches snapshot', () => {
        const modal = mount(<Modal><div>dialog</div><div>contetn</div></Modal>);
        expect(modal).toMatchSnapshot();
    });

    test('fluid modal matches snapshot', () => {
        const modal = mount(<Modal>Modal</Modal>);
        expect(modal).toMatchSnapshot();
    });

    test('modal matches snapshot when maxHeight/minHeight/maxWidth/minWidth props are provided', () => {
        const modal = mount(
            <Modal
                minHeight={50}
                maxHeight={100}
                minWidth={60}
                maxWidth={120}
            >
                Modal
            </Modal>
        );
        expect(modal).toMatchSnapshot();
    });

    test('modal matches snapshot when custom styles are set', () => {
        const modal = mount(
            <Modal
                customClassNames={{
                    wrapper: 'wrapperClassName',
                    modal: 'modalClassName',
                    closeBtn: 'closeButtonClassName',
                    overlay: 'overlayClassName',
                }}
            >
                Modal
            </Modal>
        );
        expect(modal).toMatchSnapshot();
    });
});

describe('Modal general', () => {
    test('it can be mounted', () => {
        const modal = mount(<Modal>Modal</Modal>);
        expect(modal.children()).toHaveLength(1);
    });

    test('it can register modal reference on mount', () => {
        const modalRegisterSpy = jest.spyOn(ModalRegister, 'addModal');
        mount(<Modal>Modal</Modal>);

        expect(modalRegisterSpy).toHaveBeenCalledTimes(1);
    });

    test('it removes registered modal reference onClose', () => {
        const modal = mount(<Modal onClose={() => {}}>Modal</Modal>);
        const modalUnregisterSpy = jest.spyOn(ModalRegister, 'removeModal');

        modal.find('Overlay').simulate('click');
        expect(modalUnregisterSpy).toHaveBeenCalledTimes(1);
    });

    test('it mounts with create portal', () => {
        const portalSpy = jest.spyOn(ReactDom, 'createPortal');
        shallow(<Modal>Modal</Modal>);

        expect(portalSpy).toHaveBeenCalledTimes(1);
    });

    test('it can be mounted with header, content, footer', () => {
        const modal = mount(
            <Modal>
                <ModalHeader>Header</ModalHeader>
                <ModalContent>Content</ModalContent>
                <ModalFooter>Footer</ModalFooter>
            </Modal>
        );
        expect(modal.find('ModalHeader').text()).toBe('Header');
        expect(modal.find('ModalContent').text()).toBe('Content');
        expect(modal.find('ModalFooter').text()).toBe('Footer');
    });

    test('it does\'t mount header, content, footer if they are empty', () => {
        const modal = mount(
            <Modal>
                <ModalHeader><></></ModalHeader>
                <ModalContent><></></ModalContent>
                <ModalFooter><></></ModalFooter>
            </Modal>
        );
        expect(modal.find('ModalHeader')).toEqual({});
        expect(modal.find('ModalContent')).toEqual({});
        expect(modal.find('ModalFooter')).toEqual({});
    });

    test('onClose button not visible if modal is not closable', () => {
        const modal = mount(<Modal closable={false}>Modal</Modal>);
        const closeButton = modal.find('CloseButton');

        expect(closeButton.exists()).toBeFalsy();
    });
});

describe('Modal props', () => {
    test('onClose fires on overlay click if modal is closable', () => {
        const onClose = jest.fn();
        const modal = mount(<Modal onClose={onClose}>Modal</Modal>);

        modal.find('Overlay').simulate('click');
        expect(onClose).toBeCalledTimes(1);
    });

    test('onClose doesn\'t fire up on overlay click if dialog is not closable', () => {
        const onClose = jest.fn();
        const modal = mount(<Modal closable={false} onClose={onClose}>Modal</Modal>);

        modal.find('Overlay').simulate('click');
        expect(onClose).toBeCalledTimes(0);
    });

    test('onClose fires on close button click', () => {
        const onClose = jest.fn();
        const modal = mount(<Modal onClose={onClose}>Modal</Modal>);

        modal.find('CloseButton').simulate('click');
        expect(onClose).toBeCalledTimes(1);
    });

    describe('Esc key press', () => {
        let events = {};

        beforeEach(() => {
            document.addEventListener = jest.fn((event, cb) => {
                events[event] = cb;
            });
        });

        afterEach(() => {
            events = {};
        });

        test('onClose fires on escape on press', () => {
            const onClose = jest.fn();
            mount(<Modal onClose={onClose}>Modal</Modal>);

            act(() => { events.keydown({ keyCode: 27 }); });
            expect(onClose).toBeCalledTimes(1);
        });

        test('keydown event is not added to document if modal is not closable', () => {
            const onClose = jest.fn();
            mount(<Modal closable={false} onClose={onClose}>Modal</Modal>);

            expect(events).toEqual({});
        });
    });

    test('close button default icon can be changed', () => {
        const onClose = jest.fn();
        const modal = mount(<Modal onClose={onClose} closeButtonIcon="Close">Modal</Modal>);

        const closeButton = modal.find('CloseButton');
        expect(closeButton.text()).toBe('Close');
    });
});