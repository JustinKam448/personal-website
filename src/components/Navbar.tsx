import { useState, useEffect } from "react";
import { HashLink } from 'react-router-hash-link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.svg';
import githubLogo from '../assets/Github.png';
import linkedinLogo from '../assets/linkedin.svg';
import instagramLogo from '../assets/instagram.svg';
import { Sun, Moon } from "lucide-react";
import { cn } from "../lib/utils";

type Theme = "light" | "dark";

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as Theme | null;
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, [])

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }

    return (
        <button 
          onClick={toggleTheme} 
          className={cn(
            "p-2 rounded-full transition-colors duration-300 ml-4 focus:outline-none",
            isDarkMode ? "text-yellow-300" : "text-blue-900"
          )}
          aria-label="Toggle light/dark mode"
        >
          {isDarkMode ? <Sun className="h-6 w-6"/> : <Moon className="h-6 w-6"/>}
        </button>
    );
}

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState<string>('home');
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value : string) => setActiveLink(value);

  return (
    <Navbar expand="lg" className={`fixed top-0 w-full z-[9999] transition-all duration-300 ${scrolled ? 'navbar-scrolled py-0' : 'py-[18px]'}`}>
      <Container className="flex items-center justify-between pr-[10px]">

        {/* Left side: Logo */}
        <Navbar.Brand href="#home" className="flex-shrink-0">
          <img src={logo} alt="Logo" className="w-[100%] pl-10 pr-10" />
        </Navbar.Brand>

        {/* Toggle Button (mobile only) */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="lg:hidden">
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>

        {/* Collapse Area: Nav links + Socials + Button + ThemeToggle */}
        <Navbar.Collapse id="basic-navbar-nav" className="flex justify-between items-center w-full">
          <Nav className="flex space-x-6">
            <Nav.Link href="#home" className={`navbar-link ${activeLink === 'home' ? 'active' : ''}`} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={`navbar-link ${activeLink === 'skills' ? 'active' : ''}`} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={`navbar-link ${activeLink === 'projects' ? 'active' : ''}`} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <div className="flex items-center">
            <div className='flex space-x-2'>

              <a href="#" className="social-icon-link">
                <img src={githubLogo} alt="Github" className="social-icon-img" />
              </a>

              <a href="#" className="social-icon-link">
                <img src={linkedinLogo} alt="Linkedin" className="social-icon-img" />
              </a>
              
              <a href="#" className="social-icon-link">
                <img src={instagramLogo} alt="Instagram" className="social-icon-img" />
              </a>

            </div>

            <HashLink to='#connect'>
              <button className="nav-button ml-4" onClick={() => console.log('connect!')}>
                <span>Let’s Connect</span>
              </button>
            </HashLink>

            {/* Insert ThemeToggle here */}
            <ThemeToggle />
          </div>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}
