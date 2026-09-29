import { ArrowRight, Sparkles, BookOpen, Award } from 'lucide-react';
import { PageType } from '../../types';

interface StoryTeaserBannerProps {
  onNavigate: (page: PageType) => void;
}

export function StoryTeaserBanner({ onNavigate }: StoryTeaserBannerProps) {
  const founders = [
    {
      name: 'Lotta Ericson',
      role: 'Co-founder & Manager',
      highlight: 'Former World Record Holder & SSI ITC Pioneer',
      image: '/Lotta - freedive dahab.jpg',
      alt: 'Lotta Ericson - Co-founder of Freedive Dahab',
    },
    {
      name: 'Linda Paganelli',
      role: 'Elite Freediver & Storyteller',
      highlight: 'CMAS Silver Medalist & Italian Champion',
      image: '/linda-paganelli - freedive dahab.webp',
      alt: 'Linda Paganelli - Elite Freediver & Storyteller',
    },
    {
      name: 'Waleed Ghatas',
      role: 'Instructor Trainer & Ocean Advocate',
      highlight: 'Blue Hole Mentor & Record Coach',
      image: '/Waleed Ghatas - freedive dahab.jpg',
      alt: 'Waleed Ghatas - Instructor Trainer & Ocean Advocate',
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 px-6 bg-[#010813] border-t border-white/10 overflow-hidden select-none">
      
      {/* Background Architectural Grid and Ambient Lighting */}
      <div className="absolute inset-0 architectural-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/[0.07] blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[250px] bg-sky-600/[0.05] blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Top Header & Copy */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-white/10">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-alata tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Sanctuary Heritage • Est. 2003</span>
            </div>

            <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-white tracking-[0.05em] leading-[1.05]">
              Our Story — <span className="text-cyan-300 drop-shadow-[0_0_24px_rgba(34,211,238,0.4)]">Meet Our Founders</span>
            </h2>

            <p className="text-slate-300 font-alata font-normal text-base sm:text-lg leading-relaxed max-w-2xl">
              Freedive Dahab was born out of passion, experience, and a vision shared by three incredible pioneers of freediving. Discover why our Lighthouse Bay school is world-renowned for freediving excellence.
            </p>
          </div>

          <div className="flex items-center">
            <button
              onClick={() => onNavigate('story')}
              className="px-7 py-3.5 rounded-full bg-white text-[#020811] hover:bg-slate-100 font-alata text-xs sm:text-sm font-semibold uppercase tracking-[0.08em] transition-all duration-200 flex items-center gap-2 cursor-pointer hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:scale-105"
            >
              <span>Explore Our Story</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Founder Cards Teasing the Story (Unedited original portraits) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder, idx) => (
            <div
              key={idx}
              onClick={() => onNavigate('story')}
              className="group relative flex flex-col rounded-2xl bg-slate-900/40 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.7)] cursor-pointer"
            >
              {/* Unedited Original Image Frame */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-950">
                <img
                  src={founder.image}
                  alt={founder.alt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                
                {/* Subtle gradient scrim at bottom for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent opacity-85 group-hover:opacity-65 transition-opacity" />

                {/* Badge Indicator */}
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono tracking-wider text-cyan-300 uppercase">
                  Founder
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-cyan-400 font-semibold block mb-1">
                    {founder.role}
                  </span>
                  <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide leading-none">
                    {founder.name}
                  </h3>
                </div>
              </div>

              {/* Card Footer with Highlight & Link */}
              <div className="p-5 flex items-center justify-between bg-slate-900/60 border-t border-white/5">
                <span className="text-xs font-alata text-slate-300 line-clamp-1">
                  {founder.highlight}
                </span>
                <span className="text-cyan-400 group-hover:translate-x-1 transition-transform shrink-0 ml-2">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Teaser Strip */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-cyan-950/30 via-slate-900/40 to-slate-950/50 border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h4 className="font-bebas text-2xl text-white tracking-wide">
                First SSI Freediving Instructor Training Center in the World
              </h4>
              <p className="text-xs sm:text-sm font-alata text-slate-300">
                Pioneering freediving education since 2003 with certified facilities in Dahab.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('story')}
            className="shrink-0 px-6 py-3 rounded-full bg-cyan-400 hover:bg-cyan-300 text-[#020b14] font-semibold text-xs font-alata tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_25px_rgba(56,189,248,0.45)] cursor-pointer"
          >
            Read Our Full Story
          </button>
        </div>

      </div>
    </section>
  );
}
