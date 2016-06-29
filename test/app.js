const _ = require('lodash')
const smokesignals = require('smokesignals')

const App = {
  pkg: {
    name: 'treefrog-trailpack-test',
    version: '1.0.0'
  },
  config: {
    main: {
      packs: [
        smokesignals.Trailpack,
        require('trailpack-core'),
        require('trailpack-router'),
        require('../') // trailpack-express
      ]
    }
  }
}

_.defaultsDeep(App, smokesignals.FailsafeConfig)
module.exports = App
