import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight, Wind, Waves, ShieldCheck } from 'lucide-react';
import heroFreediverImg from '../../assets/images/freediver_no_tube.jpg';
import { PageType } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from 'react-i18next';

interface HeroSurfaceProps {
  onDescend: () => void;
  onOpenBooking: () => void;
  onNavigate?: (page: PageType) => void;
  currency?: 'EUR' | 'USD' | 'EGP';
  setCurrency?: (c: 'EUR' | 'USD' | 'EGP') => void;
}

export function HeroSurface({
  onDescend,
  onOpenBooking,
  onNavigate,
}: HeroSurfaceProps) {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check reduced motion preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
      const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, []);

  // Compute scroll depth percentage through the sticky hero container
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const totalScrollable = containerHeight - windowHeight;

      if (totalScrollable <= 0) {
        setScrollProgress(0);
        return;
      }

      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate subtle depth meter reading (from 02M at surface to 32M at full descent)
  const currentDepth = Math.round(2 + scrollProgress * 30);
  const formattedDepth = currentDepth < 10 ? `0${currentDepth}` : `${currentDepth}`;

  // Typography Motion Calculations (Underwater Descent Engine)
  // Line 1: "THE DEEPER YOU DIVE," gradually moves downward (sinking beneath the surface)
  const line1TranslateY = prefersReducedMotion ? 0 : scrollProgress * 65;
  const line1Opacity = Math.max(1 - scrollProgress * 2.5, 0);

  // Line 2: "THE HIGHER YOU RISE" remains closer to the visual center
  const line2TranslateY = prefersReducedMotion ? 0 : scrollProgress * 15;
  const line2Opacity = Math.max(1 - scrollProgress * 2.3, 0);

  // General headline container drift
  const headlineTranslateY = prefersReducedMotion ? 0 : scrollProgress * -60;

  // Phase opacities:
  // Phase 1 (Surface & Main Hook): 0 -> 0.45
  const phase1Opacity = Math.max(1 - scrollProgress * 2.2, 0);
  // Phase 2 (Poetic Descent: "The deeper you go..."): 0.40 -> 0.80
  const phase2Opacity =
    scrollProgress > 0.35 && scrollProgress < 0.85
      ? Math.sin(((scrollProgress - 0.35) / 0.5) * Math.PI)
      : 0;
  // Phase 3 (Journey CTA & Level Pathway): 0.75 -> 1.0
  const phase3Opacity = Math.min(Math.max((scrollProgress - 0.72) / 0.25, 0), 1);

  const handleStartJourney = () => {
    if (onNavigate) {
      onNavigate('courses');
    } else {
      const el = document.getElementById('courses');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTalkToInstructor = () => {
    onOpenBooking();
  };

  return (
    <div
      ref={containerRef}
      id="home"
      className="relative w-full min-h-[220vh] sm:min-h-[260vh] bg-[#01060c] text-white select-none"
    >
      {/* ======================================================== */}
      {/* STICKY FULLSCREEN CINEMATIC DEPTH STAGE                  */}
      {/* ======================================================== */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        
        {/* 1. UNDERWATER CINEMATIC BACKGROUND (Video + High-Res Photo Fallback) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          
          {/* Subtle Ambient Video (Underwater slow descent) */}
          <video
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            poster={heroFreediverImg}
            className={`w-full h-full object-cover object-center transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-85' : 'opacity-0'
            }`}
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-freediver-swimming-in-the-deep-ocean-43615-large.mp4"
              type="video/mp4"
            />
          </video>

          {/* High-Resolution Static Underwater Image */}
          <img
            src={heroFreediverImg}
            alt="Freediver descending into crystal-clear Dahab Red Sea waters"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out ${
              videoLoaded ? 'opacity-0' : 'opacity-100'
            }`}
            style={{
              transform: `scale(${1 + scrollProgress * 0.12}) translateY(${scrollProgress * -20}px)`,
            }}
            loading="eager"
            referrerPolicy="no-referrer"
          />

          {/* Dynamic Depth Gradient: Becomes progressively darker and richer blue as you descend */}
          <div
            className="absolute inset-0 transition-colors duration-500 ease-out"
            style={{
              backgroundColor: `rgba(1, 7, 14, ${0.4 + scrollProgress * 0.52})`,
            }}
          />

          {/* Caustic Surface Light Rays (Visible at surface 0-25%, fades out into deep blue) */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500"
            style={{ opacity: Math.max(1 - scrollProgress * 3.5, 0) }}
          >
            <div className="absolute top-0 left-1/4 w-3/4 h-96 bg-gradient-to-b from-cyan-300/10 via-sky-400/5 to-transparent blur-3xl transform -rotate-12" />
            <div className="absolute top-10 right-1/5 w-1/2 h-80 bg-gradient-to-b from-teal-200/10 to-transparent blur-2xl transform rotate-6" />
          </div>

          {/* Deep Water Vignette & Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#01060c] via-transparent to-[#01060c]/70 pointer-events-none" />
        </div>

        {/* ======================================================== */}
        {/* 2. SUBTLE FREEDIVING DEPTH INSTRUMENT (Side Indicator)   */}
        {/* ======================================================== */}
        <aside
          aria-label="Depth Gauge"
          className="fixed right-6 sm:right-10 top-1/2 -translate-y-1/2 z-30 pointer-events-none hidden md:flex flex-col items-end gap-2 font-alata text-[11px] tracking-widest text-slate-400"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-bebas text-cyan-300 text-lg tracking-wider drop-shadow-[0_0_12px_rgba(34,211,238,0.4)]">{formattedDepth} M</span>
          </div>

          {/* Minimalist Depth Ruler */}
          <div className="h-32 w-px bg-white/10 relative my-1">
            <div
              className="w-full bg-cyan-400 transition-all duration-150 shadow-[0_0_8px_rgba(56,189,248,0.8)]"
              style={{ height: `${Math.max(scrollProgress * 100, 4)}%` }}
            />
          </div>

          <div className="text-[10px] font-alata text-slate-500 uppercase tracking-widest flex flex-col items-end gap-1 font-medium">
            <span className={scrollProgress < 0.25 ? 'text-cyan-300 font-semibold' : ''}>{t('hero.depthSurface')}</span>
            <span className={scrollProgress >= 0.25 && scrollProgress < 0.65 ? 'text-cyan-300 font-semibold' : ''}>{t('hero.depth15m')}</span>
            <span className={scrollProgress >= 0.65 ? 'text-cyan-300 font-semibold' : ''}>{t('hero.depth30m')}</span>
          </div>
        </aside>

        {/* ======================================================== */}
        {/* 3. CENTER STAGE: EDITORIAL CINEMATIC PHASES             */}
        {/* ======================================================== */}
        <div className="relative z-20 flex-1 flex flex-col justify-center max-w-5xl mx-auto px-6 sm:px-12 w-full pt-28 sm:pt-36 pb-12 text-left sm:text-center">
          
          {/* -------------------------------------------------------- */}
          {/* PHASE 1: SURFACE & MAIN HOOK (0 - 45% Scroll)            */}
          {/* -------------------------------------------------------- */}
          <div
            className="transition-all duration-300 ease-out"
            style={{
              opacity: phase1Opacity,
              transform: `translateY(${headlineTranslateY}px)`,
              pointerEvents: phase1Opacity > 0.2 ? 'auto' : 'none',
              display: phase1Opacity <= 0.01 ? 'none' : 'block',
            }}
          >
            {/* Small Location Label (Eyebrow — Alata) */}
            <div className="mb-3 sm:mb-5">
              <p className="text-[11px] sm:text-xs font-alata font-normal tracking-[0.24em] text-cyan-200/90 uppercase">
                {t('hero.locationEyebrow')}
              </p>
            </div>

            {/* Main Editorial Hook — Tidal Astral Grotesk for English, Beiruti for Arabic */}
            <h1
              className="animate-ocean-buoyancy font-tidal text-3xl sm:text-4xl md:text-5xl lg:text-[3.85rem] xl:text-[4.15rem] leading-[1.12] sm:leading-[1.14] mb-6 sm:mb-8 transition-transform uppercase tracking-[0.03em] sm:tracking-[0.04em] font-normal"
              style={{ fontFamily: isRtl ? "'Beiruti', sans-serif" : "'Tidal Astral Grotesk', sans-serif" }}
            >
              {/* Line 1: White (slate-50) */}
              <span
                className="block text-slate-50 drop-shadow-[0_2px_14px_rgba(0,0,0,0.7)] will-change-transform transition-all duration-300"
                style={{
                  transform: `translateY(${line1TranslateY}px)`,
                  opacity: line1Opacity,
                }}
              >
                {t('hero.line1')}
              </span>

              {/* Line 2: Vibrant Turquoise (#06b6d4) */}
              <span
                className="block text-[#06b6d4] drop-shadow-[0_0_28px_rgba(6,182,212,0.45)] will-change-transform transition-all duration-300 mt-1 sm:mt-2"
                style={{
                  transform: `translateY(${line2TranslateY}px)`,
                  opacity: line2Opacity,
                }}
              >
                {t('hero.line2')}
              </span>
            </h1>

            {/* Supporting Copy & Informative Infographic — Alata */}
            <div className="w-full max-w-[580px] sm:mx-auto space-y-4 mb-8 sm:mb-10 text-slate-300 font-alata font-normal text-left sm:text-left">
              <div>
                <p className="font-medium text-white text-base sm:text-lg">
                  {t('hero.leadTitle')}
                </p>
                <p className="text-slate-300/85 text-xs sm:text-sm leading-relaxed mt-1">
                  {t('hero.leadDesc')}
                </p>
              </div>

              {/* Informative Beginner Infographic */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1">
                <div className="flex items-center sm:flex-col sm:items-start gap-3 sm:gap-2 p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-cyan-400/30 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center shrink-0 text-cyan-300">
                    <Wind className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold uppercase tracking-wider">{t('hero.oneBreath')}</div>
                    <div className="text-slate-400 text-[11px] leading-snug">{t('hero.oneBreathDesc')}</div>
                  </div>
                </div>

                <div className="flex items-center sm:flex-col sm:items-start gap-3 sm:gap-2 p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-cyan-400/30 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center shrink-0 text-cyan-300">
                    <Waves className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold uppercase tracking-wider">{t('hero.calmWaters')}</div>
                    <div className="text-slate-400 text-[11px] leading-snug">{t('hero.calmWatersDesc')}</div>
                  </div>
                </div>

                <div className="flex items-center sm:flex-col sm:items-start gap-3 sm:gap-2 p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-cyan-400/30 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center shrink-0 text-cyan-300">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold uppercase tracking-wider">{t('hero.safety100')}</div>
                    <div className="text-slate-400 text-[11px] leading-snug">{t('hero.safety100Desc')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs — Alata */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-center gap-4 sm:gap-6 mb-8">
              <button
                onClick={handleStartJourney}
                className="px-8 py-3.5 rounded-full bg-white text-[#01060c] font-alata text-xs font-semibold uppercase tracking-[0.1em] hover:bg-slate-100 transition-all flex items-center gap-2 cursor-pointer shadow-xl hover:scale-105"
              >
                <span>{t('hero.exploreCourses')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleTalkToInstructor}
                className="px-6 py-3.5 rounded-full text-slate-300 hover:text-white font-alata text-xs font-normal uppercase tracking-[0.1em] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>{t('hero.bookInquireNow')}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cyan-300" />
              </button>
            </div>

            {/* Trust Microcopy — Alata */}
            <div className="text-[11px] sm:text-xs font-alata font-normal text-slate-400 tracking-wider">
              <span>3,500+ divers trained</span>
              <span className="mx-2 text-slate-600">·</span>
              <span>Small groups</span>
              <span className="mx-2 text-slate-600">·</span>
              <span>Beginners welcome</span>
            </div>
          </div>

          {/* -------------------------------------------------------- */}
          {/* PHASE 2: POETIC IMMERSION (45% - 80% Scroll)             */}
          {/* -------------------------------------------------------- */}
          <div
            className="transition-all duration-500 ease-out text-center sm:text-center"
            style={{
              opacity: phase2Opacity,
              transform: `translateY(${(1 - phase2Opacity) * 30}px)`,
              pointerEvents: phase2Opacity > 0.3 ? 'auto' : 'none',
              display: phase2Opacity <= 0.01 ? 'none' : 'block',
            }}
          >
            <div className="space-y-6 max-w-3xl mx-auto py-6">
              <span className="text-[11px] font-alata font-normal tracking-[0.24em] uppercase text-cyan-400/90">
                THE REALM BENEATH
              </span>

              {/* Bebas Neue Headline with White & Turquoise mix */}
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bebas text-white tracking-[0.06em] leading-tight">
                “THE <span className="text-cyan-300 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">DEEPER</span> YOU GO,
                <br />
                THE <span className="text-cyan-300 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">QUIETER</span> IT BECOMES.”
              </h2>

              <p className="text-sm sm:text-base font-alata font-normal text-slate-300 tracking-wide">
                That's where the journey begins.
              </p>

              <div className="pt-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-alata text-slate-300">
                  <span>Current Depth:</span>
                  <span className="font-bebas text-cyan-300 text-lg tracking-wider">{formattedDepth} M</span>
                </div>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------- */}
          {/* PHASE 3: THE ACTION & PATHWAY (75% - 100% Scroll)        */}
          {/* -------------------------------------------------------- */}
          <div
            className="transition-all duration-500 ease-out text-center sm:text-center"
            style={{
              opacity: phase3Opacity,
              transform: `translateY(${(1 - phase3Opacity) * 25}px)`,
              pointerEvents: phase3Opacity > 0.3 ? 'auto' : 'none',
              display: phase3Opacity <= 0.01 ? 'none' : 'block',
            }}
          >
            <div className="max-w-3xl mx-auto space-y-6">
              <span className="text-[11px] font-alata font-normal tracking-[0.24em] uppercase text-cyan-300">
                CHOOSE YOUR DEPTH
              </span>

              {/* Bebas Neue Headline with Turquoise accent */}
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bebas text-white tracking-[0.05em] leading-tight">
                READY TO TAKE YOUR <span className="text-cyan-300 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">FIRST BREATH</span> UNDERWATER?
              </h2>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={handleStartJourney}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-[#01060c] font-alata text-xs font-semibold uppercase tracking-[0.1em] hover:bg-slate-100 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xl hover:scale-105"
                >
                  <span>START YOUR JOURNEY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleTalkToInstructor}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-white/20 hover:border-white/40 bg-white/5 text-white font-alata text-xs font-normal uppercase tracking-[0.1em] flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>TALK TO AN INSTRUCTOR</span>
                  <ArrowUpRight className="w-4 h-4 text-cyan-300" />
                </button>
              </div>

              {/* Pathway Breadcrumbs — Alata */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-xs font-alata text-slate-400 tracking-widest uppercase">
                <span className="hover:text-cyan-300 transition-colors cursor-pointer" onClick={handleStartJourney}>
                  BEGINNER
                </span>
                <span>→</span>
                <span className="hover:text-cyan-300 transition-colors cursor-pointer" onClick={handleStartJourney}>
                  INTERMEDIATE
                </span>
                <span>→</span>
                <span className="hover:text-cyan-300 transition-colors cursor-pointer" onClick={handleStartJourney}>
                  ADVANCED
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* 4. BOTTOM BAR: SCROLL INVITATION & DEPTH STATUS          */}
        {/* ======================================================== */}
        <footer className="relative z-20 pb-6 sm:pb-8 px-6 sm:px-12 flex items-center justify-between text-slate-400 text-xs font-alata">
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-[11px] uppercase tracking-widest text-slate-400">
              Dahab, South Sinai, Egypt
            </span>
          </div>

          {/* Center: Scroll to Descend prompt */}
          <button
            onClick={onDescend}
            className="mx-auto sm:mx-0 flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-slate-400 hover:text-cyan-300 font-alata font-normal transition-colors cursor-pointer"
          >
            <span>↓ BEGIN THE DESCENT</span>
          </button>

          <div className="hidden sm:block text-[11px] font-alata text-slate-400">
            <span>{Math.round(scrollProgress * 100)}% Immersion</span>
          </div>
        </footer>

      </div>
    </div>
  );
}

// Named alias and default export for flexibility
export const HeroSection = HeroSurface;
export default HeroSurface;
