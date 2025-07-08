import React, { useEffect } from 'react'; // ← tambahkan useEffect di sini
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Contact from './components/Contact';



import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#111827',
        color: 'white',
        fontFamily: 'sans-serif',
      }}

      

    >
      <Header />
      <main>
        <Home />
        <About />
        <Resume />
        <Skills />
        <Contact />
        {/* Resume, Skills, Contact bisa ditambahkan di sini */}
      </main>
    </div>
  );
}

export default App;
