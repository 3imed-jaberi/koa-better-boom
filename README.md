# koa-better-boom
---

[![Build Status][travis-img]][travis-url]
[![Coverage Status][coverage-img]][coverage-url]
[![NPM version][npm-badge]][npm-url]
[![License][license-badge]][license-url]
![Code Size][code-size-badge]

<!-- ***************** -->

[travis-img]: https://travis-ci.org/3imed-jaberi/koa-better-boom.svg?branch=master
[travis-url]: https://travis-ci.org/3imed-jaberi/koa-better-boom
[coverage-img]: https://coveralls.io/repos/github/3imed-jaberi/koa-better-boom/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/3imed-jaberi/koa-better-boom?branch=master
[npm-badge]: https://img.shields.io/npm/v/koa-better-boom.svg?style=flat
[npm-url]: https://www.npmjs.com/package/koa-better-boom
[license-badge]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: https://github.com/3imed-jaberi/koa-better-boom/blob/master/LICENSE
[code-size-badge]: https://img.shields.io/github/languages/code-size/3imed-jaberi/koa-better-boom

[boom-list-method]: https://github.com/hapijs/boom/blob/master/API.md
[express-boom]: https://github.com/scottcorgan/express-boom

<!-- ***************** -->

Boom response objects in Koa.js ⛑ <small> (inspired from [express-boom][])</small>.

## `Installation`

```bash
# npm
$ npm install koa-better-boom
# yarn
$ yarn add koa-better-boom
```


## `Usage`

This is a practical example of how to use.

```javascript
const Koa = require('koa')
const koaBoom = require('koa-better-boom')
const app = new Koa()

app
  .use(koaBoom())
  .use((ctx) => {
    // ==> ctx.badRequest()
    // ==> ctx.response.badRequest()
    ctx.badRequest()
  })

```


## `Note`

**For a complete list of methods, see the [Boom][boom-list-method] docs.**


#### License
---

[MIT](LICENSE) &copy;	[Imed Jaberi](https://github.com/3imed-jaberi)
