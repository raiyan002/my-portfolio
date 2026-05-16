import { Button } from "@/component/Button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks  = [
  {href: '#about', label: 'About'},
  {href: '#projects', label: 'Projects'},
  {href: '#experience', label: 'Experience'},
  {href: '#testimonials', label: 'Testimonials'},
];

export const Navbar = () => {
  const [ismobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {

    const handelScroll = () => {
      if(window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
    
  }, [])
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"}`}>
      <nav  className="constainer mx-auto px-6 flex justify-between">
        <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
          RH<span className="text-primary">.</span>
        </a>
        {/* Desktop Nav */}
        <div  className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-[#1a2329]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {/* CTA Button */}

        <div className="hidden md:block">
          <Button size="sm">Contact Me</Button>
        </div>

        {/* mobile menu button */}
        <button 
          className="md:hidden p-2 text-foreground cursor-pointer" 
          onClick={() => setIsMobileMenuOpen(!ismobileMenuOpen)}
        >
          {ismobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>

      </nav>
      {/* mobile menu content */}
        {ismobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a 
              key={index} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg text-muted-foreground hover:text-foreground py-2"
            >
                {link.label}
              </a>
            ))}
            <Button onClick={() => setIsMobileMenuOpen(false)} className="hover:cursor-pointer">Contact Me</Button>
          </div>
        </div>
      )}
    </header>
  )
}