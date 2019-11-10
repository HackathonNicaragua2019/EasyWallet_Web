import React from 'react'

// Import components
import Item from '../Item/Item'
import ListOfItem from '../../containers/ListOfItem'

const Sidebar = props => {
  return (
    <div className='sidebar'>
      <Item />
      <ListOfItem />
    </div>
  )
}

export default Sidebar
