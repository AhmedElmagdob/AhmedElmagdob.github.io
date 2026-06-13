export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Experience {
  date: string;
  title: string;
  company: string;
  description: string;
}

export interface Education {
  school: string;
  date: string;
  degree: string;
  location: string;
  details: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
  type: 'play' | 'appstore' | 'web';
}

export interface Project {
  name: string;
  image: string;
  description: string;
  tools: string[];
  links: ProjectLink[];
  featured?: boolean;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'whatsapp' | 'phone' | 'email';
}

export const site = {
  name: 'Ahmed Abdelrahim',
  title: 'Senior Flutter Developer | Mobile Developer',
  location: 'Gharbiah, Egypt',
  email: 'ahmedabdelrahim167@gmail.com',
  description:
    'Senior Flutter developer with 4+ years of experience building high-performance cross-platform applications for Android and iOS, with a focus on Clean Architecture, scalable codebases, and CI/CD.',
  resumeUrl: '/Ahmed_Abdelrahim_Flutter_Developer.pdf',
  formspreeId: 'mzzrpdog',
};

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const stats: Stat[] = [
  { value: '4+', label: 'Years Experience' },
  { value: '10+', label: 'Published Apps' },
  { value: 'iOS · Android · Web', label: 'Cross-Platform' },
];

export const about = {
  intro:
    'Flutter Mobile Developer with 4+ years of experience building high-performance cross-platform applications for Android and iOS.',
  paragraphs: [
    'Proficient in Clean Architecture, MVVM, BLoC, and Riverpod, with a strong focus on scalable and maintainable codebases. Experienced in integrating Firebase, RESTful, and GraphQL APIs, and implementing CI/CD pipelines using Fastlane and Flavors.',
    'Successfully delivered 10+ production apps published on Google Play and the App Store across e-commerce, HR, transportation, and community service domains.',
    "I'm passionate about writing clean, maintainable code and continuously evolving my skills. If you're looking for a dedicated senior Flutter developer to bring your ideas to life, let's connect.",
  ],
  highlights: [
    '10+ apps published on Google Play & App Store',
    'Clean Architecture, MVVM, BLoC & Riverpod',
    'CI/CD with Fastlane, Flavors & GitHub Actions',
  ],
};

export const experience: Experience[] = [
  {
    date: '06/2025 – Present',
    title: 'Sr. Flutter Developer',
    company: 'Breem — Tanta (Part-Time)',
    description:
      'Led the development of 4+ cross-platform Flutter applications across e-commerce, transportation, and on-demand services. Drove architecture decisions, implemented scalable solutions, and improved application performance and maintainability.',
  },
  {
    date: '10/2022 – 01/2024',
    title: 'Mid-Level Flutter Developer',
    company: 'Software Vision — Cairo',
    description:
      'Developed and maintained mobile apps for Android and iOS using Flutter. Integrated 4+ third-party services including payment gateways, push notifications, and Google Maps.',
  },
  {
    date: '02/2022 – 10/2022',
    title: 'Mid-Level Flutter Developer',
    company: 'Radiant-Coders — Remote',
    description:
      'Delivered 1 full Flutter app from scratch and contributed to 3+ existing apps through feature additions, UI improvements, and bug fixes. Collaborated remotely using Agile/Scrum, Git, Jira, and Slack.',
  },
  {
    date: '03/2021 – 02/2022',
    title: 'Junior Flutter Developer',
    company: 'Deltana-it — Mansoura',
    description:
      'Built 3 core modules from scratch (appointment booking, patient records, push notifications) for an internal healthcare app. Migrated codebase from setState to Provider with Clean Architecture, improving performance and reducing bug-fix turnaround time.',
  },
  {
    date: '06/2020 – 01/2021',
    title: 'Junior Flutter Developer',
    company: 'Devest — Mansoura',
    description:
      'Built multiple Flutter apps covering layouts, navigation, and REST API integration. Gained practical experience in Flutter and Dart across real app development scenarios.',
  },
];

export const education: Education = {
  school: 'HIMIT',
  date: '09/2019 – 06/2023',
  degree: "Bachelor's in Computer Science",
  location: 'Kafr-Elshaikh',
  details: ['Grade: Very Good'],
};

export const projects: Project[] = [
  {
    name: 'Waddini IQ',
    image: '/images/waddini.png',
    description:
      'Redesigned UI from scratch and refactored codebase, improving performance by ~60% and reducing Maps API costs. An innovative transportation app for Iraq.',
    tools: ['Flutter', 'Google Maps', 'Clean Architecture', 'Performance Optimization'],
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.coddiv.waddini',
        type: 'play',
      },
      {
        label: 'App Store',
        href: 'https://apps.apple.com/app/waddini-%D9%88%D8%AF%D9%8A%D9%86%D9%8A/id6748650063',
        type: 'appstore',
      },
    ],
    featured: true,
  },
  {
    name: 'EDUS',
    image: '/images/edus.png',
    description:
      'Implemented advanced app security features including screen recording prevention, emulator detection, and video playback restriction. Added MFA authentication and biometric login to enhance user account protection.',
    tools: ['Flutter', 'MFA', 'Biometric Auth', 'Security', 'Firebase'],
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.edus.edus',
        type: 'play',
      },
      {
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/edus/id6738955601',
        type: 'appstore',
      },
    ],
  },
  {
    name: 'Karwa Taxi',
    image: '/images/karwa.png',
    description:
      "Collaborated with Mowasalat (Karwa) team — Qatar's official transport provider — to deliver a taxi booking app with 250K+ downloads.",
    tools: ['Dio', 'Cubit', 'Google Maps', 'Notifications', 'Payment Integration'],
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.karwatechnologies.karwataxi',
        type: 'play',
      },
      {
        label: 'App Store',
        href: 'https://apps.apple.com/eg/app/karwa-taxi/id1050410517?l=en',
        type: 'appstore',
      },
    ],
  },
  {
    name: 'Qarib – Food Delivery',
    image: '/images/qarib.png',
    description:
      'Food delivery app with real-time tracking, payment integration, and scalable architecture using Bloc, Freezed, and dependency injection.',
    tools: ['Bloc', 'Freezed', 'get_it', 'Injectable', 'Real-time Tracking', 'Payments'],
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.qarib.qarib.qarib',
        type: 'play',
      },
      {
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/qarib-food-delivery/id6749022513',
        type: 'appstore',
      },
    ],
  },
  {
    name: 'Azkar Elmuslim',
    image: '/images/doaa.png',
    description:
      'A spiritual guide app featuring prayers, Hadiths, and a digital tasbih counter for daily Islamic remembrances.',
    tools: ['Flutter', 'Local Storage', 'Notifications', 'Offline Support'],
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=doaa.com.hijri_gregorian',
        type: 'play',
      },
      {
        label: 'App Store',
        href: 'https://apps.apple.com/eg/app/%D8%A7%D8%B0%D9%83%D8%A7%D8%B1-%D9%88%D8%A7%D8%AF%D8%B9%D9%8A%D8%A9/id6446449803',
        type: 'appstore',
      },
    ],
  },
  {
    name: 'First Wash',
    image: '/images/wash.png',
    description:
      'Provides car services like washing and polishing through a user-friendly app.',
    tools: ['Dio', 'Cubit', 'Google Maps', 'Notifications', 'Tamara', 'Moyasar'],
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.first.wash',
        type: 'play',
      },
      {
        label: 'App Store',
        href: 'https://apps.apple.com/gb/app/fristwash/id1645783986',
        type: 'appstore',
      },
      {
        label: 'Website',
        href: 'http://web.firstwashes.com/',
        type: 'web',
      },
    ],
  },
  {
    name: 'Maharat TfL',
    image: '/images/child.png',
    description:
      'Helps children improve speech and social skills through interactive exercises.',
    tools: ['Cubit', 'Paymob', 'MVVM', 'Custom Animation'],
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.maharattufl.maharatufl',
        type: 'play',
      },
      {
        label: 'App Store',
        href: 'https://apps.apple.com/eg/app/%D9%85%D9%87%D8%A7%D8%B1%D8%A9-%D8%B7%D9%81%D9%84/id6467820570',
        type: 'appstore',
      },
    ],
  },
  {
    name: 'Al-Dafoor',
    image: '/images/dafoor.png',
    description:
      "An interactive app that tests users' knowledge across science, math, and language.",
    tools: ['Riverpod', 'OneSignal', 'Local Storage', 'Firebase Auth'],
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.aldafor.app',
        type: 'play',
      },
      {
        label: 'App Store',
        href: 'https://apps.apple.com/eg/app/%D8%A7%D9%84%D8%AF%D8%A7%D9%81%D9%88%D8%B1/id1513536333',
        type: 'appstore',
      },
    ],
  },
  {
    name: 'Ahal | أهل',
    image: '/images/ahal.png',
    description:
      'A community app for NHC residents to access housing services and submit maintenance requests.',
    tools: ['Flutter', 'Firebase', 'Push Notifications', 'Community Services'],
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.nhc.ahalnew',
        type: 'play',
      },
      {
        label: 'App Store',
        href: 'https://apps.apple.com/sa/app/ahal-%D8%A3%D9%87%D9%84/id6471913134',
        type: 'appstore',
      },
    ],
  },
  {
    name: 'Water Note',
    image: '/images/user.png',
    description:
      'A water delivery platform connecting users with drivers, featuring real-time tracking, payments, and notifications. Includes a companion driver app for delivery management.',
    tools: ['GetX', 'Google Maps', 'Apple Pay', 'Urway', 'Tracking', 'Notifications', 'MVC'],
    links: [
      {
        label: 'User App (Play)',
        href: 'https://play.google.com/store/apps/details?id=com.water_note.azom_project',
        type: 'play',
      },
      {
        label: 'User App (App Store)',
        href: 'https://apps.apple.com/de/app/%D9%88%D9%88%D8%AA%D8%B1-%D9%86%D9%88%D8%AA-water-note/id1620772038',
        type: 'appstore',
      },
      {
        label: 'Driver App (Play)',
        href: 'https://play.google.com/store/apps/details?id=com.azom.water_note_driver',
        type: 'play',
      },
      {
        label: 'Driver App (App Store)',
        href: 'https://apps.apple.com/de/app/water-note-driver/id1620913522',
        type: 'appstore',
      },
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Mobile Frameworks',
    skills: ['Flutter', 'Android', 'iOS', 'Dart'],
  },
  {
    name: 'State Management',
    skills: ['Bloc', 'Provider', 'GetX', 'Riverpod', 'Cubit'],
  },
  {
    name: 'Architecture & Patterns',
    skills: ['Clean Architecture', 'MVVM', 'MVC', 'SOLID Principles'],
  },
  {
    name: 'Backend Integration',
    skills: [
      'RESTful APIs',
      'GraphQL',
      'Dio',
      'Firebase',
      'Socket.io',
      'Pusher',
      'Push Notifications',
      'Google Maps',
      'Payment Gateways',
      'Shorebird',
    ],
  },
  {
    name: 'Database & Storage',
    skills: ['Secure Storage', 'SharedPreferences', 'Hive', 'Firebase Storage'],
  },
  {
    name: 'Testing & Code Generation',
    skills: ['Unit Testing', 'Widget Testing', 'Mockito', 'Freezed', 'JsonSerializable'],
  },
  {
    name: 'CI/CD & Tools',
    skills: [
      'GitHub Actions',
      'Fastlane',
      'Flavors',
      'get_it',
      'Injectable',
      'Git',
      'GitHub',
      'GitLab',
    ],
  },
];

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'B2' },
];

export const socialLinks: SocialLink[] = [
  {
    label: 'Email',
    href: 'mailto:ahmedabdelrahim167@gmail.com',
    icon: 'email',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/201004795976',
    icon: 'whatsapp',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/AhmedElmagdob',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ahmdedevx167',
    icon: 'linkedin',
  },
  {
    label: 'Phone',
    href: 'tel:+201004795976',
    icon: 'phone',
  },
];
