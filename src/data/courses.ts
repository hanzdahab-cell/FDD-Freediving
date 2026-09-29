import { Course, TrainingPricingRow, SpecialtyCourse, InstructorCourse, EqualisationClass } from '../types';

export const ssiCourses: Course[] = [
  {
    id: "ssi-level-1",
    slug: "ssi-freediver-level-1",
    title: "SSI Freediver (Level 1)",
    subtitle: "Your initiation into depth and diaphragmatic calm",
    level: "Beginner",
    tier: 1,
    certification: "SSI Freediver International License",
    durationDays: 3,
    priceEur: 320,
    maxDepthMeters: 20,
    prerequisites: "Comfortable swimming 200m non-stop, minimum age 12, standard medical clearance.",
    overview: "Step into the silent world directly from our private beachfront on Lighthouse Bay. This globally accredited course equips you with proper breathe-up mechanics, frenzel equalisation fundamentals, finning hydrodynamic efficiency, and buddy safety protocols down to 20 meters.",
    highlights: [
      "Direct shore entry into Lighthouse sheltered bay",
      "Diaphragmatic breathing and relaxation techniques",
      "Frenzel equalisation diagnostics on land and water",
      "Dynamic apnea and rescue safety protocols",
      "Max student-to-instructor ratio of 3:1"
    ],
    included: [
      "All high-grade freediving equipment (wetsuit, bi-fins, low-volume mask, snorkel, weight harness)",
      "Digital SSI app study materials & lifetime digital certification",
      "Video debriefing of finning technique",
      "Underwater digital photos of your descent"
    ],
    scheduleSummary: "3 Days: Morning breathing & theory, midday open-water sessions, afternoon debrief and stretching.",
    image: {
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=85",
      alt: "Freediver descending along vertical line in crystal turquoise waters of Dahab Lighthouse Bay"
    }
  },
  {
    id: "ssi-level-2",
    slug: "ssi-advanced-freediver-level-2",
    title: "SSI Advanced Freediver (Level 2)",
    subtitle: "Mastering freefall, thoracic flexibility, and deep calm",
    level: "Intermediate",
    tier: 2,
    certification: "SSI Advanced Freediver",
    durationDays: 3,
    priceEur: 360,
    maxDepthMeters: 30,
    prerequisites: "SSI Level 1 or equivalent certification (AIDA 2 / PADI Freediver), comfortable at 16-20m.",
    overview: "Unlock the sensation of negative buoyancy and pure freefall. At 15+ meters, gravity pulls you gracefully into the abyss with zero fin movement. We introduce advanced Frenzel equalisation refinement, thoracic stretching, FRC (Functional Residual Capacity) dives, and deep safety rescues.",
    highlights: [
      "Experience weightless freefall at 15m to 30m depth",
      "FRC (half-lung) dive mechanics to safely simulate greater depth",
      "Deep buddy rescue from 15 meters and surface management",
      "Thoracic cavity and diaphragm stretching workshops",
      "Depth sessions conducted at Lighthouse Bay and the iconic Blue Hole"
    ],
    included: [
      "All depth equipment and specialized long carbon fins trial",
      "SSI digital materials and certification fee",
      "High-definition video analysis with technical critique",
      "Blue Hole transfer and marine park permit fees included"
    ],
    scheduleSummary: "3 Days: Specialized lung stretching, deep line diving sessions, advanced equalisation analysis.",
    image: {
      url: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=1600&q=85",
      alt: "Freediver enjoying peaceful freefall posture deep underwater with light rays beaming through"
    }
  },
  {
    id: "ssi-level-3",
    slug: "ssi-performance-freediver-level-3",
    title: "SSI Performance Freediver (Level 3)",
    subtitle: "The threshold of elite depth: Mouthfill and 40 meters",
    level: "Advanced",
    tier: 2,
    certification: "SSI Performance Freediver (Master Diver prerequisite)",
    durationDays: 4,
    priceEur: 420,
    maxDepthMeters: 40,
    prerequisites: "SSI Advanced Freediver or equivalent, 30m logged depth, React Right (or valid First Aid/CPR).",
    overview: "Entering the realm of deep freediving requires advanced physiological adaptation and mental mastery. Here you learn the legendary Mouthfill equalisation technique, exhale diving, and deep safety management, preparing you to dive confidently to 40 meters in the legendary waters of the Blue Hole.",
    highlights: [
      "Comprehensive Mouthfill equalisation workshop & land dry-drills",
      "Exhale diving (RV / Empty lung) under strict instructor supervision",
      "Mental decompression, mental triggers, and deep flow state",
      "Deep rescue protocols from 20m and deep unconscious diver recovery",
      "Training on dual-counterweight systems at the Blue Hole"
    ],
    included: [
      "All depth line logistics, counterweight system, private safety diver",
      "Mouthfill Otovent diagnostic tool",
      "SSI digital master materials and international certification",
      "Full video debrief and technique breakdowns"
    ],
    scheduleSummary: "4 Days: Intensive theory, dry mouthfill masterclasses, daily deep morning sessions at the Blue Hole.",
    image: {
      url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1600&q=85",
      alt: "Freediving training buoy at Dahab Blue Hole with deep blue vertical drop"
    }
  }
];

export const trainingSessionsPricing: TrainingPricingRow[] = [
  {
    location: "Lighthouse Bay (Home Reef)",
    description: "Steps from our dive center terrace. Protected bay with calm waters, 0–45m depth right off the shore, no boat needed.",
    depthRange: "0m – 45m",
    singleSessionEur: 35,
    fivePackEur: 155,
    tenPackEur: 280,
    coachingPrivateAddonEur: 25,
    includesTransport: true,
    includesBuoyAndWeights: true,
    notes: "Ideal for daily consistency, equalisation fine-tuning, and relaxed technique work."
  },
  {
    location: "The Blue Hole (Depth Mecca)",
    description: "The world's freediving sanctuary. 92m vertical drop directly off the reef wall, zero current, 40m+ visibility, equipped with professional counterweights.",
    depthRange: "0m – 92m+",
    singleSessionEur: 50,
    fivePackEur: 220,
    tenPackEur: 390,
    coachingPrivateAddonEur: 30,
    includesTransport: true,
    includesBuoyAndWeights: true,
    notes: "Includes air-conditioned 4x4 return transfer from our center and National Park entrance coordination."
  }
];

export const specialtyCourses: SpecialtyCourse[] = [
  {
    id: "spec-photo",
    slug: "underwater-photography",
    title: "Underwater Photography for Freedivers",
    shortDesc: "Master natural light, breath-hold stability, diver positioning, and camera settings in Dahab's legendary water clarity.",
    durationDays: 2,
    priceEur: 220,
    prerequisites: "SSI Level 1 or equivalent freediving certification.",
    keySkills: [
      "Buoyancy and zero-movement breath-hold framing",
      "Utilizing Dahab's caustic light rays and water refraction",
      "Directing your dive buddy/model underwater",
      "Lightroom color correction for blue-spectrum water"
    ],
    fullDesc: "Freediving photography is an art of supreme relaxation. Learn how to hover motionlessly beside the reef or beneath descending divers, capturing breathtaking natural light rays without bubbles scaring marine life.",
    image: {
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
      alt: "Underwater photographer framing sunlight beams through deep clear water"
    },
    featured: true
  },
  {
    id: "spec-monofin",
    slug: "monofin-technique",
    title: "Monofin Technique & Dolphin Kick",
    shortDesc: "Transform into pure aquatic propulsion with the fluid dolphin wave originating from your core.",
    durationDays: 2,
    priceEur: 210,
    prerequisites: "SSI Level 1 or equivalent.",
    keySkills: ["Core wave movement", "Ankle flexibility drills", "Glide phases", "Video biomechanics analysis"],
    fullDesc: "The monofin is the ultimate freediving tool. Under the guidance of our biomechanics specialists, learn how to generate immense power with minimal oxygen consumption by driving the kick from your chest and hips rather than knees.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      alt: "Freediver gliding effortlessly with carbon monofin in turquoise sea"
    }
  },
  {
    id: "spec-mouthfill",
    slug: "mouthfill-mastery",
    title: "Mouthfill Equalisation Clinic",
    shortDesc: "Unlock deep dives beyond your residual volume without thoracic stress.",
    durationDays: 2,
    priceEur: 240,
    prerequisites: "SSI Level 2 or 30m depth experience.",
    keySkills: ["Soft palate isolation", "Mouthfill charge at 15–20m", "Cheek & tongue piston dynamics", "Dry pressure gauge drills"],
    fullDesc: "The single biggest roadblock to diving past 30 meters is equalisation. This clinic breaks down the Mouthfill technique using pressure sensors, Otovent balloons, and specialized in-water drills coached by our deep specialists.",
    image: {
      url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80",
      alt: "Freediving coach instructing equalisation mechanics on land and water"
    },
    featured: true
  },
  {
    id: "spec-variable-weight",
    slug: "variable-weight-sled",
    title: "Variable Weight (VWT) Sled Diving",
    shortDesc: "Experience effortless deep descent via weighted sled and fin back to the surface on your own power.",
    durationDays: 2,
    priceEur: 230,
    prerequisites: "SSI Level 2 with verified 30m+ depth comfort.",
    keySkills: ["Sled braking control", "Rapid equalisation timing", "Deep turnaround mechanics", "Safety tether rigging"],
    fullDesc: "Variable weight allows you to descend with zero muscular exertion, dedicating 100% of your mental focus to equalisation and deep relaxation, before ascending under your own serene fin strokes.",
    image: {
      url: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=1200&q=80",
      alt: "Deep blue vertical line descending into the Dahab Blue Hole"
    }
  },
  {
    id: "spec-no-fins",
    slug: "no-fins-cnf",
    title: "Constant Weight No Fins (CNF)",
    shortDesc: "The purest, most challenging discipline: descend and ascend purely with your bare hands and breaststroke kick.",
    durationDays: 2,
    priceEur: 210,
    prerequisites: "SSI Level 1 or equivalent.",
    keySkills: ["Breaststroke coordination", "Glide deceleration physics", "Buoyancy trimming without fins", "Orientation along the line"],
    fullDesc: "CNF strips away all artificial propulsion. Discover how subtle adjustments in head tilt, arm sweep timing, and hip drive yield hypnotic, whisper-quiet deep descents.",
    image: {
      url: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=1200&q=80",
      alt: "Freediver swimming down line without fins using arm pull"
    }
  },
  {
    id: "spec-training-techniques",
    slug: "training-techniques",
    title: "Training Techniques & Dry-land Conditioning",
    shortDesc: "Build your customized CO2/O2 table progression, gym lung conditioning, and flexibility routines.",
    durationDays: 2,
    priceEur: 190,
    prerequisites: "SSI Level 1.",
    keySkills: ["CO2 & O2 table architecture", "Dry lung volume stretches", "Heart rate variability optimization", "Diet & hydration protocols"],
    fullDesc: "How champion freedivers stay conditioned even when away from the ocean. Learn how to program safe dry apnea training, neuro-respiratory adaptations, and recovery routines.",
    image: {
      url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
      alt: "Freediver practicing breathwork and stretching on Dahab coastal terrace"
    }
  },
  {
    id: "spec-react-right",
    slug: "react-right-first-aid",
    title: "SSI React Right (First Aid, CPR & O2)",
    shortDesc: "Comprehensive emergency response, AED operation, and emergency oxygen administration tailored to dive emergencies.",
    durationDays: 1,
    priceEur: 140,
    prerequisites: "None (Open to all divers and non-divers).",
    keySkills: ["Primary assessment & CPR", "Automated External Defibrillator (AED)", "Oxygen administration for barotrauma / blackout", "Dahab decompression chamber coordination"],
    fullDesc: "Essential medical knowledge for any serious diver or prospective instructor. Covers immediate hypoxic blackout recovery, neuro-evaluations, and coordination with local medical resources.",
    image: {
      url: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1200&q=80",
      alt: "Medical emergency responder first aid training gear and oxygen system"
    }
  }
];

export const instructorCourses: InstructorCourse[] = [
  {
    id: "ssi-itc",
    slug: "ssi-freediving-instructor-itc",
    title: "SSI Freediving Instructor Course (ITC)",
    durationWeeksOrDays: "10 Days",
    priceEur: 1250,
    prerequisites: "SSI Level 3 (or equivalent 40m+ diver), React Right within 24 months, 100+ logged sessions, min age 18.",
    description: "As an official SSI Instructor Training Center since 2003, Freedive Dahab has trained over 450 instructors teaching worldwide. Our ITC teaches pedagogical psychology, in-water candidate coaching, risk prevention, and business mechanics.",
    modules: [
      "In-depth academic lecturing & student learning styles",
      "In-water demonstration quality technique",
      "Dynamic rescue from 25 meters + 50m surface tow",
      "Stamina swim tests: 400m in under 8:30 min",
      "Commercial center operation and digital SSI ecosystem"
    ],
    internshipOption: true,
    image: {
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
      alt: "SSI Freediving Instructor Trainer briefing candidates on Dahab dive terrace"
    }
  },
  {
    id: "ssi-advanced-instructor",
    slug: "ssi-advanced-instructor",
    title: "SSI Advanced Freediving Instructor",
    durationWeeksOrDays: "4 Days",
    priceEur: 650,
    prerequisites: "SSI Freediving Instructor with at least 30 certified Level 1 students, or equivalent experience.",
    description: "Qualify to teach SSI Level 2 (Advanced Freediver) to 30 meters depth, Specialty courses, and lead deep training line setups.",
    modules: [
      "Advanced equalization diagnostics coaching",
      "Safe management of deep freefall training",
      "FRC coaching methodologies",
      "Rescue from 30m depth"
    ],
    internshipOption: false,
    image: {
      url: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=1200&q=80",
      alt: "Advanced freediving instructors evaluating candidate depth line technique"
    }
  },
  {
    id: "zero-to-hero-itc",
    slug: "zero-to-hero-instructor",
    title: "Zero-to-Hero Instructor Residency",
    durationWeeksOrDays: "3 to 6 Months",
    priceEur: 3100,
    prerequisites: "Passion for the ocean, swimming ability, commitment to full-time immersion in Dahab.",
    description: "From absolute beginner to internationally certified SSI Freediving Instructor living the dream lifestyle. Includes all certifications (Level 1, 2, 3, React Right, Specialties, ITC), unlimited daily line training, and direct mentorship from master instructors.",
    modules: [
      "All levels from Level 1 up to SSI Performance Freediver",
      "React Right First Aid & O2 Provider",
      "3 Specialty Instructor ratings",
      "Assistant teaching internship with real students",
      "Full SSI Instructor Examination (IE)"
    ],
    internshipOption: true,
    image: {
      url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80",
      alt: "Freediving instructor and students smiling after successful certification in Dahab"
    }
  },
  {
    id: "agency-crossover",
    slug: "instructor-crossover",
    title: "SSI Instructor Crossover (AIDA / PADI / Molchanovs)",
    durationWeeksOrDays: "4 Days",
    priceEur: 550,
    prerequisites: "Active status Instructor with recognized agency (AIDA, PADI, Molchanovs, Apnea Total).",
    description: "Transition smoothly into the booming SSI global ecosystem. Learn the SSI digital teaching philosophy, digital standards, and gain immediate access to global job boards.",
    modules: [
      "SSI digital training standards conversion",
      "Systematic student evaluation guidelines",
      "SSI Total Teaching System application",
      "Practical water evaluation"
    ],
    internshipOption: false,
    image: {
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
      alt: "International freediving instructors participating in crossover workshop"
    }
  }
];

export const equalisationClass: EqualisationClass = {
  title: "Equalisation Masterclass: Frenzel & Mouthfill Architecture",
  leadCoach: "Master Equalisation Specialists inspired by Linda Paganelli",
  formats: [
    {
      format: "Online Clinic",
      duration: "3 x 90-min Live 1-on-1 Zoom sessions + Custom Video Analysis",
      priceEur: 140,
      description: "Diagnose your soft palate, tongue locks, and glottis control from anywhere in the world before you travel to Dahab.",
      includes: [
        "Otovent pressure diagnostics kit mailed or digital alternative",
        "HD endoscopic anatomical video breakdown",
        "Personalized daily 15-minute dry-drill routine",
        "Direct WhatsApp video check-ins for 30 days"
      ]
    },
    {
      format: "In-Person Dahab Masterclass",
      duration: "2 Days intensive land & open-water coaching",
      priceEur: 220,
      description: "Hands-on camera diagnostics, pressure gauges, and dedicated ocean dives with instantaneous feedback at Lighthouse Bay.",
      includes: [
        "Land Otovent pressure gauge measurement",
        "2 Depth line sessions with in-water audio/visual feedback",
        "Reverse-packing and residual volume exercises",
        "Overcoming mental blocks and head-down failure points"
      ]
    }
  ],
  overview: "Equalisation is 90% of depth progression. Rather than forcing your ears or guessing why you get stuck at 12m or 25m, we deconstruct the exact mechanics of the glottis, soft palate, tongue piston, and Eustachian tubes.",
  lindaPaganelliLegacy: "Freedive Dahab's coaching methodology draws upon the pioneering equalisation research and pedagogical mastery introduced to Dahab by Italian record holder Linda Paganelli, transforming hundreds of previously 'stuck' divers into relaxed 40m+ freedivers."
};
