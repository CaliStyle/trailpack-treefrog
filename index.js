'use strict'

const Trailpack = require('trailpack')
const lib = require('./lib')

module.exports = class TreefrogTrailpack extends Trailpack {

  /**
   * TODO document method
   */
  validate () {

  }

  /**
   * Should configure angular/react routes from trails routes
   */
  configure () {
    this.routes = lib.Utils.buildRoutes(this.app)
  }

  /**
   * TODO document method
   */
  initialize () {

  }

  constructor (app) {
    super(app, {
      config: require('./config'),
      api: require('./api'),
      pkg: require('./package')
    })
  }
}

