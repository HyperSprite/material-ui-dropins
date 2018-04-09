/**
  Default Props are seperated by component
*/
const dProps = {
  dialogMessage: {},
};

/** external props */
dProps.altitudeTable = {
  baseElevation: 0,
  currentFTP: 200,
  mPref: false,
};

/** internal props */
dProps.dialogButton = {
  color: 'primary',
  ftpData: 200,
  fullScreen: false,
};

dProps.dialogMessage = {
  ftpData: 200,
  powerZones: [
    { zone: 6, name: 'Anaerobic', factorStart: 1.21, factorEnd: false },
    { zone: 5, name: 'VO2 Max', factorStart: 1.06, factorEnd: 1.20 },
    { zone: 4, name: 'Threshold', factorStart: 0.96, factorEnd: 1.05 },
    { zone: 3, name: 'Tempo', factorStart: 0.76, factorEnd: 0.95 },
    { zone: 2, name: 'Endurance', factorStart: 0.56, factorEnd: 0.75 },
    { zone: 1, name: 'Active Recovery', factorStart: false, factorEnd: 0.55 },
  ],
  print: false,
};

dProps.dialogState = null;

export default dProps;
