import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Sidebar from './components/sidebar'

function App() {
  const [activeCategory, setActiveCategory] = useState<null | string>(null)

  return (
    <div className="App">
      <Header />
      <Sidebar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <Sidebar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
    </div>
  )
}

export default App
