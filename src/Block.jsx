import PT from 'prop-types'
import React from 'react'


function Block(props) {
  const domProps = {
    ...props,
    className: `${props.compClassName} ${props.className}`,
  }
  delete domProps.children
  delete domProps.compClassName
  delete domProps.compType
  return React.createElement(
    props.compType,
    domProps,
    props.children,
  )
}

Block.defaultProps = {
  className: '',
  compClassName: 'Block',
  compType: 'div',
}

Block.propTypes = {
  children: PT.node,
  className: PT.string,
  compClassName: PT.string,
  compType: PT.oneOf([
    'address',
    'article',
    'aside',
    'blockquote',
    'details',
    'div',
    'dl',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'header',
    'main',
    'nav',
    'section',
  ]),
}

export default Block
