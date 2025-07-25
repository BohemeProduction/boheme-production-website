import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

// Import TikTok and Facebook icons as SVG components
const TikTokIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#fondateurs', label: 'À Propos' },
    { href: '#prestations', label: 'Prestations' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#galeries', label: 'Galeries' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="cursor-pointer">
              <div className="relative w-[180px] flex items-center">
                <img 
                  src="https://lh3.googleusercontent.com/pw/AP1GczNzU7PB1wD4ZwB3-nmN1Fuylb6zr6Nz7Yb2dAUEeUIIq03DUL8FzRcovj3ru3zStRgI0RusPDzCvOSo87XRzeVs0RfyKnr95McNARLsKTXU6DtlFUfksX7R0SmjlYcWmOJ2OZkpZpJ3juCAD_Ez_vP5=w2258-h1596-s-no-gm?authuser=0"
                  alt="Bohème Production"
                  className={`absolute inset-0 w-[180px] object-contain transition-opacity duration-500 ease-in-out ${
                    isScrolled ? 'opacity-0' : 'opacity-100'
                  }`}
                  style={{ marginTop: '0' }}
                />
                <img 
                  src="https://lh3.googleusercontent.com/pw/AP1GczMvEqB335uoGMvcLypz1mphBVMW0zX-6KT7kxM3WiRvElga6v-_-DqN0cgfmZl_ug22_pHNX2lohSsGfzzP0zl8GN02aF2sqL5pf55s4-7pkl3IfuvBSAl65-a9wH5S66zoJ4YJlTOkKjFkDUbx--jN=w582-h429-s-no-gm?authuser=0"
                  alt="Bohème Production"
                  className={`w-[120px] object-contain transition-opacity duration-500 ease-in-out ${
                    isScrolled ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8 animate-fade-in-up stagger-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`${
                    isScrolled ? 'text-[#13182c]' : 'text-white'
                  } hover:text-[#e8dcc7] transition-all duration-300 font-medium hover:scale-110 relative group`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            
            {/* Social Media Buttons */}
            <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-gray-200 animate-fade-in-up stagger-3">
              <a 
                href="https://www.instagram.com/bohemeprod/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-9 h-9 ${
                  isScrolled ? 'bg-[#13182c]/10 text-[#13182c]' : 'bg-white/10 text-white'
                } rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 hover:bg-gradient-to-r hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] hover:text-white hover:shadow-[0_0_20px_rgba(131,58,180,0.6)]`}
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://www.tiktok.com/@bohemeproduction_" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-9 h-9 ${
                  isScrolled ? 'bg-[#13182c]/10 text-[#13182c]' : 'bg-white/10 text-white'
                } rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 hover:bg-black hover:text-white hover:shadow-[0_0_20px_rgba(0,0,0,0.8)]`}
              >
                <TikTokIcon />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61567827775717" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-9 h-9 ${
                  isScrolled ? 'bg-[#13182c]/10 text-[#13182c]' : 'bg-white/10 text-white'
                } rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 hover:bg-[#1877f2] hover:text-white hover:shadow-[0_0_20px_rgba(24,119,242,0.6)]`}
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 ${
              isScrolled ? 'text-[#13182c]' : 'text-white'
            } hover:text-[#efd0e0] transition-all duration-300 hover:scale-110 hover:rotate-90`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 animate-fade-in-up">
            <nav className="py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-6 py-4 text-lg text-[#13182c] hover:text-[#e8dcc7] hover:bg-[#e8dcc7]/10 transition-all duration-300 font-medium hover:translate-x-2 rounded-xl"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;