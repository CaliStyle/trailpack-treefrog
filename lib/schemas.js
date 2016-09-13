'use strict'
const joi = require('joi')

module.exports = {
  treefrogConfig: joi.object().keys({
    taskmanager: joi.string(),
    javascript: joi.string(),
    frontend: joi.string(),
    style: joi.string(),
    srcDir: joi.string(),
    outDir: joi.string()
  })
}
