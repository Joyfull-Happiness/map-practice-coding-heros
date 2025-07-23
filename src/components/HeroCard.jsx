function HeroCard({product}){
console.log('Product Prop:', product);

return (

<div >
    <h3>{product.name}</h3>
      <p>Price: ${product.price.toFixed(2)}</p>{' '}
      {/* .toFixed(2) for nice currency format */}
      <p>Category: {product.category}</p>
      {/* Conditional rendering for stock status */}
      {product.inStock ? (
        <p style={{ color: 'green', fontWeight: 'bold' }}>In Stock</p>
      ) : (
        <p style={{ color: 'red', fontWeight: 'bold' }}>Out of Stock</p>
      )}
    
    
    
    
    </div>
)
}



export default HeroCard;