# @qc/react-block

[![Build Status][travis-svg]][travis-url]
[![Coverage Status][coverage-image]][coverage-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

A React component that renders a `div` with the semantics of representing a
block structure or region.

A `div` is a [block-level element][ble] but by default it does not create a
[block formatting context][bfc] (BFC).  Certain CSS properties can be applied to
elements to give it a BFC.  Some of the methods are listed below.

1) Block elements where `overflow` has a value other than `visible`.
2) Elements with `contain` set to `layout`, `content`, or `strict`.
3) Elements with `display`'s inside value set to `flow-root`.

A BFC provides the following benefits, among others:

* Prevents top and bottom margin bleedthrough.
* Lets the background fill the entire area behind an element's content.

See this [Block Formatting Context for Block-Level Elements][bfc-codepen]
Codepen to see BFC in action.

Note: Included with the BFC CSS is `box-sizing: border-box` since this is the
box-sizing most sensible for a block.

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
    <Block className="My" style={{ backgroundColor: '#bedfed' }}>
      <h1>My Block Component</h1>
      {/*
      Note: The margins of the `h1` and `p` won't bleed-through
      like they would with default styled `div`s.  Also, the
      background color will fill the area behind the margins.
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

**Custom Component Type**

`div`s are not the only element supported.  Any one of the following elements
may be used by setting the `compType` property.

* `address`
* `article`
* `aside`
* `blockquote`
* `details`
* `div`
* `dl`
* `fieldset`
* `figcaption`
* `figure`
* `footer`
* `form`
* `header`
* `main`
* `nav`
* `section`

```jsx
import React from 'react'

import Block from '@qc/react-block'

import '@qc/react-block/dist/styles/Block.css'


export default function SiteFooter(props) {
  return (
    <Block compType="footer">
      ...
    </Block>
  )
}
```

**Just Using `Block` CSS**

The key to the `Block` component is in the CSS — not the JavaScript.  All that
needs to be done is to include the `Block` CSS class in any† component.

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

† Excluding [replaced elements].


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


## Why Multiple BFC Methods?

Why are multiple BFC methods employed in the included CSS?

This is to help ensure the block is still given a BFC if in the event that the
CSS is overridden in a way that would have removed the BFC.  For instance, in
browsers that support `contain: layout` or `display: flow-root`, the following
will still have a BFC.

```jsx
<Block style={{overflow: 'visible'}}>
  ...
</Block>
```


## Maintainers

- [Danny Hurlburt](https://github.com/dhurlburtusa)


## License

ISC


[babel]: https://babeljs.io/
[babel-obj-sprd-txm]: https://babeljs.io/docs/plugins/transform-object-rest-spread/
[bfc]: https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context
[bfc-codepen]: https://codepen.io/dhurlburtusa/pen/GxdBJX?editors=1100
[ble]: https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements
[coverage-image]: https://coveralls.io/repos/github/hypersoftllc/qc-react-block/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/hypersoftllc/qc-react-block?branch=master
[downloads-image]: http://img.shields.io/npm/dm/@qc/react-block.svg
[downloads-url]: http://npm-stat.com/charts.html?package=@qc/react-block
[license-image]: http://img.shields.io/npm/l/@qc/react-block.svg
[license-url]: LICENSE
[package-url]: https://npmjs.org/package/@qc/react-block
[npm-badge-png]: https://nodei.co/npm/@qc/react-block.png?downloads=true&stars=true
[replaced elements]: https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element
[travis-svg]: https://travis-ci.org/hypersoftllc/qc-react-block.svg?branch=master
[travis-url]: https://travis-ci.org/hypersoftllc/qc-react-block
