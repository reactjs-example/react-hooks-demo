import logo from './logo.svg';
import './App.css';
import { Counter } from './state/Counter';
import { Person } from './state/Person';
import { EffectCounter } from './effect/Counter';
import { AppContainer } from './context/AppContainer';
import AppRefContainer from './ref/AppRefContainer';
import AppCallbackHook from './callback/AppCallbackHook';
import AppMemoHook from './memo/AppMemoHook';
import AppUseStateHook from './state/AppUseStateHook';

function App() {
  return (
    <div className="App">
     <h2>Welcome</h2>
     {/** useState */}
     <AppUseStateHook/>
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
