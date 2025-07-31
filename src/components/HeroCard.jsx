/* below is the function HeroCard which is pssing through an array of objects via the prop product 
then it is returning the html and css for each card 

after establishing the styling in the div I am telling the code to go through the  product prop that holds
the data and show the name 
eht noji 
the level 
the language 
and the superpwoer

and then i'm establishing an if/else conditional if the superhero has a cape or not 
the ? indicates that i am about to establish and if/else statement 
and the ():() shows the different answers that the if else statment can use with thier respective text to 
show and the correct coloring. 
 */



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

// exporting the component out so it can be cuaght and used by app.jsx

export default HeroCard;