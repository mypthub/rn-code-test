module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@common': './src/common',
          '@components': './src/components',
          '@styles': './src/styles',
          '@pages': './src/pages',
          types: './src/types/index.d.ts',
        },
      },
    ],
  ],
};
