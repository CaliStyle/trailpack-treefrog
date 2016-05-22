# treefrog

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

Structured frontends in React or Angular 2 for Trailsjs Apps.

The beauty of Javascript is the ability to build isomorphic apps.
Treefrog is focused on that concept.  

##Isomorphic Apps
For a great explanation of what an Isomorphic app is, 
check out <https://www.lullabot.com/articles/what-is-an-isomorphic-application>.
Why Isopmorphic apps? If your app has a frontend, then you can save time by reusing code.
On top of that, Search Engine Optimzation and Mobile Optimzation aren't going away and 
Isomorphic apps benefit from the speed boost of having an app fully rendered on demand.

## Status

> ##### Stability: [1](http://nodejs.org/api/documentation.html#documentation_stability_index) - Experimental

## Install

```sh
// Install the Trailpack
$ npm install --save trailpack-treefrog

//Install the Generator
$ npm install generator-treefrog -g

//Setup the frontend
$ yo treefrog
```

## Configure
Running `yo treefrog` will prompt you to configure your app.
It will add the `trailpack-treefrog` to your `config/main.js`,
`exports.treefrog = require('./treefrog')` to your `config/index.js`,
and create `config/treefrog.js`.

```js
// config/main.js
module.exports = {
  packs: [
    // ... other trailpacks
    require('trailpack-treefrog')
  ]
}
```

[npm-image]: https://img.shields.io/npm/v/treefrog.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trailpack-treefrog
[ci-image]: https://img.shields.io/travis/CaliStyle/trailpack-treefrog/master.svg?style=flat-square
[ci-url]: https://travis-ci.org/CaliStyle/trailpack-treefrog
[daviddm-image]: http://img.shields.io/david/CaliStyle/trailpack-treefrog.svg?style=flat-square
[daviddm-url]: https://david-dm.org/CaliStyle/trailpack-treefrog
[codeclimate-image]: https://img.shields.io/codeclimate/github/CaliStyle/trailpack-treefrog.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/CaliStyle/trailpack-treefrog

