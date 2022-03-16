import './home.css'
import {Navbar} from "../../components/navBar/navBar"
import {HomeBody} from "../../components/homeBody/homeBody"
import {Footer} from "../../components/footer/footer"


 
export const Home = () => {
  
  return (
    <div className="home">
      <Navbar></Navbar>
      <HomeBody></HomeBody>
      <Footer></Footer>
    </div>
  );
}

export default Home;