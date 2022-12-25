import React from 'react';
import { useSelector } from 'react-redux';


const ProductsComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, description, price, category } = product;
    return (
      <div key={id}>
        <div className="card" style={{ width: '18rem' }}>
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h5 className="card-title">$ {price}</h5>
            <h5 className="card-title">{category}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    )
  })
  // const {id, title} = products[0];  
  // console.log(products);

  return (
    
      <div className='row'>
        {renderList}
      </div>
 


  )
}

export default ProductsComponent
