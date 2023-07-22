import logo from '../assets/images/logo.png'

const Navbar = () => {

    const scrollTo = id => {
        const section = document.getElementById( id );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    }
    
    return (
        <div className="navbar">
            <div className="navbar-brand">
                <img src={logo} alt="the insane studio" width={50} height={50}/>
                <div className='title'>INSANE STUDIOS</div>
            </div>

            <ul className="navbar-items">
                <li>Home</li>
                <li>About Me</li>
                <li onClick={() => scrollTo("our-services")}>Our Services</li>
                <li>My Work</li>
                <li className="last">Lets Talk</li>
            </ul>
        </div>
    )
}

export default Navbar