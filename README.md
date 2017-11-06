# qc-react-block

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


export default function SomeComponent(props) {
  return (
    <Block>
      <h2>Some Component</h2>
      <p>Some component demo'ing the Block component.</p>
    </Block>
  )
}
```
