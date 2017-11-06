import React from 'react'

// eslint-disable-next-line
import styles_unused from './Block.css'


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
