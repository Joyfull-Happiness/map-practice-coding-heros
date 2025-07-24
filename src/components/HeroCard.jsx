function HeroCard({product}){
console.log('Product Prop:', product);

return (

<div style={{border: '2px solid black', padding:'3rem', borderRadius: '.5rem',backgroundColor: '#1c1f2a', // deep navy
    border: '2px solid #e23636', // heroic red outline
    borderRadius: '12px',
    padding: '20px',
    margin: '20px auto',
    width: '300px',
    textAlign: 'center',
    fontFamily: 'Helvetica Neue, sans-serif',
    color: '#f5f5f5', // off-white text
    boxShadow: '0 4px 12px rgba(0,0,0,0.5)'}}>

    <h1>{product.name}</h1>
    <h1>{product.emoji}</h1>
      <p>Level: {product.level.toFixed(2)}</p>{' '}
      {/* .toFixed(2) for nice currency format */}
      <p>language: {product.language}</p>
      <p>Super Power: {product.superPower}</p>
   
      {/* Conditional rendering for stock status */}
      {product.hasCape ? (
        <p style={{ color: 'green', fontWeight: 'bold' }}>OMG they have A CAPE</p>
      ) : (
        <p style={{ color: 'red', fontWeight: 'bold' }}>HOW CAN THEY NOT HAVE A CAPE!?</p>
      )}
    
    
    
    
    </div>
)
}



export default HeroCard;