import Header from './Header'
import Footer from './Footer'
import NavBar from './NavBar';
import Services from './Services';
import About from './About';
import './App.css'
import Contact from './Contact';


function App() {
  return (
    <div>
     <NavBar />
      <Header />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
