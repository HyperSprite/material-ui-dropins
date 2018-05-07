# Material-ui Dropins

Specialized components used in A Race athlete that are probably of little use to anyone else.

Install
`npm i @hypersprite/material-ui-dropins`


## Components

### AltitudeTable

Creates a table of Power at Altitude with Power Zone modal

[Demo](https://codesandbox.io/s/z67molq8ox)

##### Receives Props

| prop name | type | values | description |
| --------- | ---- | ------ | ----------- |
| baseElevation | Number | Meters | Athlete's base altitude in meters |
| currentFTP | Number | FTP | Athlete's current FTP |
| mPref | Boolean | true or false* | true: imperial, false: metric |
