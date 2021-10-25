module.exports = {
  lintOnSave: true,
  crossorigin: 'anonymous',
  integrity: true,
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'SpaceX database App',
    },
  },
  devServer: {
    disableHostCheck: true,
    useLocalIp: false,
  },
};
