import './App.css'
import Board from './Components/Board';
import Keyboard from './Components/Keyboard';
import { createContext ,useState} from 'react';
import { boardDefault } from './Components/numbers';

export const AppContext = createContext()

function App() {
  const [board,setBoard] = useState(boardDefault)
  return (
    <div className='App'>
      <nav>
      <h1> Catch Match</h1>
      </nav>
      <AppContext.Provider value={ {board, setBoard }}>
      <Board />
      <Keyboard />
      </AppContext.Provider>
    </div>
  );
}

export default App;
