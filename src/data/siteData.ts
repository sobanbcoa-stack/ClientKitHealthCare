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
    title: 'Wasted Billboard Budgets',
    text: 'Spending big money on roadside billboards that drivers pass in 2 seconds without remembering your clinic or specialties.',
  },
  {
    num: '02',
    title: 'Doctor Burnout on Social Media',
    text: 'Asking busy surgeons and consultants to record daily social media posts—it quickly fails and wastes precious medical hours.',
  },
  {
    num: '03',
    title: 'Aggregator Booking Apps Hijacking Patients',
    text: 'Paying hefty fees to medical directory apps that display your direct competitor clinics and competing doctors right next to your profile.',
  },
  {
    num: '04',
    title: 'Zero Local B2B Corporate Penetration',
    text: 'Nearby corporate towers, banks, and schools within 5–10 km do not know your diagnostic packages, emergency bay, or specialist doctors.',
  },
  {
    num: '05',
    title: 'Competitor Chains Stealing Your Territory',
    text: 'Large national hospital chains opening satellite clinics in your neighborhood and taking away your loyal patient base.',
  },
];

export const FUNNEL_STEPS: FunnelStep[] = [
  {
    step: 1,
    title: 'In-Person Corporate & Community Outreach',
    shortTitle: 'B2B Ground Outreach',
    subtitle: 'We visit local offices in person with VIP cards and irresistible health checkup offers.',
    description:
      'Our dedicated field team physically walks into major corporate offices, bank regional branches, and residential communities within your 10-km radius. We introduce your medical facility, hand over official health privilege cards, and collect verified, opt-in patient and corporate HR contacts one by one.',
    icon: 'Users',
    badge: 'Step 01: Ground Capture',
  },
  {
    step: 2,
    title: 'Hyper-Local Social Retargeting',
    shortTitle: 'Local Area Retargeting',
    subtitle: 'Repeatedly showing your doctors and facilities across all their family social feeds.',
    description:
      'We retarget the verified contacts and everyone living or working in your exact 10-kilometer radius across Facebook, Instagram, and YouTube. Instead of random national ads, every impression is seen by a real nearby family that can actually walk into your hospital.',
    icon: 'Smartphone',
    badge: 'Step 02: Area Retargeting',
  },
  {
    step: 3,
    title: 'The 5-Hour Doctor Trust Engine',
    shortTitle: '5-Hour Content Engine',
    subtitle: 'Your doctors give just 5 hours a month to record 5 core pieces of medical advice.',
    description:
      'To build deep clinical authority, your specialists spend only 5 hours once a month recording 5 core educational pieces. Our studio team edits, formats, and republishes those 5 pieces into 100 short video reels, patient FAQ clips, and symptom guides targeted to local phones.',
    icon: 'Video',
    badge: 'Step 03: Clinical Authority',
  },
  {
    step: 4,
    title: 'Uncontested Local Mindshare',
    shortTitle: 'Top-Of-Mind Recall',
    subtitle: 'Whenever anyone in your 10-km radius needs care, your clinic is their default choice.',
    description:
      'Because your hospital is visible everywhere on their phones and in their offices, families recognize your consultants before they ever get sick. When an emergency or elective procedure arises, your hospital is their first and only instinct.',
    icon: 'HeartPulse',
    badge: 'Step 04: Market Monopoly',
  },
  {
    step: 5,
    title: 'Direct WhatsApp Appointment & Surgery Tokens',
    shortTitle: '1-Tap WhatsApp Conversion',
    subtitle: 'No complex web forms. Fast appointment tokens issued directly on WhatsApp in 60 seconds.',
    description:
      'Every video, corporate card, and local campaign routes straight into your hospital WhatsApp. Patients easily share previous lab reports, ask questions directly to your care desk, and lock in confirmed consultation tokens in under a minute.',
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
    daysToResult: 'In the first 30 days',
    resultMetricPills: [
      { label: 'OPD Patients', value: '+248' },
      { label: 'Elective Surgeries', value: '+36' },
      { label: '30-Day Growth', value: '3.8x ROI' },
    ],
    resultDetails:
      'Replaced roadside billboard ad spend with localized doctor video tips and in-person corporate desk outreach across Clifton & DHA. Filled OPD slots and expanded surgical bookings within 30 days.',
  },
  {
    id: 'hosp-2',
    hospitalName: 'Patel Hospital, Gulshan-e-Iqbal, Karachi',
    location: 'ST-18, Block 4, Gulshan-e-Iqbal, Karachi',
    specialty: 'Multi-Discipline Tertiary Hospital & Emergency',
    imageUrl: '/assets/aistudio/image_bff0d8da.png',
    resultHeadline: '+312 OPD Visits & 44 Booked Procedures',
    daysToResult: 'In the first 30 days',
    resultMetricPills: [
      { label: 'OPD Growth', value: '+312' },
      { label: 'Procedures', value: '+44' },
      { label: 'Corporate Leads', value: '6 MOUs' },
    ],
    resultDetails:
      'Executed ground outreach across Gulshan commercial plazas and retargeted 10-km radius households. Corporate screening camps drove immediate patient volume and filled morning OPD clinics.',
  },
  {
    id: 'hosp-3',
    hospitalName: 'Medicare Cardiac & General Hospital, Karachi',
    location: 'Shaheed-e-Millat Road, Karachi',
    specialty: 'Cardiac Care, Cath Lab & Intensive Care',
    imageUrl: '/assets/aistudio/image_cd259425.png',
    resultHeadline: '+194 Cardiac Consultations & 28 Stent Inquiries',
    daysToResult: 'In the first 30 days',
    resultMetricPills: [
      { label: 'Cardiac Consults', value: '+194' },
      { label: 'Angio/Stents', value: '+28' },
      { label: 'Response Time', value: '<2 min' },
    ],
    resultDetails:
      'Positioned cardiologist educational video snippets on heart health. Direct WhatsApp token scheduling filled morning and evening clinics without chaotic lobby wait times.',
  },
  {
    id: 'hosp-4',
    hospitalName: 'Hill Park General Hospital, Karachi',
    location: 'SNPA-16/B, Block 7/8, PECHS, Karachi',
    specialty: 'General Surgery, Maternity & Corporate Wellness',
    imageUrl: '/assets/aistudio/image_96b88829.png',
    resultHeadline: '4 Corporate MOUs & 480 Screening Packages',
    daysToResult: 'In the first 30 days',
    resultMetricPills: [
      { label: 'Corporate MOUs', value: '4 Signed' },
      { label: 'Packages Sold', value: '480' },
      { label: 'B2B Revenue', value: 'Rs. 5.4M' },
    ],
    resultDetails:
      'Field team conducted in-person B2B visits with handsome VIP health packages to tech companies and banks on Shahrah-e-Faisal. Converted 4 major corporate employee health accounts.',
  },
  {
    id: 'hosp-5',
    hospitalName: 'Hashmanis Hospital, Karachi',
    location: 'Clifton & Saddar, Karachi',
    specialty: 'Advanced Ophthalmology & Refractive Eye Care',
    imageUrl: '/assets/aistudio/image_ca6d0ffe.png',
    resultHeadline: '+390 Eye Screenings & 85 Cataract/LASIK Procedures',
    daysToResult: 'In the first 30 days',
    resultMetricPills: [
      { label: 'Inquiries', value: '+390' },
      { label: 'Surgeries', value: '+85' },
      { label: 'Conversion', value: '4.4x' },
    ],
    resultDetails:
      'Hyper-targeted local 10-km video campaigns answering common cataract and LASIK concerns, directing patient questions straight into WhatsApp for instant token booking.',
  },
  {
    id: 'hosp-6',
    hospitalName: 'National Hospital & Medical Centre, Lahore',
    location: 'Sector L, Phase 1, DHA Lahore',
    specialty: 'Multi-Speciality Tertiary Care & Executive Health',
    imageUrl: '/assets/aistudio/image_6f544ae5.png',
    resultHeadline: '+280 Specialist Appointments & Rs. 6.8M Added Billing',
    daysToResult: 'In the first 30 days',
    resultMetricPills: [
      { label: 'Specialist Appts', value: '+280' },
      { label: 'New Patients', value: '62%' },
      { label: 'Net Added', value: 'Rs. 6.8M' },
    ],
    resultDetails:
      'Systematically reached executive residents across DHA Lahore phases with premium doctor consultation offers and 1-tap WhatsApp doctor reservations.',
  },
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    point: 'Audience Targeting',
    oldWay: 'Waste Rs. 300K–800K on billboards drivers pass in 2 seconds.',
    clientKitWay: 'Show content strictly to families & businesses within your 10-km radius.',
    inHouseWay: 'Generic Facebook posts seen only by internal staff and relatives.',
  },
  {
    point: 'Doctor Time Investment',
    oldWay: 'Surgeons asked to film daily TikToks and waste 15+ hours a week.',
    clientKitWay: 'Just 5 hours once a month. Our crew films, edits, and distributes everything.',
    inHouseWay: 'Doctors ignore requests due to busy clinic and surgical rounds.',
  },
  {
    point: 'Content Output & Reach',
    oldWay: 'Stock photo flyers and Canva banners that get 3 likes and zero appointments.',
    clientKitWay: '100 high-definition video clips answering real local patient concerns.',
    inHouseWay: '1–2 irregular holiday greeting flyers per month.',
  },
  {
    point: 'Local Corporate B2B Visits',
    oldWay: 'Zero boots on the ground. Digital agencies never leave their desks.',
    clientKitWay: 'Our team visits local corporate offices, banks & towers with handsome VIP offers.',
    inHouseWay: 'No dedicated outreach staff or field network.',
  },
  {
    point: 'Patient Booking Flow',
    oldWay: 'Clunky 10-field web forms or busy reception phone lines with 70% drop-off.',
    clientKitWay: '1-tap WhatsApp chat. Patients share reports and receive tokens in 60s.',
    inHouseWay: 'Manual pen-and-paper appointment registers.',
  },
  {
    point: 'Territory Exclusivity',
    oldWay: 'Agencies gladly sign your competitor clinic right across the road.',
    clientKitWay: 'Strictly ONE hospital or clinic per 10-km territory. Guaranteed.',
    inHouseWay: 'Vulnerable to aggressive competitor saturation.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'Guarantee & Offer',
    question: 'What is the "Dominate your area in 30 days or we work for free" guarantee?',
    answer:
      'We stand 100% behind our execution. If we do not make your hospital the dominant choice and generate a substantial influx of verified patient consultations within your 10-km radius during the first 30 days, we continue working completely free of charge until that milestone is delivered. No excuses, no hidden clauses.',
  },
  {
    category: 'Time Commitment',
    question: 'How much time do our doctors have to give?',
    answer:
      'Only 5 hours once a month. Our production crew arrives at your hospital with cinematic cameras, wireless audio, and patient-centric question frameworks. Your consultants simply sit down and answer real clinical questions for 5 hours. We edit, subtitle, and repurpose those sessions into 100 localized video assets.',
  },
  {
    category: 'Exclusivity',
    question: 'Will you work with our competitor in the same area?',
    answer:
      'Never. We maintain a strict territory exclusivity agreement: strictly ONE hospital or clinic per 10-kilometer radius. Once we partner with your facility, we reject all inquiries from rival clinics in your zone so that 100% of the patient volume flows to your reception.',
  },
  {
    category: 'Medical Ethics',
    question: 'Is this compliant with medical ethics and healthcare standards?',
    answer:
      'Yes, absolutely. We do not use sensationalized discounts, unethical claims, or gimmicky advertising. Every single asset is 100% educational health advisory (e.g., "Warning signs of gallstones" or "Post-operative orthopedic recovery"). It elevates your consultants’ clinical authority and earns genuine community respect.',
  },
  {
    category: 'Patient Influx Speed',
    question: 'How fast do we start getting new patients and corporate accounts?',
    answer:
      'In weeks 1 and 2, our ground outreach team begins visiting corporate offices, commercial centers, and residential communities with handsome health privilege offers to secure verified data and corporate camps. By weeks 3 and 4, your doctor reels are actively retargeting thousands of local families, and daily WhatsApp consultation requests begin arriving.',
  },
  {
    category: 'Booking Convenience',
    question: 'Why do you route patient bookings through WhatsApp?',
    answer:
      'Over 95% of patients in Pakistan actively use WhatsApp daily. Patients dislike long web registration forms. Over WhatsApp, prospective patients can immediately send previous lab reports, ask questions directly to your care coordinator, and receive their confirmed consultation token in under 60 seconds.',
  },
];
