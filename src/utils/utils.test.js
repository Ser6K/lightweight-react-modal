import React from 'react';
import { getHeader, getFooter, getContent } from './utils';
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalFooter from '../ModalFooter/ModalFooter';
import ModalContent from '../ModalContent/ModalContent';

describe('get header, footer, content', () => {
    test('it returns correct component if found', () => {
        const headerComponent = <div><ModalHeader>Header</ModalHeader></div>;
        const contentComponent = <div><ModalContent>Header</ModalContent></div>;
        const footerComponent = <div><div /><ModalFooter>Footer</ModalFooter></div>;

        expect(Object.keys(getHeader(headerComponent.props.children)).length).toBeGreaterThan(0);
        expect(Object.keys(getContent(contentComponent.props.children)).length).toBeGreaterThan(0);
        expect(Object.keys(getFooter(footerComponent.props.children)).length).toBeGreaterThan(0);
    });

    test('it returns null if header component not found', () => {
        const component = <div>Name</div>;

        expect(getHeader(component.props.children)).toBe(null);
        expect(getContent(component.props.children)).toBe(null);
        expect(getFooter(component.props.children)).toBe(null);
    });

    test('it returns null if nested component is empty', () => {
        const headerComponent = <ModalHeader />;
        const contentComponent = <ModalContent />;
        const footerComponent = <ModalFooter />;

        expect(getHeader(headerComponent.props.children)).toBe(null);
        expect(getHeader(contentComponent.props.children)).toBe(null);
        expect(getFooter(footerComponent.props.children)).toBe(null);
    });
});
