import React from 'react'

// Import components
import Container from '../components/Container/Container'

const items = [
  {
    key: 1,
    title: 'Productos mas vendidos',
    description: 'Samsung S9'
  },
  {
    key: 2,
    title: 'Total de pedidos',
    description: '120'
  },
  {
    key: 3,
    title: 'Total de ganancias',
    description: 'C$ 1,3000.00'
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
