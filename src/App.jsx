import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Business from './Business';
import BusinessList from './BusinessList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="app">
      
        
        <BusinessList />
      
    </div>
  )
}

export default App
