import logo from '../assets/images/logo.png'
import { useRef } from 'react';

const Navbar = () => {
    const dropdownRef = useRef()
    const togglebtnRef = useRef()

    const scrollTo = id => {
        const section = document.getElementById( id );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    }

    const toggled = () => {
        dropdownRef.current.classList.toggle('open')
        const isOpen = dropdownRef.current.classList.contains('open')

        togglebtnRef.current.className = isOpen? 'fa-solid fa-xmark': 'fa-solid fa-bars'
    }
    
    return (
        <>
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
                <div className='toggle-btn' onClick={() => toggled()}>
                    <i className="fa-solid fa-bars"   ref={togglebtnRef}></i>
                </div>
            </div>
            <div className='dropdown-menu' ref={dropdownRef}>
                <li>Home</li>
                <li>About Me</li>
                <li onClick={() => scrollTo("our-services")}>Our Services</li>
                <li>My Work</li>
                <li className="last">Lets Talk</li>
            </div>
        </>
    )
}

export default Navbar