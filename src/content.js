// Every piece of text on the site lives here.

export const site = {
  name: "Shubham More",
  firstName: "Shubham",
  lastName: "More",
  location: "Mumbai, India",
  email: "shubhammore14112006@gmail.com",
  phoneLabel: "WhatsApp +91 72087 24824",
  phoneHref: "https://wa.me/917208724824",
  resume: "/ShubhamResume.pdf",
  portrait: "/SelfImage.jpg",
  portraitCutout: "/portrait-cutout.png",
  credit: "© 2026 Shubham More. Built with React, GSAP and Lenis.",
};

export const nav = {
  menu: "Menu",
  close: "Close",
  talk: "Let’s talk",
  links: [
    { label: "Home", target: "#home" },
    { label: "About", target: "#about" },
    { label: "Projects", target: "#projects" },
    { label: "Contact", target: "#contact" },
  ],
  resumeLabel: "Download resume",
};

export const hero = {
  hint: "Move the light over the portrait",
  tagline: "Frontend developer and Computer Science student from Mumbai.",
};

export const about = {
  lines: ["Not just code.", "I build products"],
  body:
    "I am a B.E. student in Computer Science and Engineering at Atharva College of Engineering, Mumbai, with a CGPA of 8.75. I build responsive web and mobile apps with React, Next.js and React Native, and I am growing into a full-stack developer.",
};

export const statements = [
  {
    lines: ["Frontend", "developer"],
    body:
      "At CSI ACE I ship live projects with React.js and Tailwind CSS, from a QR attendance system to tools students use every day.",
  },
  {
    lines: ["Full-stack", "builder"],
    body:
      "Next.js and React on the front, Node.js, Supabase and the Groq API behind them, all wired together in StudentNeedy.",
  },
  {
    lines: ["Mobile", "apps"],
    body:
      "React Native with Clerk sign-in and Graph.js progress tracking, shipped as an installable Android app.",
  },
];

export const resume = {
  education: {
    label: "Education",
    items: [
      {
        title: "Atharva College of Engineering, Mumbai",
        detail: "B.E. in Computer Science and Engineering",
        meta: "2024 to 2028, CGPA 8.75 /10",
      },
      {
        title: "Patkar Varde College, Mumbai",
        detail: "HSC (2024) 84.33%",
        meta: "Higher secondary, Science",
      },
      {
        title: "Nirmala Niketan High School",
        detail: "SSC (2022) 78.80%",
        meta: "Secondary school",
      },
    ],
  },
  experience: {
    label: "Experience",
    items: [
      {
        title: "CSI ACE",
        detail: "Frontend Developer",
        meta: "July 2025 to present",
      },
    ],
  },
  skills: {
    label: "Skills",
    rows: [
      { label: "Languages", value: "C, C++, Java, JavaScript" },
      { label: "Frontend", value: "HTML, CSS, React.js, Next.js, Tailwind CSS" },
      { label: "Mobile", value: "React Native, Expo" },
      { label: "Backend", value: "Node.js, Supabase, Axios, REST APIs" },
      { label: "Tools", value: "Git, GitHub, VS Code" },
      { label: "Spoken", value: "English, Hindi, Marathi" },
    ],
  },
};

export const projectsIntro = {
  word: "Projects",
};

export const projects = [
  {
    title: "StudentNeedy",
    subtitle: "AI productivity platform for students",
    meta: "Full-stack project",
    bullets: [
      "One place for resumes, viva preparation, assignments and notes.",
      "AI features powered by the Groq API.",
      "A portfolio builder so students can publish their work.",
      "Supabase for auth and data, with Node.js behind the API.",
    ],
    image: "/project3.png",
    stack: "Next.js, Tailwind CSS, Supabase, Groq AI, Node.js",
    links: [
      { label: "Open live site", href: "https://students-needy.vercel.app/" },
      { label: "View code on GitHub", href: "https://github.com/shubhammoreeee/StudentsNeedy" },
    ],
  },
  {
    title: "QR Attendance",
    subtitle: "Atharva College attendance system",
    meta: "Built with CSI ACE",
    bullets: [
      "Complete attendance management with QR code scanning.",
      "Real-time student tracking for lectures.",
      "Clean component architecture and efficient navigation.",
      "Responsive UI wired to the backend through Axios.",
    ],
    image: "/project1.png",
    stack: "React.js, Tailwind CSS, Axios, Node.js",
    links: [
      { label: "Open live site", href: "https://csi-attendance-web-fronted-test.onrender.com" },
      { label: "View code on GitHub", href: "https://github.com/A1YAARY/Csi_Attendance_Web" },
    ],
  },
  {
    title: "YogaMate",
    subtitle: "Yoga app for Android",
    meta: "React Native project",
    bullets: [
      "Interactive yoga app with smooth navigation and a modern UI.",
      "Engaging animations like a floating tab bar and marquee scrolling.",
      "Google Sign-In through Clerk Authentication.",
      "Progress tracking with Graph.js charts.",
    ],
    image: "/22j.png",
    stack: "React Native, Clerk, Graph.js, React Native Vector Icons",
    links: [
      { label: "Download the APK", href: "/YogaMate-v1.apk", download: true },
      { label: "View code on GitHub", href: "https://github.com/shubhammoreeee/React-Native-Project" },
    ],
  },
  {
    title: "Portfolio",
    subtitle: "The site you are scrolling",
    meta: "Personal project",
    bullets: [
      "Cinematic single page with a flashlight portrait hero.",
      "Scroll-driven reveals, masks and a horizontal project rail.",
      "Inertial scrolling with Lenis, synced to GSAP ScrollTrigger.",
      "Strictly monochrome, responsive and reduced-motion aware.",
    ],
    image: "/project2.png",
    stack: "React, Vite, GSAP, Lenis",
    links: [{ label: "See repositories on GitHub", href: "https://github.com/shubhammoreeee" }],
  },
];

export const contact = {
  title: "Let’s talk.",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shubham-more-877493369" },
    { label: "GitHub", href: "https://github.com/shubhammoreeee" },
    { label: "Resume (PDF)", href: "/ShubhamResume.pdf" },
  ],
};
