import '@/styles/globals.css'
import NavBar from './components/NavBar'
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Projects  from './components/Projects';
import MuiTimeline from './components/MuiTimeline';

function App()
{
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
      <MuiTimeline/>
      <Experience/>
      <Contact/>
      <SocialLinks/>
    </div>
  );
}
export default App;
