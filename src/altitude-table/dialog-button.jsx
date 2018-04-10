import React from 'react';
import Dialog, { withMobileDialog } from 'material-ui/Dialog';
import Button from 'material-ui/Button';

import types from './types';
import DialogMessage from './dialog-message';

const DialogButton = (props) => {
  const { color, fullScreen, handleClose, handleOpen, ftpData, open } = props;
  return (

    <span>
      <Button
        variant="raised"
        color={color}
        onClick={handleOpen}
        size="small"
        data-testid="handleOpen"
      >
        {ftpData}
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
      >
        <DialogMessage handleClose={handleClose} print {...props}>
          <Button
            onClick={() => window.print()}
            color={color}
            data-testid="handlePrint"
          >
            Print
          </Button>
          <Button
            onClick={handleClose}
            data-testid="handleClose"
          >
            Close
          </Button>
        </DialogMessage>
      </Dialog>
    </span>

  );
};

DialogButton.propTypes = {
  ...types,
  ftpData: types.ftpData.isRequired,
  handleClose: types.handleClose.isRequired,
  handleOpen: types.handleOpen.isRequired,
};

export default withMobileDialog()(DialogButton);
