import './App.css';
import { codingHeroes } from './data.js';
import HeroCard from './components/HeroCard.jsx'; 

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

export default App;
