import './navBar.css'
import logo from './images/logo1.png';


export const Navbar = () => {
    
    return (
        <div className='header'>
            <div className="empresa">

                <img src={logo} className="logoJuanVelez" alt="Home BOX Buenos Aires"></img>
            </div>
            <nav className="navegacion">
                <ul className="lista">
                    <li>INFORMACIÓN</li>
                    <li>FOTOGRAFÍA</li>
                    <li>VIDEO</li>
                    <li>PRENSA</li>
                </ul>  
            </nav>
      </div>
    )
}
