export let modals = [];

export const addModal = ref => {
    modals = [...modals, ref.current];
};

export const removeModal  = ref => modals = modals.filter(modal => modal !== ref.current);

export const isLastOpened = (ref) => {
    const lastOpenIndex = modals.indexOf(ref.current);

    if (lastOpenIndex === modals.length - 1) {
        return true;
    }

    return false;
};
