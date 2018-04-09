import React from 'react';
import Dialog, { withMobileDialog } from 'material-ui/Dialog';
import Button from 'material-ui/Button';

import types from './types';
// import DialogState from './dialog-state';
import DialogMessage from './dialog-message';

const propTypes = {
  ...types,
  ftpData: types.ftpData.isRequired,
};

const DialogButton = (props) => {
  const { color, fullScreen, handleClose, handleOpen, ftpData, open } = props;
  return (

    <span>
      <Button
        variant="raised"
        color={color}
        onClick={handleOpen}
        size="small"
      >
        {ftpData}
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
      >
        <DialogMessage handleClose={handleClose} print {...props}>
          <Button onClick={() => window.print()} color={color} >Print</Button>
          <Button onClick={handleClose} >Close</Button>
        </DialogMessage>
      </Dialog>
    </span>

  );
};

DialogButton.propTypes = propTypes;

export default withMobileDialog()(DialogButton);
