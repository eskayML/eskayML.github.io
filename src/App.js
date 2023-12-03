import Header from './Header'
import Footer from './Footer'
import NavBar from './NavBar';
import Services from './Services';
import About from './About';
import './App.css'
import Contact from './Contact';
import Projects from './Projects';

function App() {
  return (
    <div>
     <NavBar />
      <Header />
      <Projects />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
