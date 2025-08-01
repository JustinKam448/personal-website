import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";


type NavItem = {
  name: string;
  href: string;
};

const navItems : readonly NavItem[] = [
    {name: "Home", href: "#home"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href:"#projects"},
    {name: "Blog", href: "#blog"},
    {name: "Contact", href: "#contact"}, // blog and contact will be a separate page
];

export const MobileNavBar : React.FC = () => {

    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }

        window.addEventListener("scroll", handleScroll);

        return () => { window.removeEventListener("scroll", handleScroll); };
    }, [])

    return (
        <nav 
            className={cn(
                "fixed w-full z-40 transition-all duration-300", 
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
            )}
        >
            <div className="container flex items-center justify-between">

                { /* logo */ }
                <a className="text-xl font-bold text-primary flex items-center">
                    <span className="relative z-10"> 
                        <span className="text-glow text-foreground">Justin</span> Portfolio
                    </span>
                </a>

                { /* menu button */ }
                <button 
                    onClick={() => setIsMenuOpen((prev) => !prev)} 
                    className="p-2 text-foreground z-50" 
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                > 
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />} 
                </button>

                { /* Menu Options */ }
                <div 
                    className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300",
                        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-xl">
                        { navItems.map((item, key) => (
                            <a 
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};