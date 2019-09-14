# Razzle Plugin Disable Sourcemaps Production

This package contains a plugin to disable Sourcemaps CSS and JS on Production build with Razzle.

## Usage in Razzle Projects

- Install `razzle-plugin-disable-sourcemaps-production`

  if you're using `yarn`

  ```
  yarn add razzle-plugin-disable-sourcemaps-production --dev
  ```

  if you're using `npm`

  ```
  npm install razzle-plugin-disable-sourcemaps-production --save-dev
  ```

- create a `razzle.config.js` file in root directory of project (next to the package.json) and put this content inside it

  ```
  // razzle.config.js
  module.exports = {
    plugins: [
      'disable-sourcemaps-production'
    ],
  };
  ```

## Options

- devtool (default: `cheap-module-eval-source-map`) <br>
  You can change the `devtool` on Development mode with the option `devtool`, but will be disable on `Production`:

  ```
  // razzle.config.js
  module.exports = {
    plugins: [
      {
        name: 'disable-sourcemaps-production',
        options: {
          devtool: 'eval'
        }
      }
    ],
  };
  ```

See [Webpack Devtool Docs](https://webpack.js.org/configuration/devtool/#devtool) for more information.
