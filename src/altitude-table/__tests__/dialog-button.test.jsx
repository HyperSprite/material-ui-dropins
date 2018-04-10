import { render } from 'react-testing-library';
import 'dom-testing-library/extend-expect';
import { Simulate } from 'react-dom/test-utils';
import React from 'react';
import { createShallow } from 'material-ui/test-utils';
import DialogButton from '../dialog-button';
import types, { dProps } from '../types';


const DialogMessage = ({ children, ftpData, fullScreen }) => (
  <div data-testid="actions">
    {children}
  </div>
);

DialogMessage.propTypes = { ...types };

const open = true;
const handleClose = jest.fn(() => false);
const handleOpen = jest.fn(() => true);

const TestItem = (
  <DialogButton
    {...dProps.dialogButton}
    print
    handleClose={handleClose}
    handleOpen={handleOpen}
    open={open}
  />
);

describe('DialogButton', () => {
  it('Renders something', () => {
    const { getByTestId, getByText } = render(TestItem);
    expect(getByTestId('handleOpen')).toHaveTextContent(
      '200',
    );
    Simulate.click(getByTestId('handleOpen'));

    expect(handleOpen).toHaveBeenCalled();
    // need to come back and build test for close and print buttons
  });
});
