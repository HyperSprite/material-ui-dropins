import { shallow, mount } from 'enzyme';
import React from 'react';
import DialogMessage from '../dialog-message';
import { dProps } from '../types';

const TestItem = (
  <div>
    <DialogMessage {...dProps.dialogMessage} />
  </div>
);

test('Just render something with two children', () => {
  const wrapper = shallow(TestItem);
  expect(wrapper.render().children().length).toEqual(1);
});

test('Find DialogMassage', () => {
  const wrapper = mount(TestItem);
  expect(wrapper.find('DialogMessage')).toHaveLength(1);
});
