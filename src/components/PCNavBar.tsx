import { useState, useEffect } from "react";
import { HashLink } from 'react-router-hash-link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import githubLogo from '../assets/Github.png';
import linkedinLogo from '../assets/linkedin.svg';
import instagramLogo from '../assets/instagram.svg';
import { Sun, Moon } from "lucide-react";
import { cn } from "../lib/utils";

type Theme = "light" | "dark";
type NavSection = "home" | "about" | "skills" | "projects" | "blog";

const ThemeToggle : React.FC = () => {
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

      const storedTheme = localStorage.getItem("theme") as Theme | null;

      if (storedTheme === "dark") {
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

export const PCNavBar : React.FC = () => {
  const [activeLink, setActiveLink] = useState<NavSection>('home');
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value : NavSection) => setActiveLink(value);

  return (
    <Navbar expand="lg" className={`fixed top-0 w-full z-[9999] transition-all duration-300 ${scrolled ? 'navbar-scrolled py-0' : 'py-[18px]'}`}>
      <Container className="flex items-center justify-between pr-[30px] pl-[80px]">

        {/* Left side: Logo */}
        <Navbar.Brand href="#home" className="text-xl font-bold text-primary items-center flex">
          <a href="#home">
            <span className="text-glow text-foreground">Justin </span>
          </a>
            Portfolio
        </Navbar.Brand>

        {/* Toggle Button (mobile only)
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="lg:hidden">
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle> */}

        {/* Collapse Area: Nav links + Socials + Button + ThemeToggle */}
        <Navbar.Collapse id="basic-navbar-nav" className="flex justify-between items-center w-full">

          <div className="w-15" />

          {/* Center Nav Links, blog will be a separate page */}
          <Nav className="flex space-x-6 justify-center">
            <Nav.Link href="#home" className={`navbar-link ${activeLink === 'home' ? 'active' : ''}`} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about" className={`navbar-link ${activeLink === 'about' ? 'active' : ''}`} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
            <Nav.Link href="#skills" className={`navbar-link ${activeLink === 'skills' ? 'active' : ''}`} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={`navbar-link ${activeLink === 'projects' ? 'active' : ''}`} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#blog" className={`navbar-link ${activeLink === 'blog' ? 'active' : ''}`} onClick={() => onUpdateActiveLink('blog')}>Blog</Nav.Link>
          </Nav>

          {/* Right-side: Socials + Button + Toggle */}
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">

            <div className='social-icon'>

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

            { /* Connect page will be a separate page */ }
            <HashLink to='#contact'>
              <button className="nav-button" onClick={() => console.log('connect!')}>
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
