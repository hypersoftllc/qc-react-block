# qc-react-block

[![Build Status][travis-svg]][travis-url]
[![Coverage Status][coverage-image]][coverage-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

A React component that renders a div with the implied semantics of
representing a block element.


## Installation

```sh
npm install --save qc-react-block
```

or

```sh
yarn add qc-react-block
```


## Example Usage

```jsx
import React from 'react'

import Block from 'qc-react-block'

import 'qc-react-block/lib/Block.css'


export default function SomeComponent(props) {
  return (
    <Block className="Some">
      <h2>Some Component</h2>
      <p>Some component demo'ing the Block component.</p>
    </Block>
  )
}
```


[coverage-image]: https://coveralls.io/repos/github/hypersoftllc/qc-react-block/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/hypersoftllc/qc-react-block?branch=master
[downloads-image]: http://img.shields.io/npm/dm/qc-react-block.svg
[downloads-url]: http://npm-stat.com/charts.html?package=qc-react-block
[license-image]: http://img.shields.io/npm/l/qc-react-block.svg
[license-url]: LICENSE
[package-url]: https://npmjs.org/package/qc-react-block
[npm-badge-png]: https://nodei.co/npm/qc-react-block.png?downloads=true&stars=true
[travis-svg]: https://travis-ci.org/hypersoftllc/qc-react-block.svg?branch=master
[travis-url]: https://travis-ci.org/hypersoftllc/qc-react-block
