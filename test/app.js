'use strict'

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
        require('../') // trailpack-treefrog
      ]
    },
    treefrog: {
      taskmanager: 'webkit',
      javascript: 'typescript',
      frontend: 'angular',
      style: 'treefrog',
      srcDir: 'app',
      outDir: 'dist'
    }
  }
}
_.defaultsDeep(App, smokesignals.FailsafeConfig)

module.exports = App
