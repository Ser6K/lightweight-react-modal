import React from 'react';
import { mount } from 'enzyme';
import ModalHeader from './ModalHeader';

describe('Modal header', () => {
    test('it matches snapshot with no props', () => {
        const modalHeader = mount(<ModalHeader>Header</ModalHeader>);
        expect(modalHeader).toMatchSnapshot();
    });
    test('it matches snapshot with props', () => {
        const modalHeader = mount(<ModalHeader className="className" style={{ display: 'inline' }}>Header</ModalHeader>);
        expect(modalHeader).toMatchSnapshot();
    });
});
