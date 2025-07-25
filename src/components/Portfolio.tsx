import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useProjects } from '@/lib/sanity/hooks';
import { urlFor } from '@/lib/sanity/urlFor';

type Video = {
  title: string;
  url: string;
};

type Project = {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  order: number;
  cover: any;
  gallery?: any[];
  videos?: Video[];
};

const Portfolio = () => {
  const projects = useProjects() ?? [];
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [preloadedImages, setPreloadedImages] = useState<string[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('Tous');

  // Catégories de filtrage basées sur les 4 services
  const categories = ['Tous', 'Mariage', 'Événements Pro', 'Événements Privés', 'Corporate'];

  // Filtrer les projets selon la catégorie sélectionnée
  const filteredProjects = activeFilter === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Préchargement des images
  useEffect(() => {
    if (selectedProject?.gallery) {
      // Précharger toutes les images de la galerie
      const imageUrls = selectedProject.gallery.map((img: any) => 
        img ? urlFor(img).quality(90).url() : ''
      ).filter(Boolean);

      setPreloadedImages(imageUrls);

      // Créer des objets Image pour le préchargement
      imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
      });
    }
  }, [selectedProject]);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const goToImage = (index: number) => {
    if (selectedProject) {
      const totalItems = selectedProject.videos?.length || selectedProject.gallery?.length || 0;
      if (totalItems > 0) {
        setCurrentImageIndex(index);
      }
    }
  };

  const getMediaCount = (project: Project) => {
    if (project.videos && project.videos.length > 0) {
      return project.videos.length > 1 ? `${project.videos.length} vidéos` : '1 vidéo';
    }
    if (project.gallery && project.gallery.length > 0) {
      return project.gallery.length > 1 ? `${project.gallery.length} photos` : '1 photo';
    }
    return '0 photo';
  };

  const getCurrentMedia = (project: Project) => {
    if (project.videos && project.videos.length > 0) {
      return project.videos[currentImageIndex]?.url || '';
    }
    if (project.gallery && project.gallery.length > 0) {
      return project.gallery[currentImageIndex] ? urlFor(project.gallery[currentImageIndex]).url() : '';
    }
    return '';
  };

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#13182c]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Titre et description */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-section">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-elegant">
            Notre
            <span className="block text-white font-script font-medium">Portfolio</span>
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            Découvrez quelques-unes de nos créations les plus emblématiques, reflet de notre passion pour l'excellence et l'authenticité.
          </p>
        </div>

        {/* Filtres par catégories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 fade-in-section">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-[#e8dcc7] text-[#13182c] shadow-lg'
                  : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 fade-in-section">
          {filteredProjects.map((project: Project) => (
            <div
              key={project._id}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer hover:scale-[1.03] transition-transform duration-500 bg-white"
              onClick={() => openProject(project)}
            >
              <img
                src={project.cover ? urlFor(project.cover).url() : ''}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700"
              />
              {/* Overlay infos dynamiques au hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div>
                  <div className="text-sm font-semibold text-[#e8dcc7] mb-1 uppercase tracking-wide">
                    {project.category}
                  </div>
                  <div className="text-xl lg:text-2xl font-bold text-white mb-1">
                    {project.title}
                  </div>
                  <div className="text-white/80 text-sm font-medium">
                    {project.videos && project.videos.length > 0 ? (
                      <span className="flex items-center gap-1">
                        <Play className="w-3 h-3" />
                        {getMediaCount(project)}
                      </span>
                    ) : (
                      getMediaCount(project)
                    )}
                  </div>
                </div>
              </div>
              {/* Titre visible hors hover */}
              <div className="absolute bottom-4 left-4 right-4 text-white font-semibold group-hover:opacity-0 transition-opacity duration-300">
                {project.title}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action en bas */}
        <div className="text-center mt-16 fade-in-section">
          <p className="text-lg text-white/80 mb-6 font-medium">
            Envie de voir plus de nos créations ?
          </p>
          <a
            href="#galeries"
            className="inline-flex items-center space-x-2 bg-[#e8dcc7] text-[#13182c] px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl hover-glow group"
          >
            <span>Accéder aux galeries complètes</span>
          </a>
        </div>

        {/* Modale de projet */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8">
            {/* Bouton de fermeture amélioré */}
            <button
              className="absolute top-6 right-6 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-2 transition-all duration-300"
              onClick={closeProject}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative w-full max-w-6xl mx-auto flex flex-col">
              {/* En-tête du projet - Déplacé au-dessus de l'image */}
              <div className="mb-6 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                <p className="text-white/80 text-lg">{selectedProject.category}</p>
              </div>

              {/* Contenu principal */}
              <div className="relative rounded-xl overflow-hidden">
                {selectedProject.videos && selectedProject.videos.length > 0 ? (
                  // Affichage de la vidéo YouTube si disponible
                  <div className="relative w-full aspect-video">
                    <iframe
                      src={(() => {
                        const url = selectedProject.videos[currentImageIndex].url;
                        // Gestion des YouTube Shorts
                        if (url.includes('youtube.com/shorts/')) {
                          return url.replace('youtube.com/shorts/', 'youtube.com/embed/').split('?')[0];
                        }
                        // Gestion des liens YouTube classiques
                        else if (url.includes('watch?v=')) {
                          return url.replace('watch?v=', 'embed/').split('&')[0];
                        }
                        // Gestion des liens youtu.be
                        else if (url.includes('youtu.be/')) {
                          return url.replace('youtu.be/', 'youtube.com/embed/').split('?')[0];
                        }
                        return url;
                      })() + '?autoplay=1&rel=0&showinfo=0&modestbranding=1'}
                      className="absolute top-0 left-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      referrerPolicy="strict-origin"
                      loading="eager"
                    />
                  </div>
                ) : (
                  // Affichage de l'image si pas de vidéo
                  <div className="relative">
                    <img
                      key={currentImageIndex}
                      src={getCurrentMedia(selectedProject)}
                      alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                      className="w-full h-auto max-h-[75vh] object-contain rounded-lg transition-opacity duration-200"
                      loading="eager"
                    />
                  </div>
                )}

                {/* Navigation */}
                {((selectedProject.videos && selectedProject.videos.length > 1) ||
                  (!selectedProject.videos && selectedProject.gallery && selectedProject.gallery.length > 1)) && (
                  <>
                    <button
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white/80 hover:text-white p-3 rounded-full transition-all duration-300 group z-10"
                      onClick={(e) => {
                        e.stopPropagation();
                        const totalItems = selectedProject.videos ? selectedProject.videos.length : (selectedProject.gallery?.length || 0);
                        goToImage((currentImageIndex - 1 + totalItems) % totalItems);
                      }}
                    >
                      <ChevronLeft className="w-8 h-8 transform group-hover:-translate-x-1 transition-transform duration-300" />
                    </button>
                    <button
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white/80 hover:text-white p-3 rounded-full transition-all duration-300 group z-10"
                      onClick={(e) => {
                        e.stopPropagation();
                        const totalItems = selectedProject.videos ? selectedProject.videos.length : (selectedProject.gallery?.length || 0);
                        goToImage((currentImageIndex + 1) % totalItems);
                      }}
                    >
                      <ChevronRight className="w-8 h-8 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </>
                )}

                {/* Indicateur de progression */}
                {((selectedProject.videos && selectedProject.videos.length > 1) ||
                  (!selectedProject.videos && selectedProject.gallery && selectedProject.gallery.length > 1)) && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2 bg-black/30 px-4 py-2 rounded-full">
                    {(selectedProject.videos || selectedProject.gallery || []).map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          goToImage(index);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
