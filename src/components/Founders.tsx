import { Camera, Video, Heart, Star, Sparkles } from 'lucide-react';
import { useTeam } from '../lib/sanity/hooks';

const Founders = () => {
  const team = useTeam();

  if (!team || team.length < 2) return null;

  const kilian = team[0];
  const gary = team[1];

  return (
    <section id="fondateurs" className="py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#13182c] mb-6 font-elegant">
            Les Artistes
            <span className="block text-[#13182c] font-script font-medium">Derrière l'Objectif</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Bohème Production, c'est l'union de deux passionnés d'image : {kilian.name} et {gary.name}, 
            photographes et vidéastes depuis plusieurs années. Notre société est spécialisée dans la 
            production photo et vidéo événementielle.
          </p>
        </div>

        {/* Founders Showcase */}
        <div className="relative">
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 bg-[#e8dcc7]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#13182c]/5 rounded-full blur-3xl"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 relative">
            {[kilian, gary].map((member, index) => (
              <div key={member._id} className="group relative">
                {/* Main card */}
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform group-hover:scale-[1.02] transition-all duration-700 flex flex-col">
                  {/* Portrait image */}
                  <div className="relative h-[28rem] overflow-hidden">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className={`w-full h-full object-cover ${index === 1 ? 'object-center scale-125 group-hover:scale-[1.35] grayscale' : 'group-hover:scale-110'} transition-transform duration-1000`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#13182c]/90 via-[#13182c]/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-3xl font-bold text-white mb-2">{member.name}</h3>
                      <div className="flex items-center space-x-2">
                        {index === 0 ? <Star className="h-4 w-4 text-[#e8dcc7]" /> : <Sparkles className="h-4 w-4 text-[#e8dcc7]" />}
                        <span className="text-white/90 text-sm">{member.keyPoint}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">{member.description}</p>
                  </div>
                </div>

                <div className={`absolute -top-4 ${index === 0 ? '-left-4' : '-right-4'} w-12 h-12 bg-[#e8dcc7] rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  {index === 0 ? <Camera className="h-6 w-6 text-[#13182c]" /> : <Video className="h-6 w-6 text-[#13182c]" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;
