// import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Cards from "./components/Cards.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main></main>
      <div className="cards">
        <Cards title="card" description="card 1 desc" />
        <Cards title="card" description="card 2 desc" />
        <Cards title="card" description="card 3 desc" />
        <Cards title="card" description="card 4 desc" />
        
      </div>
      <Footer />
    </>
  );
}

export default App;
