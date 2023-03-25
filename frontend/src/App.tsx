import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Sidebar from './components/sidebar'
import JobAccordion from "./components/accordion";

function App() {
  const [activeCategory, setActiveCategory] = useState<null | string>(null)

  return (
    <div className="App">
      <Header />
      <div className="content">
        <Sidebar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <div className="listings">
          <JobAccordion activeCategory={activeCategory} />
        </div>
      </div>
    </div>
  )
}

export default App
