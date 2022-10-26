const output = {
  globalObject: "this",
};

const publicPath = process.env.WEBPACK_PUBLIC_PATH || '/';

module.exports = {
  publicPath,
  configureWebpack: {
    devServer: {
      watchOptions: {
        poll: true,
      },
    },
    output,
  }
};
