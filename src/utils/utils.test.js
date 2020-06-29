import React from 'react';
import { mount } from 'enzyme';
import {
    getHeader,
    getFooter,
    HeaderDisplayName,
    FooterDisplayName,
    getContent,
} from './utils';
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalFooter from '../ModalFooter/ModalFooter';

describe('getHeader', () => {
    test('it returns header component if found', () => {
        const component = <div><div /><ModalHeader>Header</ModalHeader></div>;
        expect(Object.keys(getHeader(component.props.children)).length).toBeGreaterThan(0);
    });

    test('it returns null if header component not found', () => {
        const component = <div>Header</div>;
        expect(getHeader(component.props.children)).toBe(null);
    });

    test('it returns null if nested component is empty or has valid type', () => {
        const component = <div><div /><ModalHeader></ModalHeader></div>;
        expect(getHeader(component.props.children)).toBe(null);
    });
});

describe('getFooter', () => {
    test('it returns footer component if found', () => {
        const component = <div><div /><ModalFooter>Footer</ModalFooter></div>;
        expect(Object.keys(getFooter(component.props.children)).length).toBeGreaterThan(0);
    });

    test('it returns null if footer component not found', () => {
        const component = <div>Footer</div>;
        expect(getFooter(component.props.children)).toBe(null);
    });

    test('it returns null if footer component is empty', () => {
        const component = <div><ModalFooter></ModalFooter></div>;
        expect(getFooter(component.props.children)).toBe(null);
    });
});
