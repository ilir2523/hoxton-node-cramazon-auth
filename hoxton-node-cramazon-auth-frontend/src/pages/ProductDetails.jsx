import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


function ProductDetails({ postOnServerBasket }) {
  const params = useParams()

  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:4001/items/${params.id}`)
      .then(resp => resp.json())
      .then(productFromServer => setProduct(productFromServer))
  }, [])

  if (product === null) return <main>Loading...</main>

  if (product.title === undefined) return <main>Picture not found</main>

  return (
    <section className="product-detail main-wrapper">
        <img
          src={product.image}
          alt={product.title}
        />

      <div className="product-detail__side">
        <h2>{product.title}</h2>
        {/* <p>
          {product.description}
        </p> */}
        <h1 className="product-price">£{product.price}</h1>
        {/* <!-- Once you click in this button, the user should be redirected to the Basket page --> */}
        <Link to='/basket'>
          <button onClick={() => postOnServerBasket(product)}>Add to basket</button>
        </Link>
      </div>
    </section>
  )
}

export default ProductDetails
