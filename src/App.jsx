import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Business from './Business';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="app">
      
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
      
    </div>
  )
}

export default App
