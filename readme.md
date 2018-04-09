# React Vignette

Adds a basic vignette to a sibling.


### Install
```npm install --save @hypersprite/react-vignette```

### Import
```import Vignette from '@hypersprite/react-vignette'```

## Usage
Add ```<Vignette />``` as a sibling to another component

```js
<div>
  <SomeSiblingDiv />
  <Vignette />
</div>
```


## Testing and Deployment

* Testing includes Jest testing with Enzyme for mounting and rendering and Istanbul for coverage reporting.
* Linting provided by ESlint with AirBnB presets.
* Modern JavaScript and JSX via babel.
* Git pre-commit hooks to keep everyone honest.


### Setup
```bash
git clone https://github.com/HyperSprite/react-vignette.git
cd react-vignette
npm install
```
Make sure to update this readme.md and package.json with your own information.

## Testing

Testing provided by Jest, Enzyme and coverage report by Istanbul

* ```npm test``` Runs all tests.
* ```npm run test:src``` only runs the tests in src in watch mode.

## Add+Commit, Version

> The branch must be clean to version and publish

* Add
* Commit, which will:
 * Run linting and tests with pre-commit hooks.

```bash
git commit -am 'some totally useful comment'
```

Next, we need to Version:

> Note: An initial publish needs a little setup before ```npm version``` will work.

```js
// manually build your dst
npm run build
// publish your module
// --access public if this is a scoped module and you want it public
npm publish --access public
// delete dst folder
rm -rf dst
```

* version, which will:
 * Rerun linting and tests
 * Updates the package.json version number based on Major, Minor and Patch
 * Git add package.json using the version number as the commit message
 * Push the changes to Github
 * Transpile the JSX to ES5 with babel into the dst/ directory
 * Publish to npm
 * Delete the dst directory

```bash   
npm version <major | minor | patch>
```
