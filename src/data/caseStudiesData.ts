export type ClinicNiche = 'aesthetic' | 'dental';

export interface SecondaryStat {
  label: string;
  value: string;
}

export interface ClinicCaseStudy {
  slug: string;
  niche: ClinicNiche;
  nicheLabel: string;
  name: string;
  subtitle: string;
  area: string;
  city: string;
  instagramHandle: string;
  instagramUrl: string;
  followersCount: string;
  postsCount: string;
  logoUrl: string;
  profileImageUrl: string;
  feedImageUrl: string;
  heroResultValue: string;
  heroResultLabel: string;
  timeframe: string;
  specialtyFocus: string[];
  secondaryStats: SecondaryStat[];
  challenge: string;
  executionPillars: {
    title: string;
    detail: string;
  }[];
  outcomeSummary: string;
}

const AESTHETIC_CASE_STUDIES: ClinicCaseStudy[] = [
  {
    slug: 'derma-studio',
    niche: 'aesthetic',
    nicheLabel: 'Aesthetic Clinic',
    name: 'Derma Studio',
    subtitle: 'Skin Care & Laser Aesthetics Clinic',
    area: '54-Main Boulevard, DHA Phase 6',
    city: 'Lahore & Sialkot',
    instagramHandle: '@dermastudio_official',
    instagramUrl: 'https://www.instagram.com/dermastudio_official/',
    followersCount: '15.9K followers',
    postsCount: '554 posts',
    logoUrl: '/assets/aistudio/image_5e179226.png',
    profileImageUrl: '/assets/aistudio/image_7cce408b.png',
    feedImageUrl: '/assets/aistudio/image_f958fb4b.png',
    heroResultValue: '+186',
    heroResultLabel: 'Laser & Facial Bookings',
    timeframe: 'First 90 Days',
    specialtyFocus: [
      'Soprano ICE Laser Hair Removal',
      'HydraFacial & Oxygen Glow',
      'EMSculpt & Fat Loss',
      'Hair PRP, Fillers & Botox'
    ],
    secondaryStats: [
      { label: '90-Day Consults', value: '+186' },
      { label: 'Multi-Session Plans', value: '64 Packages' },
      { label: 'WhatsApp Response', value: '<90 sec' }
    ],
    challenge:
      'High-intent clients in DHA Phase 6 were price-shopping basic HydraFacials on aggregator apps rather than committing to full-course Soprano ICE laser hair removal, EMSculpt, and medical dermatology packages.',
    executionPillars: [
      {
        title: '10-KM DHA Phase 6 & Bridal Salon Outreach',
        detail:
          'Field outreach teams partnered directly with luxury bridal salons, ladies gyms, and corporate executive hubs around DHA Phase 6 Main Boulevard with bespoke VIP skin privilege cards.'
      },
      {
        title: '5-Hour Dermatologist Authority Reels',
        detail:
          'Turned one 5-hour monthly shoot into educational video series demystifying Stamping vs. Gliding laser mechanics, NAD+ vs. Gluta IV drips, and post-treatment safety.'
      },
      {
        title: '1-Tap WhatsApp Assessment Tokens',
        detail:
          'Every hyper-local reel routed prospective patients directly into WhatsApp where pre-qualified clients shared skin concerns and booked confirmed chair slots in 60 seconds.'
      }
    ],
    outcomeSummary:
      'Transformed social visibility across DHA Phase 6 and Sialkot into predictable multi-session laser, facial, and body-sculpting revenue within 90 days.'
  },
  {
    slug: 'aesthetics-lab',
    niche: 'aesthetic',
    nicheLabel: 'Aesthetic Clinic',
    name: 'Aesthetics Lab',
    subtitle: 'Medical Aesthetics & Non-Surgical Studio',
    area: 'DHA Lahore · Islamabad',
    city: 'Lahore & Islamabad',
    instagramHandle: '@aestheticslab.pk',
    instagramUrl: 'https://www.instagram.com/aestheticslab.pk/',
    followersCount: '194K followers',
    postsCount: '908 posts',
    logoUrl: '/assets/aistudio/image_7f125091.png',
    profileImageUrl: '/assets/aistudio/image_734853bc.png',
    feedImageUrl: '/assets/aistudio/image_a2c9afe7.png',
    heroResultValue: '+340',
    heroResultLabel: 'Non-Surgical Consultations',
    timeframe: 'First 90 Days',
    specialtyFocus: [
      'Soprano Titanium Special Edition',
      'Bridal Skin Countdowns',
      'Non-Surgical Face Contouring',
      'Hair & Body Aesthetics'
    ],
    secondaryStats: [
      { label: 'Clinic Footfall', value: '+340' },
      { label: 'Bridal Cohorts', value: '48 Signed' },
      { label: 'Territory Reach', value: '10-KM Lock' }
    ],
    challenge:
      'Operating multi-city flagships in Lahore and Islamabad meant broad social ads wasted impressions far outside driving distance while bridal and titanium laser slots stayed uneven mid-week.',
    executionPillars: [
      {
        title: 'Hyper-Local Residential & Mall Retargeting',
        detail:
          'Locked campaign delivery strictly inside a 10-kilometer perimeter around each flagship branch so high-income families repeatedly saw doctor-led skin transformation education.'
      },
      {
        title: 'Corporate Female Leadership Privilege Drops',
        detail:
          'Delivered curated executive aesthetic privilege invitations to multinational offices, private banks, and lifestyle studios surrounding DHA and Islamabad sectors.'
      },
      {
        title: 'WhatsApp Consultation Concierge',
        detail:
          'Replaced slow web forms with instant WhatsApp treatment matching for Soprano Titanium Laser and non-surgical facials.'
      }
    ],
    outcomeSummary:
      'Stabilized weekday specialist calendars across Lahore and Islamabad while lifting repeat high-ticket non-surgical procedure conversion.'
  },
  {
    slug: 'sl-aesthetics',
    niche: 'aesthetic',
    nicheLabel: 'Aesthetic Clinic',
    name: 'SL Aesthetics Clinic',
    subtitle: 'By Dr. Shaista Lodhi · Multi-City Aesthetics',
    area: 'Clifton / DHA · Gulberg · F-7',
    city: 'Karachi · Lahore · Islamabad',
    instagramHandle: '@slaestheticsclinic',
    instagramUrl: 'https://www.instagram.com/slaestheticsclinic/',
    followersCount: '351K followers',
    postsCount: '4,112 posts',
    logoUrl: '/assets/aistudio/image_4fcd7843.png',
    profileImageUrl: '/assets/aistudio/image_6a710eb2.png',
    feedImageUrl: '/assets/aistudio/image_6662c59f.png',
    heroResultValue: '+415',
    heroResultLabel: 'Signature Procedure Bookings',
    timeframe: 'First 90 Days',
    specialtyFocus: [
      'Morpheus8 Skin Remodeling',
      'Salmon Glow & Glass Skin Facial',
      'Lifetime Laser Hair Removal',
      'Doctor-Supervised Derm Protocols'
    ],
    secondaryStats: [
      { label: 'Qualified Leads', value: '+415' },
      { label: 'Show-Up Rate', value: '84%' },
      { label: 'Active Cities', value: '3 Hubs' }
    ],
    challenge:
      'Strong celebrity brand recognition brought massive vanity DMs and nationwide comments, clogging reception desks with low-intent inquiries far from Karachi, Lahore, or Islamabad branches.',
    executionPillars: [
      {
        title: '10-KM Catchment Filtering Around 3 Cities',
        detail:
          'Segmented retargeting by exact branch radius so Morpheus8 and Glass Skin Facial educational clips reached nearby local households able to visit the same week.'
      },
      {
        title: 'Structured Doctor Educational Video Cadence',
        detail:
          'Batched concise clinical breakdowns explaining real downtime, medical-grade serums, and Lifetime Laser safety—pre-qualifying patients before they messaged.'
      },
      {
        title: 'Fast Token Dispatch via Branch WhatsApp',
        detail:
          'Routed verified local inquiries directly to branch coordinators with pre-filled procedure interest and preferred time slots.'
      }
    ],
    outcomeSummary:
      'Converted massive top-of-funnel social awareness into high-show-rate local consultations across Karachi, Lahore, and Islamabad.'
  },
  {
    slug: 'dr-fazeela-abbasi',
    niche: 'aesthetic',
    nicheLabel: 'Aesthetic Clinic',
    name: 'Dr. Fazeela Abbasi',
    subtitle: 'Specialist Dermatology & Laser Practice',
    area: 'F-6 / Diplomatic Enclave & Jumeirah',
    city: 'Islamabad & Dubai',
    instagramHandle: '@drfazeelaabbasi',
    instagramUrl: 'https://www.instagram.com/drfazeelaabbasi/',
    followersCount: '567K followers',
    postsCount: '1,970 posts',
    logoUrl: '/assets/aistudio/image_78eedce4.png',
    profileImageUrl: '/assets/aistudio/image_65685ece.png',
    feedImageUrl: '/assets/aistudio/image_8137c7f5.png',
    heroResultValue: '+290',
    heroResultLabel: 'Specialist Derm Assessments',
    timeframe: 'First 90 Days',
    specialtyFocus: [
      'Ablative Laser Resurfacing',
      'Deep Acne Scar & Melasma Care',
      'Stem Cell & Sculptra Biostimulators',
      '19+ Years Medical Dermatology'
    ],
    secondaryStats: [
      { label: '90-Day Consults', value: '+290' },
      { label: 'High-Ticket Plans', value: '72% Share' },
      { label: 'Doctor Shoot', value: '5 Hrs/Mo' }
    ],
    challenge:
      'Complex dermatological procedures such as ablative laser resurfacing, Sculptra, and stem-cell scar protocols require deep medical trust—patients hesitated when comparing against uncertified beauty parlors.',
    executionPillars: [
      {
        title: 'Diplomatic & Executive Sector Penetration',
        detail:
          'Positioned DFA medical credentials across nearby executive corridors, embassies, and elite clubs within a 10-kilometer zone.'
      },
      {
        title: 'Specialist Case-Breakdown Shorts',
        detail:
          'Captured concise 5-hour monthly sessions focused strictly on clinical science, medical safety, and realistic multi-stage skin recovery timelines.'
      },
      {
        title: 'Direct Concierge Case Review',
        detail:
          'Allowed qualified patients to submit pre-consult history over WhatsApp, eliminating reception bottlenecks.'
      }
    ],
    outcomeSummary:
      'Reinforced specialist medical differentiation against commercial salons and scaled high-ticket dermatology bookings across Islamabad.'
  }
];

const DENTAL_CASE_STUDIES: ClinicCaseStudy[] = [
  {
    slug: 'dr-jamals-dental-care',
    niche: 'dental',
    nicheLabel: 'Dental Clinic',
    name: "Dr. Jamal's Dental Care",
    subtitle: 'Implantology & Multi-Branch Dentistry',
    area: 'Clifton · Saddar · Gulistan-e-Johar',
    city: 'Karachi',
    instagramHandle: '@drjamalsdentalcare',
    instagramUrl: 'https://www.instagram.com/drjamalsdentalcare/',
    followersCount: '17.3K followers',
    postsCount: '1,286 posts',
    logoUrl: '/assets/aistudio/image_097b3e8c.png',
    profileImageUrl: '/assets/aistudio/image_44677ded.png',
    feedImageUrl: '/assets/aistudio/image_f0dc792e.png',
    heroResultValue: '+264',
    heroResultLabel: 'Implant & Aligner Consults',
    timeframe: 'First 90 Days',
    specialtyFocus: [
      'Single & Full-Arch Dental Implants',
      'ClearPath Aligners & Braces',
      'Cosmetic Smile Rehabilitation',
      'Same-Day Microscopic Endodontics'
    ],
    secondaryStats: [
      { label: 'OPD Chair Visits', value: '+264' },
      { label: 'Implant / Ortho Cases', value: '+52' },
      { label: 'Karachi Branches', value: '3 Zones' }
    ],
    challenge:
      'Prospective patients needing implants and orthodontic aligners delayed care due to fear of pain and unclear pricing across three busy Karachi locations.',
    executionPillars: [
      {
        title: 'Corporate & Bank Branch Dental Checkup Drives',
        detail:
          'Visited banks, schools, and corporate offices around Clifton, Saddar, and Gulistan-e-Johar to distribute VIP dental family privilege cards and schedule executive screenings.'
      },
      {
        title: 'Comfort-First Implant & Braces Reels',
        detail:
          'Converted 5 hours/month of specialist chairside explanations into 100 approachable reels addressing pain-free root canals, aligner timelines, and real patient reviews.'
      },
      {
        title: 'Instant WhatsApp X-Ray & Appointment Desk',
        detail:
          'Patients sent existing dental X-rays directly on WhatsApp and walked into pre-assigned branch slots within 24 hours.'
      }
    ],
    outcomeSummary:
      'Filled implant and aligner consultation blocks across Clifton, Saddar, and Gulistan-e-Johar while growing multi-member family registrations.'
  },
  {
    slug: 'dental-aesthetics',
    niche: 'dental',
    nicheLabel: 'Dental Clinic',
    name: 'Dental Aesthetics',
    subtitle: 'Cosmetic Veneers, Implants & Orthodontics',
    area: 'Fairways Commercial, DHA Raya Phase 6',
    city: 'Lahore',
    instagramHandle: '@dentalaestheticspk',
    instagramUrl: 'https://www.instagram.com/dentalaestheticspk/',
    followersCount: '66.7K followers',
    postsCount: '2,595 posts',
    logoUrl: '/assets/aistudio/image_16b7667a.png',
    profileImageUrl: '/assets/aistudio/image_83487888.png',
    feedImageUrl: '/assets/aistudio/image_3987e0b7.png',
    heroResultValue: '+218',
    heroResultLabel: 'Veneer & Smile Makeover Consults',
    timeframe: 'First 90 Days',
    specialtyFocus: [
      'Porcelain Veneers & Smile Design',
      'Dental Implant Surgeries',
      'Digital Orthodontics',
      'DHA Raya Luxury Dental Experience'
    ],
    secondaryStats: [
      { label: 'Smile Assessments', value: '+218' },
      { label: 'High-Ticket Cases', value: '+41' },
      { label: 'Show Rate', value: '86%' }
    ],
    challenge:
      'Families living inside DHA Phase 6 and Raya were traveling to older clinics or postponing veneer and implant decisions because no local practice commanded unmistakable authority in their daily feed.',
    executionPillars: [
      {
        title: 'DHA Phase 6 & Golf Club Catchment Lock',
        detail:
          'Engineered 10-km hyper-local outreach across DHA Phase 6 residential sectors, corporate offices, and Raya retail hubs.'
      },
      {
        title: '100 Smile Makeover & Implant Case Clips',
        detail:
          'Documented real porcelain veneer finishes, digital scan workflows, and painless implant recovery inside a 5-hour monthly production block.'
      },
      {
        title: 'Direct WhatsApp Digital Smile Preview',
        detail:
          'Guided interested cosmetic patients directly to WhatsApp to submit smile photos and lock in their DHA Raya assessment.'
      }
    ],
    outcomeSummary:
      'Established dominant share-of-mind across DHA Phase 6 Lahore for porcelain veneers, cosmetic rehabilitations, and surgical implants.'
  },
  {
    slug: 'dental-consultants',
    niche: 'dental',
    nicheLabel: 'Dental Clinic',
    name: 'Dental Consultants',
    subtitle: 'Specialist Consultant-Led Dentistry',
    area: 'Gulberg & DHA Catchment',
    city: 'Lahore',
    instagramHandle: '@dentalconsultantspk',
    instagramUrl: 'https://www.instagram.com/dentalconsultantspk/',
    followersCount: '4,715 followers',
    postsCount: '389 posts',
    logoUrl: '/assets/aistudio/image_e7cdef48.png',
    profileImageUrl: '/assets/aistudio/image_2e18e858.png',
    feedImageUrl: '/assets/aistudio/image_30f1f1f7.png',
    heroResultValue: '+154',
    heroResultLabel: 'Orthodontic & Rehab Cases',
    timeframe: 'First 90 Days',
    specialtyFocus: [
      'Self-Ligating Damon Brackets',
      'Custom Clear Aligners',
      'Microscopic Root Canals',
      'Pediatric & Family Dentistry'
    ],
    secondaryStats: [
      { label: 'New Patient Consults', value: '+154' },
      { label: 'Ortho Starts', value: '+34' },
      { label: 'Area Radius', value: '10-KM Exclusive' }
    ],
    challenge:
      'Despite housing multi-disciplinary MDS specialists, smaller social follower count caused local families to default to flashier neighborhood clinics with inferior clinical credentials.',
    executionPillars: [
      {
        title: 'Schools, Universities & Tech Park B2B Drops',
        detail:
          'In-person visits to nearby campuses and offices introduced the consultant team with official family dental screening vouchers.'
      },
      {
        title: 'Specialist-Led Educational Storytelling',
        detail:
          'Showcased real bracket bonding, custom aligner progress, and microscope-guided endodontics to build rapid clinical authority regardless of follower size.'
      },
      {
        title: '60-Second WhatsApp Token Desk',
        detail:
          'Streamlined orthodontic evaluation booking straight inside WhatsApp without waiting room friction.'
      }
    ],
    outcomeSummary:
      'Proved that focused 10-km authority and consultant credibility outperform vanity follower metrics in generating real orthodontic starts.'
  },
  {
    slug: 'dental-wellness-dr-alina',
    niche: 'dental',
    nicheLabel: 'Dental Clinic',
    name: 'Dental Wellness by Dr. Alina',
    subtitle: 'Preventive, Restorative & Cosmetic Care',
    area: 'Central Sectors · F-6 / F-7 / G-6',
    city: 'Islamabad',
    instagramHandle: '@dentalwellnessbydralina',
    instagramUrl: 'https://www.instagram.com/dentalwellnessbydralina/',
    followersCount: '1,290 followers',
    postsCount: '493 posts',
    logoUrl: '/assets/aistudio/image_8831a1ae.png',
    profileImageUrl: '/assets/aistudio/image_a81f95ce.png',
    feedImageUrl: '/assets/aistudio/image_9705c9f6.png',
    heroResultValue: '+172',
    heroResultLabel: 'Family & Whitening Visits',
    timeframe: 'First 90 Days',
    specialtyFocus: [
      'Dental Implants & Crown Bridges',
      'Orthodontic Correction',
      'Teeth Whitening & Scaling',
      '500+ Verified Happy Smiles'
    ],
    secondaryStats: [
      { label: 'OPD Appointments', value: '+172' },
      { label: 'Recall Families', value: '88 Households' },
      { label: 'Doctor Recording', value: '5 Hrs/Mo' }
    ],
    challenge:
      'A boutique female-led practice in Islamabad needed consistent local patient acquisition without turning doctors into full-time influencers or competing on heavy discount coupons.',
    executionPillars: [
      {
        title: '10-KM Islamabad Neighborhood Ground Game',
        detail:
          'Field representatives engaged nearby corporate offices, schools, and female community circles with family preventive wellness cards.'
      },
      {
        title: 'Dignified Preventive & Implant Reels',
        detail:
          'Produced warm, ethical clinical education clips showing Dr. Alina answering real patient questions on painless whitening, implants, and kids’ dental habits.'
      },
      {
        title: 'Personal WhatsApp Consultation Booking',
        detail:
          'Allowed hesitant patients to message the care desk directly, share dental photos, and book relaxed family appointments.'
      }
    ],
    outcomeSummary:
      'Built a reliable stream of local Islamabad families and corporate employees booking preventive, orthodontic, and implant treatments every month.'
  }
];

export const CLINIC_CASE_STUDIES: ClinicCaseStudy[] = [
  ...AESTHETIC_CASE_STUDIES,
  ...DENTAL_CASE_STUDIES
];

/**
 * Strictly alternating Aesthetic -> Dental sequence for the Homepage showcase:
 * 1. Derma Studio (aesthetic)
 * 2. Dr. Jamal's Dental Care (dental)
 * 3. Aesthetics Lab (aesthetic)
 * 4. Dental Aesthetics (dental)
 * 5. SL Aesthetics Clinic (aesthetic)
 * 6. Dental Consultants (dental)
 * 7. Dr. Fazeela Abbasi (aesthetic)
 * 8. Dental Wellness by Dr. Alina (dental)
 */
export function getAlternatingCaseStudies(): ClinicCaseStudy[] {
  const result: ClinicCaseStudy[] = [];
  const maxLen = Math.max(AESTHETIC_CASE_STUDIES.length, DENTAL_CASE_STUDIES.length);
  for (let i = 0; i < maxLen; i++) {
    if (AESTHETIC_CASE_STUDIES[i]) {
      result.push(AESTHETIC_CASE_STUDIES[i]);
    }
    if (DENTAL_CASE_STUDIES[i]) {
      result.push(DENTAL_CASE_STUDIES[i]);
    }
  }
  return result;
}

export function getCaseStudiesByNiche(niche: ClinicNiche): ClinicCaseStudy[] {
  return niche === 'aesthetic' ? AESTHETIC_CASE_STUDIES : DENTAL_CASE_STUDIES;
}

export function getCaseStudyBySlug(slug: string): ClinicCaseStudy | undefined {
  return CLINIC_CASE_STUDIES.find((c) => c.slug === slug);
}

export function getSiblingCaseStudies(slug: string, limit = 3): ClinicCaseStudy[] {
  const current = getCaseStudyBySlug(slug);
  if (!current) return CLINIC_CASE_STUDIES.slice(0, limit);
  const sameNiche = CLINIC_CASE_STUDIES.filter(
    (c) => c.slug !== slug && c.niche === current.niche
  );
  const otherNiche = CLINIC_CASE_STUDIES.filter(
    (c) => c.slug !== slug && c.niche !== current.niche
  );
  return [...sameNiche, ...otherNiche].slice(0, limit);
}
