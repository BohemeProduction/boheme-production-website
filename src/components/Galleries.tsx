import React from 'react';
import { Lock, Key, Eye, Download } from 'lucide-react';

const Galleries = () => {
  const galleryFeatures = [
    {
      icon: Lock,
      title: "Accès Sécurisé",
      description: "Galeries privées protégées par mot de passe"
    },
    {
      icon: Eye,
      title: "Qualité HD",
      description: "Visualisation haute définition de toutes vos photos"
    },
    {
      icon: Download,
      title: "Téléchargement",
      description: "Récupérez vos images en haute résolution"
    },
    {
      icon: Key,
      title: "Partage Familial",
      description: "Partagez l'accès avec vos proches facilement"
    }
  ];

  return (
    <section id="galeries" className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#13182c] mb-6 font-elegant">
            Galeries Privées
            <span className="block text-[#13182c] font-script font-medium">Jingoo</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Retrouvez l'intégralité de vos photos de mariage dans votre espace personnel 
            sécurisé, accessible à vie pour revivre vos plus beaux souvenirs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Gallery Preview - Mobile Only (déplacé en haut) */}
          <div className="lg:hidden relative mb-8">
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-[#13182c] p-4 flex items-center space-x-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-white text-sm">galerie.jingoo.com</div>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-[#13182c] mb-2">Mariage Sarah & Thomas</h5>
                  <p className="text-gray-600 text-sm">15 Juillet 2024 • 247 photos</p>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <img
                    src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg"
                    alt="Preview 1"
                    className="w-full h-20 object-cover rounded-lg"
                  />
                  <img
                    src="https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg"
                    alt="Preview 2"
                    className="w-full h-20 object-cover rounded-lg"
                  />
                  <img
                    src="https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg"
                    alt="Preview 3"
                    className="w-full h-20 object-cover rounded-lg"
                  />
                </div>
                <button className="w-full bg-[#e8dcc7] text-[#13182c] py-3 rounded-xl font-semibold hover:bg-[#13182c] hover:text-white transition-colors duration-300">
                  Télécharger toutes les photos
                </button>
              </div>
            </div>
            {/* Floating Elements - Mobile Only */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#e8dcc7] rounded-full flex items-center justify-center shadow-xl">
              <Lock className="h-6 w-6 text-[#13182c]" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-[#13182c] rounded-full flex items-center justify-center shadow-xl">
              <Download className="h-8 w-8 text-white" />
            </div>
          </div>

          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[#13182c] font-elegant">
                Vos Souvenirs en
                <span className="text-[#13182c] font-script font-medium"> Sécurité</span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Grâce à notre partenariat avec Jingoo, bénéficiez d'une solution 
                professionnelle pour conserver et partager vos photos de mariage 
                dans les meilleures conditions.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              {galleryFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#e8dcc7]/20 rounded-xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-[#13182c]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#13182c] mb-1 text-subtitle">{feature.title}</h4>
                      <p className="text-gray-600 text-sm font-medium">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Process */}
            <div className="bg-[#13182c] rounded-3xl p-8 text-white">
              <h4 className="text-xl font-bold mb-6 text-center text-subtitle">Comment ça marche ?</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-[#e8dcc7] rounded-full flex items-center justify-center text-[#13182c] font-bold text-sm">1</div>
                  <p className="text-white/90 font-medium">Réception de vos identifiants par email</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-[#e8dcc7] rounded-full flex items-center justify-center text-[#13182c] font-bold text-sm">2</div>
                  <p className="text-white/90 font-medium">Connexion à votre galerie personnelle</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-[#e8dcc7] rounded-full flex items-center justify-center text-[#13182c] font-bold text-sm">3</div>
                  <p className="text-white/90 font-medium">Téléchargement et partage illimités</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual - Desktop Only */}
          <div className="hidden lg:block relative">
            {/* Main Gallery Preview */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-[#13182c] p-4 flex items-center space-x-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-white text-sm">galerie.jingoo.com</div>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-[#13182c] mb-2">Mariage Sarah & Thomas</h5>
                  <p className="text-gray-600 text-sm">15 Juillet 2024 • 247 photos</p>
                </div>
                
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <img
                    src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg"
                    alt="Preview 1"
                    className="w-full h-20 object-cover rounded-lg"
                  />
                  <img
                    src="https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg"
                    alt="Preview 2"
                    className="w-full h-20 object-cover rounded-lg"
                  />
                  <img
                    src="https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg"
                    alt="Preview 3"
                    className="w-full h-20 object-cover rounded-lg"
                  />
                </div>
                
                <button className="w-full bg-[#e8dcc7] text-[#13182c] py-3 rounded-xl font-semibold hover:bg-[#13182c] hover:text-white transition-colors duration-300">
                  Télécharger toutes les photos
                </button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#e8dcc7] rounded-full flex items-center justify-center shadow-xl">
              <Lock className="h-8 w-8 text-[#13182c]" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#13182c] rounded-full flex items-center justify-center shadow-xl">
              <Download className="h-10 w-10 text-white" />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#e8dcc7]/20 to-[#13182c]/10 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-[#13182c] mb-4 font-elegant">
              Déjà Travaillé avec Nous ?
            </h3>
            <p className="text-lg text-gray-600 mb-6 font-medium">
              Accédez à votre galerie privée pour retrouver toutes vos créations.
            </p>
            <a 
              href="https://www.jingoo.com/client/accessReport"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#13182c] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#e8dcc7] hover:text-[#13182c] transition-all duration-300 shadow-xl"
            >
              <span className="inline-flex items-center space-x-2 group">
                <span>Accéder à ma galerie</span>
                <Key className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galleries;