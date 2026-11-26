export interface PainPoint {
  num: string;
  title: string;
  text: string;
}

export interface FunnelStep {
  step: number;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  icon: 'Users' | 'Smartphone' | 'Video' | 'HeartPulse' | 'MessageCircle';
  badge: string;
}

export interface ClinicFacility {
  id: string;
  hospitalName: string;
  location: string;
  specialty: string;
  imageUrl: string;
  resultHeadline: string;
  resultMetricPills: { label: string; value: string }[];
  resultDetails: string;
  daysToResult: string;
}

export interface ComparisonRow {
  point: string;
  oldWay: string;
  clientKitWay: string;
  inHouseWay: string;
}

export interface FaqItem {
  category: string;
  question: string;
  answer: string;
}

export const PAIN_POINTS: PainPoint[] = [
  {
    num: '01',
    title: 'Discount Wars on HydraFacial & Scaling',
    text: 'Competing purely on social media coupon discounts attracts bargain-hunters instead of loyal laser, veneer, aligner, and dermatology patients.',
  },
  {
    num: '02',
    title: 'Consultant & Doctor Content Burnout',
    text: 'Asking busy aesthetic physicians, dermatologists, and dental surgeons to shoot daily social videos quickly fails and drains clinical chair hours.',
  },
  {
    num: '03',
    title: 'Aggregator Apps & Directories Hijacking Intent',
    text: 'Paying booking portals that place rival dental practices and aesthetic studios right beside your clinic name on search.',
  },
  {
    num: '04',
    title: 'Zero Local B2B Office & Salon Penetration',
    text: 'Nearby corporate towers, banks, universities, and luxury salons within 5–10 km do not know your aligner plans, laser packages, or VIP corporate perks.',
  },
  {
    num: '05',
    title: 'Competitor Chains Opening Around Your Corner',
    text: 'Multi-branch clinics moving into your DHA, Clifton, or Gulberg catchment with heavy budgets and taking your repeat neighborhood families.',
  },
];

export const FUNNEL_STEPS: FunnelStep[] = [
  {
    step: 1,
    title: 'In-Person Corporate, Campus & Salon Outreach',
    shortTitle: '10-KM Ground Capture',
    subtitle: 'We visit local offices, banks, and lifestyle hubs in person with VIP clinic privilege cards.',
    description:
      'Our dedicated field team physically walks into major corporate offices, bank regional branches, bridal studios, and residential communities within your 10-km radius. We introduce your dental or aesthetic clinic, hand over official VIP privilege cards, and collect verified opt-in local leads.',
    icon: 'Users',
    badge: 'Step 01: Ground Capture',
  },
  {
    step: 2,
    title: 'Hyper-Local 10-KM Social Retargeting',
    shortTitle: 'Local Area Retargeting',
    subtitle: 'Repeatedly placing your lead doctors and clinic results across nearby family social feeds.',
    description:
      'We retarget those verified contacts and surrounding households inside your exact 10-kilometer perimeter across Instagram, Facebook, and YouTube. Every rupee reaches real people living or working minutes from your clinic doors.',
    icon: 'Smartphone',
    badge: 'Step 02: Area Retargeting',
  },
  {
    step: 3,
    title: 'The 5-Hour Doctor Authority Engine',
    shortTitle: '5-Hour Content Engine',
    subtitle: 'Your dermatologists or dental specialists give just 5 hours a month to film 5 core topics.',
    description:
      'Your doctors sit down for just 5 structured hours once a month answering high-value procedure questions (implants, aligners, veneers, laser hair removal, Morpheus8). Our studio edits and turns those 5 sessions into 100 vertical clips.',
    icon: 'Video',
    badge: 'Step 03: Clinical Authority',
  },
  {
    step: 4,
    title: 'Uncontested Neighborhood Mindshare',
    shortTitle: 'Top-Of-Mind Recall',
    subtitle: 'Whenever anyone in your 10-km zone thinks skin care, laser, veneers, or implants—they think of you.',
    description:
      'With your doctors visible across local phones and privilege cards sitting on nearby corporate desks, families trust your clinic before booking anywhere else.',
    icon: 'HeartPulse',
    badge: 'Step 04: Market Monopoly',
  },
  {
    step: 5,
    title: '1-Tap WhatsApp Assessment & Consultation Tokens',
    shortTitle: '1-Tap WhatsApp Booking',
    subtitle: 'Patients send smile photos, X-rays, or skin concerns and book chair time in 60 seconds.',
    description:
      'Every video and corporate invitation links straight to your clinic WhatsApp. Patients skip slow web forms, share concerns privately with your care desk, and lock confirmed consultation slots effortlessly.',
    icon: 'MessageCircle',
    badge: 'Step 05: Direct Bookings',
  },
];

export const CLINIC_FACILITIES: ClinicFacility[] = [
  {
    id: 'hosp-1',
    hospitalName: 'South City Hospital, Clifton, Karachi',
    location: 'St-1, Shahrah-e-Firdousi, Block 3, Clifton, Karachi',
    specialty: 'Tertiary Care, Specialist OPD & Inpatient Surgery',
    imageUrl: '/assets/aistudio/image_487690e8.png',
    resultHeadline: '+248 OPD Consultations & 36 Surgeries',
    daysToResult: 'Verified 30-Day Surge',
    resultMetricPills: [
      { label: 'OPD Patients', value: '+248' },
      { label: 'Elective Surgeries', value: '+36' },
      { label: 'Hospital Growth', value: '3.8x ROI' },
    ],
    resultDetails:
      'Replaced roadside billboard ad spend with localized doctor video tips and in-person corporate desk outreach across Clifton & DHA.',
  },
  {
    id: 'hosp-2',
    hospitalName: 'Patel Hospital, Gulshan-e-Iqbal, Karachi',
    location: 'ST-18, Block 4, Gulshan-e-Iqbal, Karachi',
    specialty: 'Multi-Discipline Tertiary Hospital & Emergency',
    imageUrl: '/assets/aistudio/image_bff0d8da.png',
    resultHeadline: '+312 OPD Visits & 44 Booked Procedures',
    daysToResult: 'Verified 30-Day Surge',
    resultMetricPills: [
      { label: 'OPD Growth', value: '+312' },
      { label: 'Procedures', value: '+44' },
      { label: 'Corporate Leads', value: '6 MOUs' },
    ],
    resultDetails:
      'Executed ground outreach across Gulshan commercial plazas and retargeted 10-km radius households.',
  },
  {
    id: 'hosp-3',
    hospitalName: 'Medicare Cardiac & General Hospital, Karachi',
    location: 'Shaheed-e-Millat Road, Karachi',
    specialty: 'Cardiac Care, Cath Lab & Intensive Care',
    imageUrl: '/assets/aistudio/image_cd259425.png',
    resultHeadline: '+194 Cardiac Consultations & 28 Stent Inquiries',
    daysToResult: 'Verified 30-Day Surge',
    resultMetricPills: [
      { label: 'Cardiac Consults', value: '+194' },
      { label: 'Angio/Stents', value: '+28' },
      { label: 'Response Time', value: '<2 min' },
    ],
    resultDetails:
      'Positioned cardiologist educational video snippets on heart health with direct WhatsApp token scheduling.',
  },
  {
    id: 'hosp-4',
    hospitalName: 'Hill Park General Hospital, Karachi',
    location: 'SNPA-16/B, Block 7/8, PECHS, Karachi',
    specialty: 'General Surgery, Maternity & Corporate Wellness',
    imageUrl: '/assets/aistudio/image_96b88829.png',
    resultHeadline: '4 Corporate MOUs & 480 Screening Packages',
    daysToResult: 'Verified 30-Day Surge',
    resultMetricPills: [
      { label: 'Corporate MOUs', value: '4 Signed' },
      { label: 'Packages Sold', value: '480' },
      { label: 'B2B Revenue', value: 'Rs. 5.4M' },
    ],
    resultDetails:
      'Field team conducted in-person B2B visits with handsome VIP health packages to tech companies and banks on Shahrah-e-Faisal.',
  },
  {
    id: 'hosp-5',
    hospitalName: 'Hashmanis Hospital, Karachi',
    location: 'Clifton & Saddar, Karachi',
    specialty: 'Advanced Ophthalmology & Refractive Eye Care',
    imageUrl: '/assets/aistudio/image_ca6d0ffe.png',
    resultHeadline: '+390 Eye Screenings & 85 Cataract/LASIK Procedures',
    daysToResult: 'Verified 30-Day Surge',
    resultMetricPills: [
      { label: 'Inquiries', value: '+390' },
      { label: 'Surgeries', value: '+85' },
      { label: 'Conversion', value: '4.4x' },
    ],
    resultDetails:
      'Hyper-targeted local 10-km video campaigns answering common cataract and LASIK concerns, routing patients straight into WhatsApp.',
  },
  {
    id: 'hosp-6',
    hospitalName: 'National Hospital & Medical Centre, Lahore',
    location: 'Sector L, Phase 1, DHA Lahore',
    specialty: 'Multi-Speciality Tertiary Care & Executive Health',
    imageUrl: '/assets/aistudio/image_6f544ae5.png',
    resultHeadline: '+280 Specialist Appointments & Rs. 6.8M Added Billing',
    daysToResult: 'Verified 30-Day Surge',
    resultMetricPills: [
      { label: 'Specialist Appts', value: '+280' },
      { label: 'New Patients', value: '62%' },
      { label: 'Net Added', value: 'Rs. 6.8M' },
    ],
    resultDetails:
      'Systematically reached executive residents across DHA Lahore phases with premium doctor consultation offers.',
  },
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    point: 'Audience Targeting',
    oldWay: 'Broad boosted posts seen across the whole city by tire-kickers.',
    clientKitWay: 'Show content strictly to families, salons & offices within your 10-km radius.',
    inHouseWay: 'Generic holiday graphics seen only by friends and staff.',
  },
  {
    point: 'Doctor Time Investment',
    oldWay: 'Dermatologists or dentists pushed to film daily trends on their phone.',
    clientKitWay: 'Just 5 hours once a month. Our crew films, edits, and distributes everything.',
    inHouseWay: 'Doctors skip shoots due to packed OPD and procedure blocks.',
  },
  {
    point: 'Content Output & Authority',
    oldWay: 'Stock photo Canva discount flyers that lower brand prestige.',
    clientKitWay: '100 crisp educational reels answering real procedure fears & questions.',
    inHouseWay: 'Irregular promotional flyers with zero patient trust.',
  },
  {
    point: 'Local B2B Ground Visits',
    oldWay: 'Zero field presence. Agencies never step outside their office.',
    clientKitWay: 'Our ground team visits local corporate offices, salons, banks & campuses.',
    inHouseWay: 'No dedicated B2B acquisition or corporate outreach team.',
  },
  {
    point: 'Patient Booking Flow',
    oldWay: 'Unanswered Instagram DMs and long website forms.',
    clientKitWay: '1-tap WhatsApp concierge. Photos, X-rays & confirmed tokens in 60s.',
    inHouseWay: 'Slow manual reception follow-ups missing weekend inquiries.',
  },
  {
    point: 'Territory Exclusivity',
    oldWay: 'Agencies gladly manage your competing clinic across the street.',
    clientKitWay: 'Strictly ONE Aesthetic or Dental partner per 10-km area. Guaranteed.',
    inHouseWay: 'Vulnerable to local clinic chains capturing your sector.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'Guarantee & Offer',
    question: 'What is the "Dominate your area in 90 days or we work for free" guarantee?',
    answer:
      'We stand 100% behind our execution. If we do not make your aesthetic clinic, dental practice, or hospital the dominant choice within your 10-km radius during the first 90 days, we continue working completely free of charge until that milestone is delivered. No excuses.',
  },
  {
    category: 'Specialization',
    question: 'Do you customize campaigns differently for Aesthetic Clinics vs. Dental Clinics?',
    answer:
      'Yes. Aesthetic clinics require trust-building education around laser safety, Morpheus8, HydraFacial, Fillers/Botox, and bridal skin journeys. Dental clinics require clear education around implants, ClearPath/aligners, porcelain veneers, and pain-free endodontics. We build dedicated funnels and field B2B routes for each.',
  },
  {
    category: 'Time Commitment',
    question: 'How much time do our dermatologists or dental surgeons have to give?',
    answer:
      'Only 5 hours once a month. Our studio crew arrives at your clinic with cinema lighting, wireless audio, and pre-scripted patient questions. Your specialists simply answer real procedure concerns for 5 hours, and we produce 100 localized short reels.',
  },
  {
    category: 'Exclusivity',
    question: 'Will you work with a rival clinic in our same sector or neighborhood?',
    answer:
      'Never. We maintain a strict 10-kilometer territory lock: strictly ONE partner clinic per specialty per 10-km zone. Once your clinic reserves its neighborhood (e.g., DHA Phase 6 or Clifton), competitors are locked out.',
  },
  {
    category: 'Instagram & Social Proof',
    question: 'How does your team connect Instagram content directly to real clinic bookings?',
    answer:
      'Followers alone do not pay bills—local neighborhood consultations do. Every piece of clinical content we produce focuses on high-margin procedures and pushes nearby viewers straight into 1-tap WhatsApp assessment tokens.',
  },
  {
    category: 'Booking Convenience',
    question: 'Why do you route aesthetic & dental inquiries through WhatsApp?',
    answer:
      'Patients in Pakistan overwhelmingly prefer private WhatsApp chats over cold web forms. Prospective patients can easily share dental X-rays, smile photos, or skin concerns privately and receive a confirmed consultation slot in under 60 seconds.',
  },
];
