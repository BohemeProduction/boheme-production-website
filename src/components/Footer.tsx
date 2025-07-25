import React from 'react';
import { Instagram, MapPin, Phone, Mail, Camera, Video } from 'lucide-react';

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

interface FooterProps {
  onLegalPageOpen: (page: 'mentions' | 'privacy') => void;
}

const Footer: React.FC<FooterProps> = ({ onLegalPageOpen }) => {
  return (
    <footer className="bg-[#13182c] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-8 fade-in-section items-center text-center lg:text-left">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center">
            <div className="text-center">
              <a 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-block cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <img 
                  src="https://lh3.googleusercontent.com/pw/AP1GczNzU7PB1wD4ZwB3-nmN1Fuylb6zr6Nz7Yb2dAUEeUIIq03DUL8FzRcovj3ru3zStRgI0RusPDzCvOSo87XRzeVs0RfyKnr95McNARLsKTXU6DtlFUfksX7R0SmjlYcWmOJ2OZkpZpJ3juCAD_Ez_vP5=w2258-h1596-s-no-gm?authuser=0"
                  alt="Bohème Production"
                  className="h-32 sm:h-40 md:h-48 lg:h-[18rem] w-auto mx-auto"
                />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center mb-4 sm:mb-8 lg:mb-0 lg:text-left">
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3 text-white/80">
              <li>
                <a href="#fondateurs" className="hover:text-[#e8dcc7] transition-all duration-300 hover:translate-x-2">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#prestations" className="hover:text-[#e8dcc7] transition-all duration-300 hover:translate-x-2">
                  Prestations
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#e8dcc7] transition-all duration-300 hover:translate-x-2">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#galeries" className="hover:text-[#e8dcc7] transition-all duration-300 hover:translate-x-2">
                  Galeries
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#e8dcc7] transition-all duration-300 hover:translate-x-2">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center mb-4 sm:mb-8 lg:mb-0 lg:text-left">
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4 text-white/80 justify-center items-center flex flex-col lg:block">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#e8dcc7] flex-shrink-0" />
                <span className="text-sm">Marseille & Provence</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#e8dcc7] flex-shrink-0" />
                <div className="text-sm space-y-1">
                  <div>
                    <a href="tel:+33611078607" className="hover:text-[#e8dcc7] transition-all duration-300 hover:translate-x-1">
                      Kilian : 06 11 07 86 07
                    </a>
                  </div>
                  <div>
                    <a href="tel:+33608774023" className="hover:text-[#e8dcc7] transition-all duration-300 hover:translate-x-1">
                      Gary : 06 08 77 40 23
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#e8dcc7] flex-shrink-0" />
                <a href="mailto:boheme.productionwedding@gmail.com" className="text-sm hover:text-[#e8dcc7] transition-all duration-300 hover:translate-x-1">
                  boheme.productionwedding@gmail.com
                </a>
              </div>
              
              {/* Social Media */}
              <div className="mt-8">
                <div className="flex justify-center lg:justify-start space-x-4">
                  <a 
                    href="https://www.instagram.com/bohemeprod/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 hover:bg-gradient-to-r hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] hover:text-white hover:shadow-[0_0_20px_rgba(131,58,180,0.6)]"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.tiktok.com/@bohemeproduction_" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 hover:bg-black hover:text-white hover:shadow-[0_0_20px_rgba(0,0,0,0.8)]"
                  >
                    <TikTokIcon />
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61567827775717" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 hover:bg-[#1877f2] hover:text-white hover:shadow-[0_0_20px_rgba(24,119,242,0.6)]"
                  >
                    <FacebookIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 text-sm">
            <div className="text-white/60">
              © 2025 Bohème Production. Tous droits réservés.
            </div>
            <div className="text-white/50">
              Fait avec passion par{' '}
              <a 
                href="https://propulseo-site.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#efd0e0] hover:text-white transition-all duration-300 font-medium"
              >
                Propul'SEO
              </a>
            </div>
            <div className="flex items-center space-x-6 text-white/60">
              <button 
                onClick={() => onLegalPageOpen('mentions')}
                className="hover:text-[#e8dcc7] transition-all duration-300 hover:scale-105"
              >
                Mentions légales
              </button>
              <button 
                onClick={() => onLegalPageOpen('privacy')}
                className="hover:text-[#e8dcc7] transition-all duration-300 hover:scale-105"
              >
                Politique de confidentialité
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;