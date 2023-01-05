import './App.css';
import { createContext } from 'react';
import User from './User';
const ThemeContext = createContext(null);

function App() {
  return (
    <ThemeContext.Provider value="dark">
    <div className="App">
        <User />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
export { ThemeContext };
