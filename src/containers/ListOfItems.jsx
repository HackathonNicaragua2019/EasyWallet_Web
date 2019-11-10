import React from 'react'

// Import components
import Container from '../components/Container/Container'

const items = [
  {
    key: 1,
    title: '',
    description: ''
  },
  {
    key: 2,
    title: '',
    description: ''
  },
  {
    key: 3,
    title: '',
    description: ''
  }
]

const ListOfItems = props => {
  return (
    <div className='l-items'>
      {items.map(item => (
        <Container
          key={item.key}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  )
}

export default ListOfItems
