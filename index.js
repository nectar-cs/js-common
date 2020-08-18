if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/nectar-gui.production.min.js')
} else {
  module.exports = require('./dist/nectar-gui.development.js')
}
