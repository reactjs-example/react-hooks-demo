import logo from './logo.svg';
import './App.css';
import { Counter } from './state/Counter';
import { PersonSalaray } from './state/Salary';
import { EffectCounter } from './effect/Counter';
import { AppContainer } from './context/AppContainer';
import AppRefContainer from './ref/AppRefContainer';
import AppCallbackHook from './callback/AppCallbackHook';
import AppMemoHook from './memo/AppMemoHook';

function App() {
  return (
    <div className="App">
     <h2>Welcome</h2>
     {/** useState */}
     <Counter/>
     <PersonSalaray/>
     {/** useEffect */}
     <EffectCounter/>
     {/** useContext */}
     <AppContainer/>
     {/** useRef */}
     <AppRefContainer/>
     {/** useCallback */}
     <AppCallbackHook/>
     {/** useMemoHook */}
     <AppMemoHook/>
    </div>
  );
}

export default App;
