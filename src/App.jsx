import './App.css'
import NavBar from './app/NavBar'
import Hero from "./app/Hero.jsx"
import Card from './app/Card.jsx'

import './style.css'

function App() {

  return (
    <div className="contianer">
      <NavBar />
      <Hero />
      <Card
        img="katie-zaferes.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  )
}

export default App
