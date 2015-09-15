# json-cycle

[![Join the chat at https://gitter.im/valery-barysok/json-cycle][gitter-join-chat-image]][gitter-channel-url]
[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Node.js Version][node-image]][node-url]

[![Build Status][travis-image]][travis-url]
[![Dependency Status][dependencies-image]][dependencies-url]
[![devDependency Status][dev-dependencies-image]][dev-dependencies-url]
[![Coverage Status][coveralls-image]][coveralls-url]

[![NPM][npm-image]][npm-url]

Utilities provide ability to encode/decode circular structures for converting to and from JSON.

Based on [JSON-js](https://github.com/douglascrockford/JSON-js)

## Install

In your project:

```
npm install json-cycle --save
```

## Details

This package contains two functions, decycle and retrocycle,
which make it possible to encode cyclical structures and convert them to JSON, and
then recover them. This is a capability that is not provided by ES5. JSONPath 
is used to represent the links. [http://GOESSNER.net/articles/JsonPath/]

## License
MIT &copy; 2015 Valery Barysok, Douglas Crockford

[npm-version-image]: https://img.shields.io/npm/v/json-cycle.svg?style=flat-square
[npm-downloads-image]: https://img.shields.io/npm/dm/json-cycle.svg?style=flat-square
[npm-image]: https://nodei.co/npm/json-cycle.png?downloads=true&downloadRank=true&stars=true
[npm-url]: https://npmjs.org/package/json-cycle
[travis-image]: https://img.shields.io/travis/valery-barysok/json-cycle/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/valery-barysok/json-cycle
[dependencies-image]: https://david-dm.org/valery-barysok/json-cycle.svg?style=flat-square
[dependencies-url]: https://david-dm.org/valery-barysok/json-cycle
[dev-dependencies-image]: https://david-dm.org/valery-barysok/json-cycle/dev-status.svg?style=flat-square
[dev-dependencies-url]: https://david-dm.org/valery-barysok/json-cycle#info=devDependencies
[coveralls-image]: https://img.shields.io/coveralls/valery-barysok/json-cycle/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/valery-barysok/json-cycle?branch=master
[node-image]: https://img.shields.io/node/v/json-cycle.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[gitter-join-chat-image]: https://badges.gitter.im/Join%20Chat.svg?style=flat-square
[gitter-channel-url]: https://gitter.im/valery-barysok/json-cycle
