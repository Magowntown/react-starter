import { useState } from 'react'
import MyButton from "./MyButton.jsx";
import Logos from "./Logos.jsx";
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Logos />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
        <MyButton />
    </div>
  )
}

export default App
