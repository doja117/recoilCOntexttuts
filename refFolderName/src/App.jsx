import React, { createContext, useContext, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const CountContext = createContext();

  function Increase() {
    const { setCount } = useContext(CountContext);
    setCount(prevCount => prevCount + 1);
  }

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <div>
        <Buttons />
        <br />
        Count: {count}
        <div>
          <img src='https://upload.wikimedia.org/wikipedia/en/f/fa/Makoto_Niijima.png' alt="Makoto Niijima" />
        </div>
      </div>
    </CountContext.Provider>
  );
  function Buttons(){
    return(<div>
      <Increase />
      <Decrease />
      </div>
    )
  }
  
  function Increase(){
    const {count,setCount}=useContext(CountContext);
    return <div>
      <button onClick={()=>{
        setCount(count+1);
      }}>Increase</button>
    </div>
  }
  function Decrease(){
    const {count,setCount}=useContext(CountContext);
    return <div>
      <button onClick={()=>{
        setCount(count-1);
      }}>Decrease</button>
    </div>
  }
}



export default App;