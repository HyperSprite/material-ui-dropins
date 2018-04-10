import React from 'react';
import { withStyles } from 'material-ui/styles';
import {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';

import justFns from 'just-fns';
import types, { dProps } from './types';

const styles = theme => ({
  root: {},
  title: {
    fontWeight: 700,
    fontSize: '1em',
    padding: '2em 2em 0 2em',
  },
  row: {
    padding: '0.2em 0 0.3em 0.9em',
    display: 'flex',
    justifyContent: 'start',
    flexFlow: 'row wrap',
    '&:first-child': {
      paddingTop: '0.5em',
    },
    '&:nth-child(even)': {
      backgroundColor: theme.palette.background.default,
    },
    '&:nth-child(odd)': {
      backgroundColor: theme.palette.background.paper,
    },
  },
  boxMain: {
    maxWidth: 300,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  boxLabel: {
    color: theme.palette.secondary[600],
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    fontSize: '0.9em',
    width: 240,
  },
  box: {
    maxWidth: 300,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  boxData: {
    fontSize: '0.9em',
    textAlign: 'center',
    width: 130,
  },
  button: {
    margin: '0.3em',
  },
  buttonLabel: {
    paddingLeft: '0.5em',
  },
  content: {
    ...theme.typography.body1,
    padding: '0.2em',
  },
  icon: {
    fill: theme.palette.primary.contrastText,
  },
  /**
  * Print style
  */
  '@media print': {
    '*::before': {
      display: 'none',
      boxShadow: 'none',
    },
    noPrint: {
      display: 'none',
    },
    root: {
      maxWidth: '20em',
      color: '#000000',
      fontWeight: 600,
      margin: 0,
      boxShadow: 'none',
    },
    title: {
      ...theme.typography.body2,
      margin: 0,
      padding: 1,
    },
    boxLabel: {
      display: 'flex',
      flexDirection: 'column',
      fontSize: '0.7em',
    },
    box: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      fontSize: '0.8em',
    },
    boxMain: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
      backgroundColor: 'black',
    },
    boxData: {
      width: '3em',
    },
    row: {
      padding: 0,
    },
    zone: {
      display: 'none',
    },
    button: {
      display: 'none',
    },
  },
});

const DialogMessage = (props) => {
  const {
    classes,
    children,
    ftpData,
    powerZones,
  } = props;
  const getZones = (low, high, factor, percent) => {
    const tmpPercent = percent ? '%' : '';
    const tmpLow = low ? `${justFns.round(low * factor, 0)}${tmpPercent}` : '';
    const tmpHigh = high ? `${justFns.round(high * factor, 0)}${tmpPercent}` : '';
    return (
      <div className={classes.box}>
        <div>{tmpLow}</div>
        {(tmpLow && tmpHigh) && <div className={classes.noPrint}>{'\u00A0'}-{'\u00A0'}</div>}
        <div>{tmpHigh}</div>
      </div>
    );
  };

  return (
    <div className={classes.root} >
      <DialogTitle
        className={classes.title}
        data-testid="title"
      >
        <span className={classes.noPrint}>
          {'Zones for\u00A0'}
        </span>
        {`${ftpData} FTP`}
      </DialogTitle>
      <DialogContent className={classes.content} >
        {powerZones.map(row => (
          <div
            key={row.zone}
            className={classes.row}
          >
            <div className={classes.boxLabel}>
              <div className={classes.zone} data-testid={`zone-${row.zone}`}>
                {`Zone ${row.zone}`}
              </div>
              <div className={classes.row.zoneName} >
                <span className={classes.noPrint}>{'\u00A0:\u00A0'}</span>
                {row.name}
              </div>
            </div>
            <div className={classes.boxMain} >
              <div className={classes.boxData} data-testid={`percent-${row.zone}`}>
                {getZones(row.factorStart, row.factorEnd, 100, true)}
              </div>
              <div className={classes.boxData} data-testid={`range-${row.zone}`}>
                {getZones(row.factorStart, row.factorEnd, ftpData, false)}
              </div>
            </div>
          </div>
        ))}
      </DialogContent>
      <DialogActions className={classes.noPrint} >
        {children}
      </DialogActions>
    </div>
  );
};

DialogMessage.propTypes = { ...types };
DialogMessage.defaultProps = { ...dProps.dialogMessage };

export default withStyles(styles, { name: 'StyledDialogMassage' })(DialogMessage);
