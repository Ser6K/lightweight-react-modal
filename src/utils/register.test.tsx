import * as ModalRegister from './register';

describe('Modal register tests', () => {
    const ref1 = { current: 1 };
    const ref2 = { current: 2 };

    test('it can register modal ref', () => {
        ModalRegister.addModal(ref1);
        expect(ModalRegister.modals).toEqual([1]);
    });

    test('it unregister modal ref', () => {
        ModalRegister.addModal(ref1);
        ModalRegister.addModal(ref2);
        ModalRegister.removeModal(ref1);
        expect(ModalRegister.modals).toEqual([2]);

        ModalRegister.removeModal(ref2);
        expect(ModalRegister.modals).toEqual([]);
    });

    test('it can get correct last ref index', () => {
        ModalRegister.addModal(ref2);
        ModalRegister.addModal(ref1);

        expect(ModalRegister.isLastOpened(ref1)).toBe(true);
        expect(ModalRegister.isLastOpened(ref2)).toBe(false);
    });
});