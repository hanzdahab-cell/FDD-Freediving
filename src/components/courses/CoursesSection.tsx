import { useState } from 'react';
import { ssiCourses, specialtyCourses, instructorCourses, equalisationClass, trainingSessionsPricing } from '../../data/courses';
import { Course, SpecialtyCourse, InstructorCourse } from '../../types';
import { ArrowRight, Clock, Award, Shield, CheckCircle, Info, ChevronRight, X, Sparkles } from 'lucide-react';
import ssiBeginnerBannerImg from '../../assets/images/ssi_beginner_course_1789742298867.jpg';
import { FreediveLogo } from '../ui/FreediveLogo';
import { useTranslation } from 'react-i18next';

interface CoursesSectionProps {
  onOpenBooking: (courseId?: string) => void;
  currency: 'EUR' | 'USD' | 'EGP';
}

export function CoursesSection({ onOpenBooking, currency }: CoursesSectionProps) {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'core' | 'specialty' | 'instructor' | 'equalisation' | 'training'>('core');
  const [selectedCourse, setSelectedCourse] = useState<Course | SpecialtyCourse | InstructorCourse | null>(null);

  // Currency converter helper (approx. exchange rates)
  const formatPrice = (eur: number) => {
    if (currency === 'USD') return `$${Math.round(eur * 1.08)}`;
    if (currency === 'EGP') return `E£${Math.round(eur * 52)}`;
    return `€${eur}`;
  };

  return (
    <section id="courses" className="relative py-32 px-6 bg-[#020617] border-t border-white/5">
      
      {/* Background Architectural Grid (Driessen Precision) */}
      <div className="absolute inset-0 architectural-grid-fine opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/10">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs font-alata tracking-[0.3em] uppercase text-cyan-400">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>{t('coursesSection.badge')}</span>
            </div>
            <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-white tracking-[0.05em] leading-tight">
              {t('coursesSection.title')}{' '}
              <span className="text-cyan-300 drop-shadow-[0_0_24px_rgba(34,211,238,0.4)]">
                {t('coursesSection.titleHighlight')}
              </span>
            </h2>
            <p className="text-slate-300 font-alata font-normal max-w-xl text-base sm:text-lg leading-relaxed">
              {t('coursesSection.subtitle')}
            </p>
          </div>

          {/* Tab Filter Switcher */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-900/80 border border-white/10">
            {[
              { id: 'core', label: t('coursesSection.tabCore') },
              { id: 'specialty', label: t('coursesSection.tabSpecialty') },
              { id: 'instructor', label: t('coursesSection.tabInstructor') },
              { id: 'equalisation', label: t('coursesSection.tabEqualisation') },
              { id: 'training', label: t('coursesSection.tabTraining') },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                  activeTab === tab.id
                    ? 'bg-cyan-500 text-black font-bold shadow-lg shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* FEATURED SSI BANNER */}
        <div className="mb-14 rounded-3xl overflow-hidden border border-white/15 bg-slate-900/60 shadow-2xl relative group">
          <div className="relative aspect-[21/9] min-h-[300px] sm:min-h-[360px] w-full overflow-hidden">
            <img
              src={ssiBeginnerBannerImg}
              alt="SSI Beginner Freediver Course in Dahab with Mares gear"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              referrerPolicy="no-referrer"
            />
            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#020b14]/90 via-[#020b14]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020b14]/95 via-transparent to-[#020b14]/30" />

            {/* Top Bar on Banner (Freedive Dahab on left, SSI on right) */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FreediveLogo size={36} interactive={false} />
                <span className="font-serif tracking-[0.2em] text-xs sm:text-sm font-bold text-white uppercase">
                  FREEDIVE DAHAB
                </span>
              </div>
              <div className="w-9 h-9 rounded-full bg-cyan-500 flex items-center justify-center text-slate-950 font-black text-xs tracking-tight shadow-lg shadow-cyan-500/30">
                SSI
              </div>
            </div>

            {/* Bottom Content: Course Title & Stats */}
            <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-10 max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 font-sans text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>OFFICIAL SSI PROGRAM</span>
              </div>
              
              <h3 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none uppercase drop-shadow-md">
                BEGINNER FREEDIVER COURSE
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 font-sans font-light leading-relaxed hidden sm:block max-w-xl">
                The world-standard certification for exploring depths down to 20 meters. Master breathing, equalisation, and mammalian dive reflexes on the calm Lighthouse reef.
              </p>

              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenBooking('ssi-level-1')}
                  className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-sans text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2"
                >
                  <span>ENROLL NOW • €310</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <div className="text-[11px] font-mono text-slate-300 hidden md:flex items-center gap-3">
                  <span>• Depth: 20m</span>
                  <span>• 2.5 Days</span>
                  <span>• SSI Digital App Included</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TAB 1: CORE SSI COURSES (Level 1, 2, 3) */}
        {activeTab === 'core' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ssiCourses.map((course) => (
              <div
                key={course.id}
                className="group glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={course.image.url}
                      alt={course.image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-cyan-300 text-[10px] font-mono tracking-widest uppercase">
                        {course.level}
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 text-right">
                      <span className="text-2xl font-serif font-bold text-white">
                        {formatPrice(course.priceEur)}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 block">ALL GEAR INCLUDED</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                      {course.title}
                    </h3>
                    
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light line-clamp-3">
                      {course.subtitle}
                    </p>

                    <div className="grid grid-cols-2 gap-3 py-3 border-y border-white/10 text-xs font-mono text-slate-300">
                      <div>
                        <span className="text-slate-500 block text-[10px]">{t('coursesSection.depth')}</span>
                        <span className="text-cyan-400 font-bold">{course.maxDepthMeters} {t('coursesSection.meters')}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px]">{t('coursesSection.duration')}</span>
                        <span className="text-white font-bold">{course.durationDays} {t('coursesSection.days')}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2 pt-2">
                      {course.highlights.slice(0, 3).map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 sm:p-8 pt-0 flex items-center gap-3">
                  <button
                    onClick={() => onOpenBooking(course.id)}
                    className="flex-1 py-3 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold uppercase tracking-wider transition-all text-center"
                  >
                    {t('coursesSection.enrollNow')}
                  </button>
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="p-3 rounded-xl border border-white/15 hover:border-cyan-400 text-slate-300 hover:text-white transition-all"
                    title={t('coursesSection.viewCurriculum')}
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: SPECIALTY CLINICS */}
        {activeTab === 'specialty' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialtyCourses.map((spec) => (
              <div
                key={spec.id}
                className="group glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/40 flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={spec.image.url}
                      alt={spec.image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
                    
                    <div className="absolute bottom-3 right-4">
                      <span className="text-xl font-serif font-bold text-white">
                        {formatPrice(spec.priceEur)}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {spec.title}
                    </h3>
                    
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      {spec.shortDesc}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-white/10 text-xs">
                      {spec.keySkills.slice(0, 3).map((skill, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex gap-2">
                  <button
                    onClick={() => onOpenBooking(spec.id)}
                    className="flex-1 py-2.5 rounded-lg bg-sky-950/60 hover:bg-cyan-500 hover:text-black border border-cyan-400/40 text-cyan-300 text-xs uppercase font-mono font-medium tracking-wider transition-all text-center"
                  >
                    Book Clinic
                  </button>
                  <button
                    onClick={() => setSelectedCourse(spec)}
                    className="px-3 py-2 rounded-lg border border-white/10 hover:border-white/40 text-slate-400 hover:text-white text-xs"
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: INSTRUCTOR ACADEMY (ITC) */}
        {activeTab === 'instructor' && (
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-gradient-to-r from-sky-950/40 via-slate-900/60 to-cyan-950/30 border border-cyan-400/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono tracking-widest uppercase border border-cyan-400/40">
                  SINCE 2003 • 450+ INSTRUCTORS
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  Official SSI Instructor Training Center
                </h3>
                <p className="text-slate-300 font-light max-w-2xl text-sm leading-relaxed">
                  Freedive Dahab is internationally recognized as the benchmark academy for professional 
                  freediving educators. Direct mentorship from SSI Instructor Trainers with teaching internships.
                </p>
              </div>
              <button
                onClick={() => onOpenBooking('ssi-itc')}
                className="btn-luxury text-white shrink-0"
              >
                APPLY FOR ITC CANDIDACY
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {instructorCourses.map((inst) => (
                <div
                  key={inst.id}
                  className="glass-panel rounded-2xl p-8 border border-white/10 hover:border-cyan-400/40 space-y-6 transition-all"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-mono text-cyan-400 tracking-wider block mb-1">
                        DURATION: {inst.durationWeeksOrDays}
                      </span>
                      <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                        {inst.title}
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-serif font-bold text-cyan-300">
                        {formatPrice(inst.priceEur)}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                    {inst.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-white/10">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
                      Core Modules & Examination
                    </div>
                    {inst.modules.map((m, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex gap-3">
                    <button
                      onClick={() => onOpenBooking(inst.id)}
                      className="flex-1 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold uppercase tracking-wider transition-all"
                    >
                      Reserve Spot
                    </button>
                    <button
                      onClick={() => setSelectedCourse(inst)}
                      className="px-4 py-3 rounded-xl border border-white/15 text-slate-300 hover:text-white text-xs font-mono uppercase"
                    >
                      Syllabus
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: EQUALISATION MASTERCLASS (LINDA PAGANELLI LEGACY) */}
        {activeTab === 'equalisation' && (
          <div className="glass-panel rounded-2xl p-8 sm:p-12 border border-cyan-400/30 space-y-8">
            <div className="max-w-3xl space-y-4">
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono tracking-widest uppercase border border-cyan-400/40">
                PIONEERING METHODOLOGY
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                {equalisationClass.title}
              </h3>
              <p className="text-slate-300 font-light text-base sm:text-lg leading-relaxed">
                {equalisationClass.overview}
              </p>
              <p className="text-cyan-200/90 text-sm italic font-serif">
                &ldquo;{equalisationClass.lindaPaganelliLegacy}&rdquo;
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/10">
              {equalisationClass.formats.map((fmt, i) => (
                <div key={i} className="p-6 sm:p-8 rounded-xl bg-slate-900/60 border border-white/10 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-xs font-mono text-cyan-400 tracking-wider block">
                          FORMAT {i + 1}
                        </span>
                        <h4 className="font-serif text-2xl font-bold text-white">
                          {fmt.format}
                        </h4>
                      </div>
                      <div className="text-2xl font-serif font-bold text-cyan-300">
                        {formatPrice(fmt.priceEur)}
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 font-mono">
                      DURATION: {fmt.duration}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                      {fmt.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      {fmt.includes.map((inc, j) => (
                        <div key={j} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenBooking('spec-mouthfill')}
                    className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    Enroll in {fmt.format}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: DAILY TRAINING LINE SESSIONS PRICING */}
        {activeTab === 'training' && (
          <div className="glass-panel rounded-2xl p-8 sm:p-12 border border-white/10 space-y-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                INDEPENDENT & COACHED SESSIONS
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Daily Training Buoy Logistics
              </h3>
              <p className="text-slate-400 text-sm font-light">
                Professional line setups at Lighthouse Bay (home reef 0-45m) and the iconic Blue Hole (92m counterweight setup).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {trainingSessionsPricing.map((row, idx) => (
                <div key={idx} className="p-8 rounded-xl bg-slate-900/50 border border-white/10 space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase block">
                        DEPTH: {row.depthRange}
                      </span>
                      <h4 className="font-serif text-2xl font-bold text-white">
                        {row.location}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {row.description}
                  </p>

                  {/* Pricing Matrix */}
                  <div className="grid grid-cols-3 gap-3 p-4 rounded-lg bg-black/40 border border-white/5 text-center font-mono">
                    <div>
                      <div className="text-[10px] text-slate-500">1 SESSION</div>
                      <div className="text-base font-bold text-white mt-1">{formatPrice(row.singleSessionEur)}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500">5 SESSIONS</div>
                      <div className="text-base font-bold text-cyan-300 mt-1">{formatPrice(row.fivePackEur)}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500">10 SESSIONS</div>
                      <div className="text-base font-bold text-emerald-400 mt-1">{formatPrice(row.tenPackEur)}</div>
                    </div>
                  </div>

                  <div className="text-xs text-slate-400 font-mono flex items-center justify-between border-t border-white/10 pt-3">
                    <span>1-on-1 Private Coaching Add-on</span>
                    <span className="text-cyan-300 font-bold">+{formatPrice(row.coachingPrivateAddonEur)} / session</span>
                  </div>

                  <button
                    onClick={() => onOpenBooking('training-session')}
                    className="w-full py-3 rounded-xl border border-cyan-400/40 hover:bg-cyan-500 hover:text-black text-cyan-300 text-xs uppercase font-mono font-semibold tracking-wider transition-all"
                  >
                    Reserve Buoy Line
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* DETAIL MODAL / DRAWER */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-panel max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-cyan-400/40 p-6 sm:p-8 space-y-6 relative shadow-2xl">
            
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-6 right-6 p-2 rounded-full border border-white/10 hover:border-white/30 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                ARCHITECTURAL SPECIFICATION
              </span>
              <h3 className="font-serif text-3xl font-bold text-white">
                {selectedCourse.title}
              </h3>
            </div>

            {'overview' in selectedCourse && (
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                {selectedCourse.overview}
              </p>
            )}

            {'prerequisites' in selectedCourse && (
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 text-xs font-mono space-y-1">
                <span className="text-slate-500 block uppercase">Prerequisites:</span>
                <span className="text-slate-300">{selectedCourse.prerequisites}</span>
              </div>
            )}

            {'highlights' in selectedCourse && (
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                  Key Certification Competencies
                </span>
                {selectedCourse.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="pt-4 flex gap-4">
              <button
                onClick={() => {
                  const id = selectedCourse.id;
                  setSelectedCourse(null);
                  onOpenBooking(id);
                }}
                className="flex-1 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold uppercase tracking-wider transition-all"
              >
                Proceed to Reservation ({formatPrice(selectedCourse.priceEur)})
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
