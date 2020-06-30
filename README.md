# React Modal

React modal component


## Installation


```bash
npm i react-modal
```

## Usage


```jsx static
import React from 'react';
import {
    Modal,
    ModalHeader,
    ModalContent,
    ModalFooter,
} from 'react-modal';

<Modal>
    <ModalHeader>
        Modal Header.
    </ModalHeader>
    <ModalContent>
        Modal Content.
    </ModalContent>
    <ModalFooter>
        Modal Footer.
    </ModalFooter>
</Modal>
```


## PropTypes

##### Modal

| Name | Type | Description | Default value |
| --- | --- | -- | -- |
| onClose | func | On close callback. | null |
| fluid | func | Sets the width and height to 90% of the screen. | false |
| closable | bool | Makes modal closable/unclosable. | true |
| maxHeight | number | Sets modal max height. | 500 |
| minHeight | number | Sets modal min height. | 100 |
| maxWidth | number | Sets modal max width. | 500 |
| minWidth | number | Sets modal min width. | 200 |
| customClassNames | shape({ wrapper: string, modal: string, closeBtn: string, overlay:string }) | Modal custom classNames. | null |
| closeButtonIcon | node | Modifies close button icon. | null |


##### ModalHeader, ModalContent, ModalFooter.

| Name | Type | Description | Default value |
| --- | --- | -- | -- |
| className | string | Applies extra className. | null |

## Modal Context

You can use ModalContext to get better control of modal in your application.
With help of ModalContext you can trigger one or multiple modals from anywhere in our application.


## Usage

##### Default Example:

```jsx static
import React from 'react';
import ReactDom from 'react-dom';
import {
    Modal,
    ModalContent,
    ModalProvider,
} from 'react-modal';

const ModalExample = ({ modal }) => (
    <>
        <button
            type="button"
            onClick={modal.toggle('modal_name')}
        >
            Toggle modal
        </button>
        {modal.isOpen('modal_name') ? (
            <Modal>
                <ModalContent>
                    Modal
                </ModalContent>
            </Modal>
        ) : null}
    </>
);

const App = () => (
    <ModalProvider>
        <ModalHookExample />
    </ModalProvider>
);

ReactDom.render(<App />, document.getElementById('app'));
```

##### Modal Context hook example:

```jsx static
import React from 'react';
import ReactDom from 'react-dom';
import {
    Modal,
    ModalContent,
    ModalProvider,
    useModalContext,
} from 'react-modal';

const ModalHookExample = ({ modal }) => {
    const modal = useModalContext();

    return (
        <>
            <button
                type="button"
                onClick={modal.toggle('modal_name')}
            >
                Toggle modal
            </button>
            {modal.isOpen('modal_name') ? (
                <Modal>
                    <ModalContent>
                        Modal
                    </ModalContent>
                </Modal>
            ) : null}
        </>
    );
};

const App = () => (
    <ModalProvider>
        <ModalHookExample />
    </ModalProvider>
);

ReactDom.render(<App />, document.getElementById('app'));
```

## PropTypes

ModalProvider methods

| Name | params | Description |
| --- | --- | -- |
| open(name) | name: string/number | opens modal. |
| close(name) | name: string/number | closes modal. |
| toggle(name) | name: string/number | toggles modal. |
| closeAll() | - | closes all opened modals. |
| isOpen(name) | name: string/number | checks if modal is opened. |
| isClose(name) | name: string/number | checks if modal is closed. |
| list | - | returns list of opened modals. |
