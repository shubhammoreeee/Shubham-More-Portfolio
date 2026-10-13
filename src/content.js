// Every piece of text on the site lives here.

export const site = {
  name: "Shubham More",
  first: "Shubham",
  last: "More",
  location: "Mumbai, India",
  tagline: "React Native developer and Computer Science student from Mumbai.",
  email: "shubhammore14112006@gmail.com",
  github: "https://github.com/shubhammoreeee",
  linkedin: "https://www.linkedin.com/in/shubham-more-877493369",
  // Keep this filename exactly as it is on disk: the server is case-sensitive.
  resume: "/Shubham_More_Resume.pdf",
  resumeName: "Shubham_More_Resume.pdf",
  phone: "+91 72087 24824",
  whatsapp: "https://wa.me/917208724824",
  // Wide hero scene and the same scene with only the person kept.
  // Regenerate both with scripts/make-hero.py if the photo changes.
  heroImage: "/hero.jpg",
  heroCutout: "/hero-cutout.webp",
};

export const nav = [
  { label: "Home", id: "top" },
  { label: "About", id: "about" },
  { label: "Projects", id: "work" },
  { label: "Contact", id: "contact" },
];

export const hero = {
  hint: "Move the light over the portrait",
};

// "NOT JUST CODE. I BUILD ___" cycles through these.
export const buildWords = ["APPS", "PRODUCTS", "INTERFACES", "FEATURES"];

export const statement =
  "I am a B.E. student in Computer Science and Engineering at Atharva College of Engineering, Mumbai, with a CGPA of 8.75. I build production mobile apps with React Native and Expo, from native Android and iOS code to Firebase services, and I lead app development at the CSI ACE committee.";

export const roles = [
  {
    title: "React Native intern",
    text: "At Fitistan I built the Custom Challenges module end to end, native Android and iOS code included, and moved every in-app string to Firebase Remote Config.",
  },
  {
    title: "Mobile developer",
    text: "React Native, Expo and TypeScript on the front, Redux and TanStack Query for state, with Firebase and REST APIs behind them.",
  },
  {
    title: "App lead",
    text: "I lead app development for the CSI ACE committee in 2026–27, and built the chapter's official website.",
  },
];

export const education = [
  {
    place: "Atharva College of Engineering, Mumbai",
    what: "B.E. in Computer Science and Engineering",
    when: "2024 to 2028",
    note: "CGPA 8.75 / 10",
  },
  {
    place: "Patkar Varde College, Mumbai",
    what: "HSC (2024) 84.33%",
    when: "",
    note: "",
  },
  {
    place: "Nirmala Niketan High School, Mumbai",
    what: "SSC (2022) 78.80%",
    when: "",
    note: "",
  },
];

export const skills = [
  ["Tech stack", "JavaScript, TypeScript, React.js, React Native, Expo, Next.js, Tailwind CSS, HTML, CSS"],
  ["Firebase", "Cloud Messaging (FCM), Analytics, Crashlytics, Remote Config"],
  ["Mobile & state", "Native Android/iOS, Push Notifications, Redux, TanStack Query, REST APIs"],
  ["Programming", "C, C++, Java"],
  ["Tools", "Git, GitHub, VS Code, Android Studio, Android Emulator"],
  ["Languages", "English, Hindi, Marathi"],
];

export const experience = [
  {
    title: "Sugamaya Governance LLP, Mobile App Developer Intern",
    when: "Dec 2025 to Mar 2026",
    points: [
      "Developed production-ready mobile features in React Native (Expo + TypeScript) on a scalable, feature-based architecture.",
      "Implemented secure authentication, user profile systems and reliable REST API integrations.",
    ],
  },
  {
    title: "Fitistan, React Native Developer Intern",
    when: "Jun 2026 to Sep 2026",
    points: [
      "Built the Custom Challenges module end to end, from screen design to core logic, with native Android/iOS code for platform-specific features.",
      "Worked on Firebase Cloud Messaging and Analytics, and led the migration of all in-app text to Firebase Remote Config, so copy updates ship without app releases.",
    ],
  },
  {
    title: "CSI ACE Committee, App Lead",
    when: "2026 to 2027",
    points: ["Leads app development for the chapter and built its official website."],
  },
];

export const dive = {
  word: "PROJECTS",
  caption: "Six projects. Scroll sideways from here.",
};

// Projects without an image show a lettered placeholder; without links they
// point at the GitHub repositories page.
export const projects = [
  {
    title: "Charcha",
    kind: "Video streaming platform",
    when: "",
    role: "Mobile app",
    points: [
      "Feature-rich mobile video streaming with optimized playback, gesture-driven interactions and smooth rendering.",
      "Client-side data architecture with TanStack Query and Redux for state, caching and API sync.",
      "Short-form video feeds, nested comments, deep-link navigation and video upload workflows.",
    ],
    image: null,
    ratio: 4 / 3,
    stack: "React Native (Expo), TypeScript, TanStack Query, Redux",
    live: null,
    repo: null,
  },
  {
    title: "NexiAstro",
    kind: "AI astrology mobile platform",
    when: "",
    role: "Mobile app",
    points: [
      "Scalable React Native UI architecture with reusable components and structured navigation.",
      "Astrology API integration with validated payloads built from date and time of birth, coordinates and timezone offset.",
      "AI-generated life reports, compatibility analysis, astrology calendars and an AI chatbot.",
    ],
    image: null,
    ratio: 4 / 3,
    stack: "React Native (Expo), TypeScript, Next.js API Routes",
    live: null,
    repo: null,
  },
  {
    title: "CSI ACE Website",
    kind: "Official chapter website",
    when: "2026 to 2027",
    role: "App Lead",
    points: [
      "The official CSI ACE chapter website, built from reusable Next.js components.",
      "Fully responsive layout styled with Tailwind CSS.",
    ],
    image: null,
    ratio: 4 / 3,
    stack: "Next.js, JavaScript, Tailwind CSS",
    live: null,
    repo: null,
  },
  {
    title: "StudentNeedy",
    kind: "AI productivity platform for students",
    when: "",
    role: "Full-stack project",
    points: [
      "One place for resumes, viva preparation, assignments and notes.",
      "AI features powered by the Groq API.",
      "A portfolio builder so students can publish their work.",
      "Supabase for auth and data, with Node.js behind the API.",
    ],
    image: "/project-studentneedy.webp",
    ratio: 1,
    stack: "Next.js, Tailwind CSS, Supabase, Groq AI, Node.js",
    live: "https://students-needy.vercel.app/",
    repo: "https://github.com/shubhammoreeee/StudentsNeedy",
  },
  {
    title: "YogaMate",
    kind: "Yoga app for Android",
    when: "",
    role: "React Native project",
    points: [
      "Interactive yoga app with smooth navigation and a modern UI.",
      "Engaging animations like a floating tab bar and marquee scrolling.",
      "Google Sign-In through Clerk Authentication.",
      "Progress tracking with Graph.js charts.",
    ],
    image: "/project-yogamate.webp",
    ratio: 1,
    stack: "React Native, Clerk, Graph.js, React Native Vector Icons",
    download: { label: "Download the APK", href: "/YogaMate-v1.apk" },
    repo: "https://github.com/shubhammoreeee/React-Native-Project",
  },
  {
    title: "QR Attendance",
    kind: "Atharva College attendance system",
    when: "",
    role: "Built with CSI ACE",
    points: [
      "Complete attendance management with QR code scanning.",
      "Clean component architecture and efficient navigation.",
      "Modern, responsive UI wired to the backend through Axios.",
    ],
    image: "/project-qr-attendance.webp",
    ratio: 1,
    stack: "React.js, Tailwind CSS, Axios",
    live: "https://csi-attendance-web-fronted-test.onrender.com",
    repo: "https://github.com/A1YAARY/Csi_Attendance_Web",
  },
];

export const contact = {
  title: "Let’s talk.",
};
