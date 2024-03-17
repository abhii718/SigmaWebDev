import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [cards, setCards] = useState([])

  const fetchData = async () => {
    try {
      let a = await fetch("https://jsonplaceholder.typicode.com/posts")
      if (!a.ok) {
        throw new Error("Failed to fetch data")
      }
      const data = await a.json();
      setCards(data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  // console.log(data[2].title)


  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="container">
      {cards.map(card => (
        <div className='card' key={card.id}>
          <h1>{card.title}</h1>
          <p>{card.body}</p>
          <span>By User ID: {card.userId}</span>
        </div>
      ))}
    </div>
  );
}

export default App;