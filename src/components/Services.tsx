import React from 'react';
import { Heart, Users, Building, PartyPopper, Eye, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Mariage",
      description: "Reportage photos complet de votre journée et réalisation de votre film de mariage",
      features: ["Reportage photo complet", "Film de mariage cinéma", "Portraits des mariés"],
      color: "text-[#efd0e0]",
      bgColor: "from-[#e8dcc7]/20 to-[#e8dcc7]/10"
    },
    {
      icon: Building,
      title: "Événements Pro",
      description: "Reportage photos et réalisation de films pour vos événements professionnels",
      features: ["Reportage photo événement", "Film corporate", "Vidéos réseaux sociaux"],
      color: "text-[#13182c]",
      bgColor: "from-[#13182c]/20 to-[#13182c]/10"
    },
    {
      icon: PartyPopper,
      title: "Événements Privés",
      description: "Immortalisez vos célébrations privées avec photos et vidéos sur-mesure",
      features: ["Reportage photo personnalisé", "Film souvenir", "Moments authentiques"],
      color: "text-rose-400",
      bgColor: "from-rose-400/20 to-rose-400/10"
    },
    {
      icon: Users,
      title: "Corporate",
      description: "Solutions visuelles complètes pour entreprises, marques et institutions",
      features: ["Communication visuelle", "Événements d'entreprise", "Contenus digitaux"],
      color: "text-green-500",
      bgColor: "from-green-500/20 to-green-500/10"
    }
  ];

  return (
    <section id="prestations" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 fade-in-section">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#13182c] mb-6 font-elegant">
            Nos
            <span className="block text-[#13182c] font-script font-medium">Prestations</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Des services photo et vidéo sur-mesure pour tous vos événements,
            alliant excellence technique et créativité artistique.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-16 fade-in-section">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#e8dcc7]/30 flex flex-col h-full hover-lift animate-fade-in-up stagger-${(index % 3) + 1}`}
              >
                <div className="text-center mb-4 sm:mb-6 flex-grow">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${service.bgColor} mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-pulse-slow`}>
                    <Icon className={`h-6 w-6 sm:h-8 sm:w-8 ${service.color}`} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#13182c] mb-3 sm:mb-4">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium mb-4 sm:mb-6">{service.description}</p>
                  
                  <div className="space-y-2 sm:space-y-3 text-center">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center space-x-2 sm:space-x-3 group">
                        <Eye className="h-3 w-3 sm:h-4 sm:w-4 mt-1 flex-shrink-0 text-[#13182c] group-hover:scale-110 transition-all duration-300" />
                        <span className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center fade-in-section">
          <p className="text-lg text-gray-600 mb-6 font-medium">
            Chaque projet est unique. Discutons ensemble de vos besoins spécifiques.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-[#e8dcc7] text-[#13182c] px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl hover-glow group"
          >
            <span>Demander un devis personnalisé</span>
            <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;