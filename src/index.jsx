import PT from 'prop-types'
import React from 'react'


function Block(props) {
  const domProps = {
    ...props,
    className: [props.compClassName, props.className].join(' '),
  }
  delete domProps.compClassName
  return (
    <div {...domProps}>
      {props.children}
    </div>
  )
}

Block.defaultProps = {
  className: '',
  compClassName: 'Block',
}

Block.propTypes = {
  children: PT.node,
  className: PT.string,
  compClassName: PT.string,
}

export default Block
