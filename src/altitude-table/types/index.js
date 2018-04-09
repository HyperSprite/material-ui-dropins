import {
  any,
  arrayOf,
  bool,
  func,
  object,
  oneOfType,
  number,
  shape,
  string,
} from 'prop-types';

export { default as dProps } from './dProps';

const types = {};
/** imports */
/** import withStyles from 'material-ui/styles' */
types.classes = object;


/** externl props expected to be passed in */
/** Persons elevation in meters */
types.baseElevation = number;
/** Persons current FTP */
types.currentFTP = number;
/** Extra Action components, e.g. buttons */
types.ExtraActions = any;


/** local project props */
/** Tool tip message for Close  button */
types.closeToolTip = string;
/** color such as "primary" and "inherit" */
types.color = string;
/** data fetching function */
types.fetchData = func;
/** Number, FTP */
types.ftpData = number;
/** Should this go full screen */
types.fullScreen = bool;
/** Function to close dialog */
types.handleClose = func;
/** Function to open dialog */
types.handleOpen = func;
/** Measurement Prefrence: metric: false, imperial: true */
types.mPref = bool;
/** state.open for DialogState */
types.open = bool;
/** Number of waiting items */
types.queued = number;
/** Power Zones */
types.powerZones = arrayOf(shape({
  zone: number,
  name: string,
  factorStart: oneOfType([
    number,
    bool,
  ]),
  factorEnd: oneOfType([
    number,
    bool,
  ]),
}));
/** Should this have print */
types.print = bool;
/** Numner of processed items */
types.processed = number;
/** render as prop function */
types.render = func;
/** Sets PageName */
types.setPageName = func;
/** User in Redux from Server */
types.user = shape({
  ftpHistory: arrayOf(shape({
    date: string,
    ftp: number,
  })),
  premium: bool,
  userGeoElevation: number,
});

export default types;
