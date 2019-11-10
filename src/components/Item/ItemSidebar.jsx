import React from 'react'
import { Link } from '@reach/router'

const ItemSidebar = props => {
  return (
    <div className='item-sidebar'>
      <Link to={props.routeName} className='item-sidebar-title'>{props.name}</Link>
    </div>
  )
}

export default ItemSidebar
