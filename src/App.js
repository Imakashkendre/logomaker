import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import Banner from './Container/Banner/Banner';
import Logo from './Components/Logo/Logo';
import OurLogo from './Container/OurLogo/OurLogo';
import ProfessionalLogo from './Container/ProfessionalLogo/ProfessionalLogo';

function App() {
  return (
    <>
      <Nav />
      <Banner />
      {/* <Logo /> */}
      <OurLogo />
      <ProfessionalLogo />
    </>
  );
}

export default App;
