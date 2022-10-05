
import './App.css';
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Card from "./components/card"
import Data from "./data"

function App() {
  const cards = Data.map(item => {
    return (
      <Card 
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
      openSpots={item.openSpots}
     />
    )
  })
  return (
    <div>
    <Navbar />
    
    <Hero />
    <section className="cards-list">
    {cards}
    </section>
    
    </div>
  )
}

export default App;
