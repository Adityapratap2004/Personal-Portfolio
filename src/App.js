import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/ContactMe/ContactMe";
import Education from "./Components/Education/Education";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Hero />
        <Skills/>
        <Projects/>
        <Education/>
        <ContactMe/>        
      </BrowserRouter>



    </div>
  );
}

export default App;
