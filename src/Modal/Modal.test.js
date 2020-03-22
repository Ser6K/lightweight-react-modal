import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';

it('can be mounted', () => {
    const modal = shallow(<Modal />);
    expect(modal.children()).toHaveLength(1);
});

