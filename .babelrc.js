module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        browsers: [
          'ie 11',
          'safari >= 9'
        ]
      },
      module: false
    }],
    '@babel/preset-stage-2',
    "@babel/preset-react"
  ]
}
