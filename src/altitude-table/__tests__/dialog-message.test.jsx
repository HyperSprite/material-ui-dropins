import { render } from 'react-testing-library';
import 'dom-testing-library/extend-expect';
import React from 'react';
import DialogMessage from '../dialog-message';
import { dProps } from '../types';

describe('DialogMessage output', () => {
  test('Renders something', () => {
    const { getByTestId, getByText } = render(
      <DialogMessage {...dProps.dialogMessage} />,
    );
    expect(getByText('FTP')).toHaveTextContent(
      '200 FTP',
    );
    expect(getByTestId('zone-6')).toHaveTextContent(
      'Zone 6',
    );
    expect(getByTestId('zone-4')).toHaveTextContent(
      'Zone 4',
    );
    expect(getByTestId('zone-1')).toHaveTextContent(
      'Zone 1',
    );
    expect(getByTestId('percent-6')).toHaveTextContent(
      '121%',
    );
    expect(getByTestId('percent-3')).toHaveTextContent(
      '76% - 95%',
    );
    expect(getByTestId('percent-1')).toHaveTextContent(
      '55%',
    );
  });
});
