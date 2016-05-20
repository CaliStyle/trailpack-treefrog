# treefrog

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

Structured frontends in React or Angular 2 for Trailsjs Apps.

The beauty of Javascript is the ability to build isomorphic apps.
Treefrog is developed around that concept.  

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

