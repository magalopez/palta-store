import Card from '@components/Card/Card'
import React, {useEffect, useState} from 'react'

function App() {
  const [products, setProducts] = useState<TProduct[]>([])

  useEffect(() => {
    window
    .fetch('/api/avo')
    .then((resp) => resp.json())
    .then(({data, length}) => setProducts(data))
  }, [])

  return (
    <>
      <div className='wrapper-cards'>
        { products.map((product) => 
          <Card 
          key={product.id}
          pathFile={product.image}
          title={product.name}
          price={product.price}/> 
          )}
      </div>
    </>
  )
}

export default App