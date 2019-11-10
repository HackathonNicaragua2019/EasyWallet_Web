import React from 'react'

// Import components
import Container from '../components/Container/Container'

const items = [
  {
    key: 1,
    title: 'Productos mas vendidos',
    description: ''
  },
  {
    key: 2,
    title: 'Total de pedidos',
    description: ''
  },
  {
    key: 3,
    title: 'Total de ganancias',
    description: ''
  }
]

const ListOfItems = props => {
  return (
    <>
      {items.map(item => (
        <Container
          key={item.key}
          title={item.title}
          description={item.description}
        />
      ))}
    </>
  )
}

export default ListOfItems
