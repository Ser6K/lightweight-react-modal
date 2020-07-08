type refType = {
    current: any;
};

export let modals: HTMLDivElement[] = [];

export const addModal = (ref: refType) => {
    modals = [...modals, ref.current];
};

export const removeModal  = (ref: refType) => modals = modals.filter(modal => modal !== ref.current);

export const isLastOpened = (ref: refType) => {
    const lastOpenIndex = modals.indexOf(ref.current);

    if (lastOpenIndex === modals.length - 1) {
        return true;
    }

    return false;
};
