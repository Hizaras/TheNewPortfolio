import Client from './Components/Clients/client';
import Contact from './Components/Contact/contact';
import Intro from './Components/Intro/intro';
import Navbar from './Components/Navbar/navbar';
import Skills from './Components/Skills/skills';
import Works from './Components/Works/works';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Intro/>
       <Skills/>
       <Works/>
       <Client/>
       <Contact/>
       </div>
  );
}

export default App;
