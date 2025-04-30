import { useState } from 'react'
import './App.css'
import BusinessList from './BusinessList';
import SearchBar from "./SearchBar";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="searchbar">
      <SearchBar />
    </div>
    <div class="cards">  
        <BusinessList />
    </div>
    </>
  )
}

export default App;
