import React from 'react';
import { Utensils, Waves, Feather, Music } from 'lucide-react';
import { LeafBranch } from './BotanicalDecoration';
import { getOptimizedPhotoUrl } from '../data/resortData';

export const ExperiencesSection: React.FC = () => {
  const experiences = [
    {
      title: "Konkani Home Feasts",
      scriptSubtitle: "Farm-to-table traditions",
      desc: "Delight in authentic Konkani home cooking freshly prepared with farm-grown vegetables. Enjoy warm morning Ghawane, coconut chutneys, and savory local seafood and poultry dishes served with personal warmth.",
      photo: "https://lh3.googleusercontent.com/grass-cs/AABkmLfEoCTUnKt2YWDPI5hFtY3g-MlJQpH575yBujL8nq9x3p4vYmZ_7jFoQITfn4tX2icZPeCkeP6Vs47TDNT83WnTiDADbb2f0X_NMLeiEiqJTO3YsawrU8OYHH9uxl9rlIgx4kAcJYEXn4DX=s0",
      icon: Utensils,
      tag: "Culinary"
    },
    {
      title: "Covered Swimming Pool",
      scriptSubtitle: "All-weather refreshment",
      desc: "A clean, private covered pool designed for relaxation in every season. Swim away from the harsh afternoon sun or enjoy a cool dip during the Konkan monsoons surrounded by green foliage.",
      photo: "https://lh3.googleusercontent.com/grass-cs/AABkmLeJmO6grrLW7eezFK3AQLTpPdXOI-KCJGw9g3W_sY8Y6HcEmg4WujGJk-1AHNecSNUmmKfBKMYFnlfAXInTH4H_NI86RUlOiMTFKdx_w8XzyiI5o1wTitJMeiKc25ukFHBIl3hQKZFq4r8=s0",
      icon: Waves,
      tag: "Recreation"
    },
    {
      title: "Evening Gazebo & Poetry",
      scriptSubtitle: "Unforgettable hospitality",
      desc: "As twilight blankets the resort, gather around the gazebo. Host Dr. Ravrane warmly recites poignant poetry on life and friendship, making reunions and family evenings heartwarming and memorable.",
      photo: "https://lh3.googleusercontent.com/grass-cs/AABkmLc5pW2ZEfY4jmcqX0jAZY0Vz3MrCnsT03hEmKbmksycSYyl0G_FuNCKwlDRumILF4CzKhG9Re6zPGM2BZCPzQuukk1yuE4d1HdOQ0bKcUu1-lNDOYaGrWliUDRtL9iOfEhpdufdllF-VcEs=s0",
      icon: Music,
      tag: "Gatherings"
    },
    {
      title: "Birdsong & Flora Trails",
      scriptSubtitle: "Nature's living sanctuary",
      desc: "Wake up to melodies of wild Konkan birds, visit friendly ducks and farm pets, and stroll through plantations of betel palms and native fruit trees in crisp, clean country air.",
      photo: "https://lh3.googleusercontent.com/grass-cs/AABkmLe4ESwTWH2EFVI39a66Hbk1YCMCSDgkhOfb8D1XAqkG6BLo3xyhbN1eBP-ZO6498jgA4Zpaft8USe2P08-RzWgd5RiOc3VPKtO7ZNf5D9Cv9xGLyUNLkEkuD94wxc1GvtOsaJPe0y9LtvFJ=s0",
      icon: Feather,
      tag: "Nature"
    }
  ];

  return (
    <section id="experiences" className="relative py-24 sm:py-32 bg-forest-950 text-ivory overflow-hidden">
      
      {/* Subtle background glow & leaf illustration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-moss/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="absolute top-16 left-8 pointer-events-none opacity-15 text-sand hidden sm:block">
        <LeafBranch className="w-48 h-48" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="font-script text-2xl text-sand block mb-2">
            Immersive Konkan Memories
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-ivory leading-[1.1] mb-6">
            Experience Nature's Harmony
          </h2>
          <p className="text-base sm:text-lg text-ivory/80 font-sans leading-relaxed">
            Every moment here is paced by the rhythm of nature: gentle mornings with birds, leisurely afternoons by the pool, and starry evenings filled with laughter and heartfelt stories.
          </p>
        </div>

        {/* 2x2 Editorial Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {experiences.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative bg-forest-900/60 rounded-3xl p-6 sm:p-8 border border-forest-800/80 hover:border-gold/40 transition-all duration-500 hover:shadow-elevated flex flex-col justify-between"
              >
                {/* Photo with organic rounded corners */}
                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 bg-sand/30">
                  <img
                    src={getOptimizedPhotoUrl(item.photo, 700)}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
                  
                  {/* Floating badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-900/80 backdrop-blur-md border border-white/10 text-xs text-sand font-mono uppercase tracking-wider">
                    <Icon className="w-3.5 h-3.5 text-gold" />
                    <span>{item.tag}</span>
                  </div>
                </div>

                {/* Text Content */}
                <div>
                  <span className="font-script text-xl text-terracotta-light block mb-1">
                    {item.scriptSubtitle}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-normal mb-3 group-hover:text-sand transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-ivory/75 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
