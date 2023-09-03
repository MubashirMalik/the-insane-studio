import logo from '../assets/images/logo.png'
import { useRef, useState } from 'react';

const Navbar = () => {
    const [toggleState, setToggleState] = useState(false)
    const dropdownRef = useRef()

    const scrollTo = id => {
        const section = document.getElementById( id );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    }

    const toggled = () => {
        setToggleState(prevToggleState => !prevToggleState)
        dropdownRef.current.classList.toggle('open')
    }

    return (
        <>
            <div className="navbar">
                <div className="navbar-brand">
                    <img src={logo} alt="the insane studio" width={40} height={40}/>
                    <div className='title'>INSANE STUDIOS</div>
                </div>

                <ul className="navbar-items">
                    <li>Home</li>
                    <li onClick={() => scrollTo("about-me")}>About Me</li>
                    <li onClick={() => scrollTo("our-services")}>Our Portfolio</li>
                    <li className="last">Lets Talk</li>
                </ul>
                <div className='toggle-btn' onClick={() => toggled()}>
                    <i className={`fa-solid fa-${toggleState ? 'xmark' : 'bars'}`}></i>
                </div>
            </div>
            <div className='dropdown-menu' ref={dropdownRef}>
                <li>Home</li>
                <li onClick={() => scrollTo("about-me")}>About Me</li>
                <li onClick={() => scrollTo("our-services")}>Our Portfolio</li>
                <li className="last">Lets Talk</li>
            </div>
        </>
    )
}

export default Navbar
