import React from 'react'

// Import components
import ItemSidebar from '../components/Item/ItemSidebar'

const items = [
  {
    key: 1,
    name: 'Inicio',
    routeName: '/dashboard'
  },
  {
    key: 11,
    name: 'Negocios',
    routeName: 'business'
  },
  {
    key: 2,
    name: 'Inventario',
    routeName: 'inventory'
  },
  {
    key: 10,
    name: 'Productos',
    routeName: 'product'
  },
  {
    key: 3,
    name: 'Cliente',
    routeName: 'client'
  },
  {
    key: 4,
    name: 'Proveedores',
    routeName: 'proveedor'
  },
  {
    key: 5,
    name: 'Graficos',
    routeName: 'chart'
  },
  {
    key: 6,
    name: 'Pedido',
    routeName: 'pedido'
  }
]

const ListOfItem = props => {
  return (
    <div className=''>
      {items.map(item => (
        <ItemSidebar
          key={item.key}
          name={item.name}
          routeName={item.routeName}
        />
      ))}
    </div>
  )
}

export default ListOfItem
