import React from 'react'

const productDetail = (props) => {
  return (
    <div>
        Hello from page {props.params.id}
    </div>
  )
}

export default productDetail