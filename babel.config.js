module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components',
          '@styles': './src/styles',
          '@pages': './src/pages',
        },
      },
    ],
  ],
};
