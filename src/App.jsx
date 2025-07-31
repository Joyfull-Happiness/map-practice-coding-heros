import './App.css';
import { codingHeroes } from './data.js';
import HeroCard from './components/HeroCard.jsx'; 


/* above are the imports for the data.js array of objects pasing thorugh the variable
containing the array of objects labeled codingHeroes
the econd import is the component HeroCard which will be used below to hold the data which we mapped through
and displayed to the DOM.
 */

/* below is the function app
which is returning the container which holds the DOM rendering (created in HeroCard.jsx) 

1)the codingHeroes.map is looping through the data in data.js andsending it to the dom in the following way :
  2) through the key we are giving react a way to identtfy each componenet
  in the list and update the DOM (the cards showin on the webpage) 
  3) product={item} passes one object from the API array as a prop so
  the mapping function can access it. 
*/
function App() {
  return (
    <div className="app">
      <h1>Coding Heroes</h1>
      <div className="card-container">
      {codingHeroes.map((item, index) => (
        <HeroCard key={index} product={item} />
      ))}
      </div>
    </div>
  );
}

// i am exportitng the app so it cna see in the DOM
export default App;
