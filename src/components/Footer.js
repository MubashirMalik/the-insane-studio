import logo from '../assets/images/logo.png'


const Footer = () => {
    return (
        <footer>
            <div className='get-in-touch'>Get In Touch With Us</div>
            <div className='email'>info@insanestudios.com</div>

            <div className='contact-info'>
                <img src={logo} alt="the insane studio" width={150} height={150}/>

                <div>
                    <address>Islamabad, Pakistan 44000</address>
                    <phone>Phone: +(92) 317-5384929</phone>
                </div>
            </div>
            <div className='copyright'>&copy; 2023 theinsanestudios.com</div>
        </footer>
    )
}

export default Footer