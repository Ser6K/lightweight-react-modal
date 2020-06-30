import React from 'react';
import { mount } from 'enzyme';
import ModalContent from './ModalContent';

describe('Modal content', () => {
    test('it matches snapshot with no props', () => {
        const modalContent = mount(<ModalContent>Content</ModalContent>);
        expect(modalContent).toMatchSnapshot();
    });
    test('it matches snapshot with props', () => {
        const modalContent = mount(<ModalContent className="className" style={{ display: 'inline' }}>Content</ModalContent>);
        expect(modalContent).toMatchSnapshot();
    });
});
