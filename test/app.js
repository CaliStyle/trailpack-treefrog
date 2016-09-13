
'use strict'

const _ = require('lodash')
const smokesignals = require('smokesignals')

module.exports = _.defaultsDeep({
  pkg: {
    name: 'jsdata-trailpack-test'
  },
  config: {
    main: {
      packs: [
        smokesignals.Trailpack,
        require('trailpack-core'),
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
}, smokesignals.FailsafeConfig)
