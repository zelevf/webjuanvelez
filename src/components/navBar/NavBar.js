import './navBar.css'

export const Navbar = () => {
    
    return (
        <div className='header'>
            <div className="empresa">

                    {/* <img src={logo} className="logoBox" alt="Home BOX Buenos Aires"></img> */}
                    <h3>Juan Vélez</h3>
            </div>
            <nav className="navegacion">
                <ul className="lista">
                    <li>INFORMACIÓN</li>
                    <li>FOTOGRAFÍA</li>
                    <li>VIDEO</li>
                    <li>ARTÍCULOS</li>
                    <li>CONTACTO</li>
                </ul>  
            </nav>
      </div>
    )
}
