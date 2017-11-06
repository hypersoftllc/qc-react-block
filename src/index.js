import React from 'react'

import styles_unused from './Block.css'

/**
 * @dependency Block.css
 * @dependency ES6
 * @dependency React
 */


export default function Block(props) {
  let attrs, className

  attrs = Object.assign({}, props)
  className = []

  if (props.compClassName) {
    className.push(props.compClassName)
  }
  if (props.className) {
    className.push(props.className)
  }

  attrs.className = className.join(' ')

  delete attrs.children
  delete attrs.compClassName

  return (
    <div {...attrs}>
      {props.children}
    </div>
  )
}
    
Block.defaultProps = {
  compClassName: 'Block',
}
