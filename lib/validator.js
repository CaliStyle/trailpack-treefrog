const joi = require('joi')
const lib = require('.')

module.exports = {
  validateConfig (config) {
    return new Promise((resolve, reject) => {
      joi.validate(config, lib.Schemas.treefrogConfig, (err, value) => {
        if (err) return reject(err)

        return resolve(value)
      })
    })
  }
}
