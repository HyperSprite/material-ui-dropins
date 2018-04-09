import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import { createShallow } from 'material-ui/test-utils';
import DialogButton from '../dialog-button';
import types, { dProps } from '../types';


const InsideDiv = ({ ftpData, fullScreen }) => (
  <div>
    {ftpData}
    {fullScreen}
  </div>
);

InsideDiv.propTypes = { ...types };

const TestItem = (
  <DialogButton {...dProps.dialogButton} >
    <InsideDiv />
  </DialogButton>
);

describe('DialogButton', () => {
  let muiShallow;
  beforeEach(() => {
    muiShallow = createShallow();
  });

  it('Renders something', () => {
    const wrapper = shallow(TestItem);
    expect(wrapper.find('InsideDiv').length).toBe(1);
  });

  // it('Check props', () => {
  //   // const wrapper = mount(muiShallow(TestItem).get(0));
  //   const wrapper = mount(TestItem).get(0);
  //   expect(wrapper.props().ftpData).toBe(200);
  //   expect(wrapper.props()).toBe(200);
  // });

  it('Match snapshot', () => {
    const wrapper = shallow(TestItem);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

// test('Render something', () => {
//   const wrapper = mount(TestItem).get(0);
//   expect(wrapper.find('DialogButton')).toHaveLength(1);
// });



// test('Should handle state changes', () => {
//   const wrapper = mount(shallow(TestItem).get(0);
//   console.log(wrapper.state());
//   expect(wrapper.state('open')).toEqual(false);
//   wrapper.simulate('click');
//   expect(wrapper.state('open')).toEqual(true);
// });
