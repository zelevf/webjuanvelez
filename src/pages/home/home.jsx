import './home.css';
import {Navbar} from '../../components/navBar/NavBar.js'
import { HomeBody } from '../../components/homeBody/homeBody';

 
export const Home = () => {
  
  return (
    <div className="home">
      <Navbar/>
      <HomeBody/>
    </div>
  );
}

export default Home;