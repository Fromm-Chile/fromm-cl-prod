module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }], // modern JS for Jest
    '@babel/preset-react', // handle JSX
    '@babel/preset-typescript', // only if you're using TS
  ],
};
