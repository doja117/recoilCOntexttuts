import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, atom, useRecoilValue ,useSetRecoilState} from 'recoil'
function App() {


  return (
    <>
    <RecoilRoot>
    <Buttons />
    <CountDiv />

    <img src='https://upload.wikimedia.org/wikipedia/en/f/fa/Makoto_Niijima.png' alt="Makoto Niijima" />
    
    </RecoilRoot>
    </>
  )
  function CountDiv(){
    const count=useRecoilValue(countState);
    return <div>
      Count is {count}
    </div>
  }

  function Buttons(){
    return <div>
      <Increase />
      <Decrease />

    </div>
  }

  function Increase(){
    const setCount=useSetRecoilState(countState);

    return <button onClick={()=>{
      setCount(x=>x+1);
    }}>Increase</button>
  }
  function Decrease(){
    const setCount=useSetRecoilState(countState);
    return <button onClick={()=>{setCount(x=>x-1)}}>Decrease</button>
  }
}

export default App


const countState=atom({
  key:"countState",
  default:0
})