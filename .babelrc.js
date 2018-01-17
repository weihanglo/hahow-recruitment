module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        browsers: [
          'ie 11',
          'safari >= 9'
        ]
      }
    }],
    '@babel/preset-stage-2',
    "@babel/preset-react"
  ]
}
