# @qc/react-block

[![Build Status][travis-svg]][travis-url]
[![Coverage Status][coverage-image]][coverage-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

A React component that renders a `div` with the semantics of representing a
block structure or region.  However, unlike a `div`, a `Block`'s default CSS
prevents margin bleed-through which usually happens with heading elements,
paragraph elements, and others.  Also, `border-box` box-sizing is used.

One of the most common use cases is to use `Block` as the root of a custom
React component or as representing different regions within a component.  See
the examples below.


## Installation

```sh
npm install --save @qc/react-block
```

or

```sh
yarn add @qc/react-block
```


## Example Usage

**As the Root**

```jsx
import React from 'react'

import Block from '@qc/react-block'

import '@qc/react-block/dist/styles/Block.css'


export default function MyBlockComponent(props) {
  return (
    <Block className="My">
      <h1>My Block Component</h1>
      {/*
      Note: The margins of the `h1` and `p` won't bleed-through
      like they would with default styled `div`s.
      */}
      <p>My component demo'ing the Block component.</p>
    </Block>
  )
}
```

**Component Regions**

```jsx
import React from 'react'

import Block from '@qc/react-block'

import '@qc/react-block/dist/styles/Block.css'


export default function Panel(props) {
  return (
    <Block className="Panel">
      <Block className="Panel-Head">
        <Title>Panel's Title</Title>
      </Block>
      <Block className="Panel-Body">
        <h1>...</h1>
        <p>...</p>
        <h2>...</h2>
        <p>...</p>
      </Block>
      <Block className="Panel-Foot">
        <button>...</button>
      </Block>
    </Block>
  )
}
```

**Custom Element**

```jsx
import React from 'react'

import Block from '@qc/react-block'

import '@qc/react-block/dist/styles/Block.css'


export default function SiteFooter(props) {
  return (
    <Block comp="footer">
      ...
    </Block>
  )
}
```

**With `Block` CSS**

```jsx
import React from 'react'

import '@qc/react-block/dist/styles/Block.css'


export default function SiteFooter(props) {
  return (
    <footer className="Block">
      ...
    </footer>
  )
}
```


## Use ES Modules

This package also comes with the source and an ES variation.  Instead of

```jsx
import Block from '@qc/react-block'
```

use

```jsx
import Block from '@qc/react-block/es/Block'
```

or

```jsx
import Block from '@qc/react-block/src/Block'
```

to import the component.

If you do this, then you will need to be sure to transpile the code to a syntax
compatible with the browsers you plan to support.

The source is using object spread syntax.  In order to transpile it with
[babel], you must include the [object spread transform
plugin][babel-obj-sprd-txm].


## Maintainers

- [Danny Hurlburt](https://github.com/dhurlburtusa)


## License

ISC


[babel]: https://babeljs.io/
[babel-obj-sprd-txm]: https://babeljs.io/docs/plugins/transform-object-rest-spread/
[coverage-image]: https://coveralls.io/repos/github/hypersoftllc/qc-react-block/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/hypersoftllc/qc-react-block?branch=master
[downloads-image]: http://img.shields.io/npm/dm/@qc/react-block.svg
[downloads-url]: http://npm-stat.com/charts.html?package=@qc/react-block
[license-image]: http://img.shields.io/npm/l/@qc/react-block.svg
[license-url]: LICENSE
[package-url]: https://npmjs.org/package/@qc/react-block
[npm-badge-png]: https://nodei.co/npm/@qc/react-block.png?downloads=true&stars=true
[travis-svg]: https://travis-ci.org/hypersoftllc/qc-react-block.svg?branch=master
[travis-url]: https://travis-ci.org/hypersoftllc/qc-react-block
