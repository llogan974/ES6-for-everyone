// This is an object
module.exports = {
  mode: process.env.NODE_ENV || 'production',

  watch: true,

  devtool: 'source-map',
  // Entry point is where you want to start the application
  entry: './app.js',

  // Where do you want it to go?
  output: {
    filename: 'bundle.js',
  },
};
