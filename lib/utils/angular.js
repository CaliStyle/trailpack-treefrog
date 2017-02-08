/* eslint no-console: [0] */
'use strict'

const path = require('path')
const fs = require('fs')
const _ = require('lodash')

const AngularUtils = {}

module.exports = Object.assign(AngularUtils, {
  getRoot: () => {
    const parent = path.dirname(path.join(require.main.filename, '..','..'))
    console.log(parent)
    return parent
  },
  getFullPath: function() {
    return path.join.apply(null, [AngularUtils.getRoot()].concat(Array.from(arguments)))
  },
  buildRoutes: (app) => {
    return new Promise((resolve, reject) => {
      let imports = {}
      let routes = '[\n'
      let route404 = ''

      const trailsRoutes = app.routes
      const treefrog = app.config.treefrog
      const srcDir = treefrog.srcDir

      let js
      switch (treefrog.javascript) {
      case 'typescript':
        js = 'ts'
        break
      default:
        js = 'js'
      }

      trailsRoutes.forEach(route => {
        if (route.config && route.config.app && route.config.app.angular) {
          let path = route.path.replace('/*', '**').replace('/', '')
          let data = {}
          route = route.config.app.angular.route
          if (route.path) { //Possibility to override trails path by angular specific path
            path = route.path
          }
          if (route.data) {
            data = JSON.stringify(route.data)
          }
          else {
            data = JSON.stringify(data)
          }
          imports[route.componentName] = route.component

          if (path == '**') {
            route404 += `  {path: '${path}', component: ${route.componentName}, data: ${data} },\n`
          }
          else {
            routes += `  {path: '${path}', component: ${route.componentName}, data: ${data} },\n`
          }
        }
      })
      routes += route404
      routes += '];'

      let importsContent = _.map(imports, (value, key) => `import { ${key} } from '${value}';\n`).join('')

      // const importsContent = `import { PagesModule } from './pages/pages.module';\n`

      fs.writeFileSync(path.join(AngularUtils.getRoot(), srcDir, 'routes.browser.' + js),
        `'use strict'\n// Built by api/utils/AngularUtils\n\n${importsContent}\nexport const isoRoutes = ${routes}\n`)
      resolve()
    })
  }
})
