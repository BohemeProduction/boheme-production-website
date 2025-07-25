import { ChevronDown, MapPin, Star, Sparkles } from 'lucide-react';
import { useHomeBanner } from '../lib/sanity/hooks';
import { urlFor } from '../lib/sanity/urlFor';

const Hero = () => {
  const banner = useHomeBanner();

  if (!banner) {
    // Affiche un loader ou rien pendant le chargement
    return <div className="min-h-screen flex items-center justify-center bg-white">Chargement...</div>;
  }

  const backgroundImageUrl = banner.media ? urlFor(banner.media).url() : 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImageUrl}
          alt="Bannière Mariage"
          className="w-full h-full object-cover parallax"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#13182c]/60 via-[#13182c]/40 to-[#13182c]/60"></div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-[#e8dcc7]/50 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-white/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-60 left-1/3 w-1 h-1 bg-[#e8dcc7]/40 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-60 right-1/3 w-2 h-2 bg-white/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-8">
          {/* Main Title */}
          <div className="space-y-4 animate-fade-in-up stagger-2 mb-12">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight font-serif">
              Bohème <span className="text-[#e8dcc7] font-script font-normal">Production</span>
            </h1>
          </div>
            <p className="text-xl lg:text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed animate-fade-in-up stagger-3">
              Immortaliser vos moments précieux à travers des créations visuelles d'exception, 
              alliant créativité artistique et excellence technique
            </p>

          {/* Features */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/90 font-medium animate-fade-in-up stagger-4">
            <div className="flex items-center space-x-2 hover-scale">
              <Star className="h-5 w-5 text-[#e8dcc7]" />
              <span className="font-medium">Duo Photo & Vidéo</span>
            </div>
            <div className="flex items-center space-x-2 hover-scale">
              <Star className="h-5 w-5 text-[#e8dcc7]" />
              <span className="font-medium">Haut de Gamme</span>
            </div>
            <div className="flex items-center space-x-2 hover-scale">
              <Star className="h-5 w-5 text-[#e8dcc7]" />
              <span className="font-medium">Approche Créative</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4 animate-fade-in-up stagger-5">
            <a
              href="#portfolio"
              className="inline-flex items-center space-x-2 bg-[#e8dcc7] text-[#13182c] px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl hover-glow group"
            >
              <span>Découvrir notre portfolio</span>
              <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce-slow">
          <ChevronDown className="h-6 w-6 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
