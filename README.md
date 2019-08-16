# Javascript Helpers

Javascript helpers that will solve small problems and will work in the County's supported browsers.

## Getting Started

### Available Modules

- [ApiHelpers](src/ApiHelpers.md);

### Installation

1. Clone this repository
2. run `npm install` in your favorite terminal

### Dependencies

- [NodeJs](https://nodejs.org/en/)

## Scripts

### `npm test`

Run tests for repo

### `npm run-script build` and `npm run-script watch:build`

Builds file for use in the browser. File will be built to the `./lib` folder. `watch:build` allows the build task to continually run as you make changes.

### `npm run-script generate-md {fileName}`

Generates markdown for a modules function(s) if they are documented using [JSDoc](https://devdocs.io/jsdoc/) which is preferred.

## Deployment

For now you will need to run the build locally in order to deploy a script.

1. Checkout latest master branch
2. run `npm run-script build`
3. Grab the desired module from the './lib' folder
4. Move it to your desired location

## Contributing

### Adding a new Module

Add the following 3 files to the `src` directory. If it makes sense, make a sub-folder.

- [name].js
- [name].test.js
- [name].md

Add an entry to the webpack.config.js entry object. This should match the name of your javascript module.
