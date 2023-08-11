import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import './navbar.scss';
import LogoR from '../../assets/images/letterR.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX, faBriefcase, faEnvelope, faHome, faUser, faMicrochip } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

 const Navbar = () => {

    const [open, setOpen] = useState(false)
    

    const showNavbar = () => {
        open ? setOpen(false) : setOpen(true)
    } 


    return(
        <div className='nav-bar'>
            <nav className={open ? 'responsiveNav' : "nav"}>
                <div className='logo-container'>
                    <Link className='logo' to='/'>
                        <img  src={LogoR} alt='logo' />
                        <p className='subtitle'>Ramiro</p>
                    </Link>
                </div>
                <div className='nav-links'>
                    <NavLink exact='true' activeclassname="active" to='/' onClick={showNavbar}>
                        <FontAwesomeIcon icon={faHome}  />
                    </NavLink>
                    <NavLink exact='true' activeclassname="active" className='about-link' to='/about' onClick={showNavbar}>
                        <FontAwesomeIcon icon={faUser}   />
                    </NavLink>
                    <NavLink exact='true' activeclassname="active" className='portfolio-link' to='/portfolio' onClick={showNavbar}>
                        <FontAwesomeIcon icon={faBriefcase} />
                    </NavLink>
                    <NavLink exact='true' activeclassname="active" className='skills-link' to='/skills' onClick={showNavbar}>
                        <FontAwesomeIcon icon={faMicrochip} />
                    </NavLink>
                    <NavLink exact='true' activeclassname="active" className='contact-link' to='/contact' onClick={showNavbar}>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </NavLink>
                </div>
                <ul className='list'>
                    <li className='list-element'>
                        <a className='element-a' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/ramiro-gabriel-aragon-paz/'>
                            <FontAwesomeIcon className='element-a' icon={faLinkedin} />
                        </a>
                    </li>
                    <li className='list-element'>
                        <a className="element-a" target='_blank' rel='noreferrer' href='https://github.com/RamiroAragonPaz'>
                            <FontAwesomeIcon className='element-a' icon={faGithub} />
                        </a>
                    </li>
                </ul>
                <div className="nav-buttons">
                    <button className="element-a nav-close" onClick={showNavbar}>
                        <FontAwesomeIcon icon={faX} />
                    </button>
                    <button  className="element-a nav-open " onClick={showNavbar}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>    
                </div>
            </nav>
        </div>
    )
 }

 export default Navbar