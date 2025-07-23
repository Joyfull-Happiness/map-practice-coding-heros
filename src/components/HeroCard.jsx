function HeroCard({product}){
console.log('Product Prop:', product);

return (

<div >
    <h3>{product.name}</h3>
      <p>Level: {product.level.toFixed(2)}</p>{' '}
      {/* .toFixed(2) for nice currency format */}
      <p>language: {product.language}</p>
      <p>language: {product.language}</p>
      {/* Conditional rendering for stock status */}
      {product.hasCape ? (
        <p style={{ color: 'green', fontWeight: 'bold' }}>YES A CAPE</p>
      ) : (
        <p style={{ color: 'red', fontWeight: 'bold' }}>HOW CAN THEY NOT HAVE A CAPE!?</p>
      )}
    
    
    
    
    </div>
)
}



export default HeroCard;