# jsonify-css

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url] [![Coverage Status][coveralls-image]][coveralls-url]

[npm-url]:https://npmjs.org/package/jsonify-css
[downloads-image]:http://img.shields.io/npm/dm/jsonify-css.svg
[npm-image]:http://img.shields.io/npm/v/jsonify-css.svg
[travis-url]:https://travis-ci.org/jozanza/jsonify-css
[travis-image]:http://img.shields.io/travis/jozanza/jsonify-css/master.svg
[david-dm-url]:https://david-dm.org/jozanza/jsonify-css
[david-dm-image]:https://img.shields.io/david/jozanza/jsonify-css.svg
[david-dm-dev-url]:https://david-dm.org/jozanza/jsonify-css#info=devDependencies
[david-dm-dev-image]:https://img.shields.io/david/dev/jozanza/jsonify-css.svg
[coveralls-image]:https://coveralls.io/repos/github/jozanza/jsonify-css/badge.svg?branch=master
[coveralls-url]:https://coveralls.io/github/jozanza/jsonify-css?branch=master

## Installation

`$ yarn install jsonify-css`

## Usage

```js
// 1. Require the module
const jsonify = require('jsonify-css')

// 2. Pass it options
const toJSON = jsonify({
  root: './' // helps inline local url(...)'s as data-uri's
});

// 3. Parse some css text
const json = toJSON(`
  @charset 'UTF8'
  .foo { width: 480px; }
  .bar { width: 320px; color: red; }
  @media(max-width: 480px) {
    .foo { max-width: 100%; }
  }
  @keyframes fade-in {
    0%, 50%: { opacity: 0 }
    to: { opacity: 1 }
  }
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: url('./fonts/open-sans.woff');
  }
`);

/* outputs the following:
{
  charset: [{
    '@charset': 'UTF-8'
  }],
  rules: [{
    '.foo': { width: '480px' }
  }, {
    '.bar': { width: '320px', color: 'red' }
  }],
  media: [{
    '@media(max-width: 480px)': {
      '.foo': { 'max-width': '100%' }
    }
  }],
  keyframes: [
    ['fade-in', {
      '0%,50%': { opacity: '0' },
      to: { opacity: '1' }
    }]
  ],
  fontFace: [{
    fontFamily: "'Open Sans'",
    fontStyle: 'normal',
    fontWeight: '400',
    src: "url(data:application/x-font-woff;charset=utf-8;base64,...)"
  }]
} */
```

## License

[MIT License](http://opensource.org/licenses/MIT)
