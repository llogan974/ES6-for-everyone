<!--
What is a JS module?
It is not new, but is becoming popular.
A file w 1 or many functions inside of it, and those functions are available to
other files.

Support for ES6 modules is not huge.
We need some tooling to use this.

First step: setup package.json, then install webpack.
The standard for getting modules is NPM.

1st step, create an entry point, app.js.


variables are always scoped to their modules.
They dont bleed into everything else.

There are default exports, or NAMED exports.
In order to make something available, you need to export it.

There are DEFAULT, or NAMED imports.

Default exports are made for the main thing that the module does.

Named exports are for methods and modules.

You can import it as whatever you want, meaning you can change the name on import

Every module can have only 1 default export, but multiple NAMED exports.
 -->
1. First Install your dependencies:

```bash
npm install webpack webpack-cli
```

2. Then, Create a `webpack.config.js` file:

```js
module.exports = {
  mode: process.env.NODE_ENV || 'production',
  devtool: 'source-map',
  entry: './app.js',
  output: {
    filename: 'bundle.js',
  },
};
```

3. Setup the build npm script in `package.json`:

```json
"build": "webpack --progress --watch"
```
