import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import ModalProvider from './ModalProvider';
import useModalContextHook from './useModalContextHook';

describe('ModalProvider', () => {
    let modalContext = null;
    const firstModalName = 'modal';
    const secondModalName = 'modal2';
    const thirdModalName = 'modal3';

    beforeEach(() => {
        const modal = ({ children }) => <ModalProvider>{children}</ModalProvider>;
        modalContext = renderHook(() => useModalContextHook(), { wrapper: modal }).result;
    });

    test('modal list return correct array of modal names', () => {
        act(() => modalContext.current.open(firstModalName));
        act(() => modalContext.current.open(thirdModalName));

        expect(modalContext.current.list).toEqual([firstModalName, thirdModalName]);
    });

    test('modal open() method can add new item/items to the modal list', () => {
        act(() => modalContext.current.open(firstModalName));

        expect(modalContext.current.list).toEqual([firstModalName]);

        act(() => modalContext.current.open(secondModalName));

        expect(modalContext.current.list).toEqual([firstModalName, secondModalName]);
    });

    test('modal close() method can remove item/items from the modal list', () => {
        act(() => modalContext.current.open(firstModalName));
        act(() => modalContext.current.open(secondModalName));
        act(() => modalContext.current.close(firstModalName));

        expect(modalContext.current.list).toEqual([secondModalName]);

        act(() => modalContext.current.close(secondModalName));

        expect(modalContext.current.list).toEqual([]);
    });

    test('modal toggle() method can add/remove item/items to/from the modal list', () => {
        act(() => modalContext.current.toggle(firstModalName));

        expect(modalContext.current.list).toEqual([firstModalName]);

        act(() => modalContext.current.toggle(firstModalName));

        expect(modalContext.current.list).toEqual([]);
    });

    test('modal closeAll() can clear the modal list', () => {
        act(() => modalContext.current.open(firstModalName));
        act(() => modalContext.current.open(secondModalName));
        act(() => modalContext.current.open(thirdModalName));
        act(() => modalContext.current.closeAll());

        expect(modalContext.current.list).toEqual([]);
    });

    test('modal isOpen() return correct result', () => {
        act(() => modalContext.current.open(firstModalName));
        act(() => modalContext.current.open(thirdModalName));

        expect(modalContext.current.isOpen(firstModalName)).toBe(true);
        expect(modalContext.current.isOpen(secondModalName)).toBe(false);
        expect(modalContext.current.isOpen(thirdModalName)).toBe(true);
    });

    test('modal isClose() return correct result', () => {
        act(() => modalContext.current.open(firstModalName));
        act(() => modalContext.current.open(thirdModalName));

        expect(modalContext.current.isClose(firstModalName)).toBe(false);
        expect(modalContext.current.isClose(secondModalName)).toBe(true);
        expect(modalContext.current.isClose(thirdModalName)).toBe(false);
    });
});
