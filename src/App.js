import logo from './logo.svg';
import './App.css';
import { Counter } from './state/Counter';
import { PersonSalaray } from './state/Salary';
import { EffectCounter } from './effect/Counter';

function App() {
  return (
    <div className="App">
     <h2>Welcome</h2>
     {/**  */}
     <Counter/>
     <PersonSalaray/>
     {/** useEffect */}
     <EffectCounter/>
    </div>
  );
}

export default App;
