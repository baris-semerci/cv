import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { MediumIcon } from "@/components/icons/MediumIcon";

export const RESUME_DATA = {
  name: "Barış Semerci",
  initials: "BS",
  location: "İstanbul, Turkey",
  locationLink: "https://www.google.com/maps/place/istanbul",
  about:
    "As a detail-oriented, innovative and user experience-oriented mobile app developer, I work hard to provide high quality products.",
  summary:
    "I use the technical knowledge and problem solving skills I have gained during my university years to develop innovative and user-friendly mobile applications. I strive to master mobile development technologies and constantly follow the latest trends in this field. As an engineer who is prone to teamwork, can think analytically and produce creative solutions, I want to build a career in the world of mobile application development.",
    
  avatarUrl: "https://media.licdn.com/dms/image/v2/D4D03AQEXe_iISJ9NoA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1703238163614?e=1730937600&v=beta&t=XnIc89-JMrYAxSSW5d0P2x_v5WwCYwqHaiFT0JA5Zkc",
  personalWebsiteUrl: "www.barissemerci.com",
  contact: {
    email: "barissemerci3@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/barissemerci",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/barissemerci/",
        icon: LinkedInIcon,
      },
      {
        name: "Medium",
        url: "https://medium.com/@barissemerci",
        icon: MediumIcon,
      },
     
    ],
  },
  education: [
    {
      school: "Yildiz Technical University",
      degree: "Bachelor's Degree in Computer Engineering",
      start: "2017",
      end: "2022",
    },
    {
      school: "Istanbul University Open Education Faculty",
      degree: "Bachelor's Degree in Management Information Systems (Online)",
      start: "2022",
      end: "Present",
    },
  ],
  work: [
    {
      company: "Wiro AI",
      link: "https://wiro.ai",
      badges: ["Remote"],
      title: "Mobile Application Developer",
      start: "06.2023",
      end: null,
      description:
        "During my time at Wiro.ai, I developed Miles&Health, a native Android project written with Jetpack Compose. I took part in the development of new features with the backend team in the second phase of the project, which was developed with MVVM architecture. Afterwards, I took part in the realization of the Wiro AI application with Flutter. We developed the project from scratch with my team and we are planning to go to stores soon.",
    },
    {
      company: "Garanti BBVA Technology",
      link: "https://www.garantibbva.com.tr/",
      badges: [],
      title: "Software Developer",
      start: "04.2023",
      end: "05.2023",
      description:
        "During my time at Garanti BBVA Technology, I worked in the Android, iOS and web side login team. ",
    },
    {
      company: "BitTurk",
      link: "https://bitturk.com/",
      badges: ["Remote"],
      title: "Android Application Developer",
      start: "11.2022",
      end: "03.2023",
      description:"While I was working as an Android Application Developer at BitTurk, I developed the BitTurk application, which is a native Android project written in Java. Here I worked with XMLs and developed new features in MVC architecture."
    },
    {
      company: "Medyasoft",
      link: "https://medyasoft.com.tr/",
      badges: ["Remote"],
      title: "Mobile Application Developer",
      start: "07.2021",
      end: "10.2022",
      description:"During my internship at Medyasoft, where I started working as an intern, I took part in backend development with Java Spring Boot in the Backend team. Later, I moved to the Mobile team and made developments in the Turkish Red Crescent Mobile project with React Native."

    },
    {
      company: "Netaş",
      link: "https://netas.com.tr/",
      badges: ["Remote"],
      title: "Intern",
      start: "07.2020",
      end: "08.2020",
      description: "During my internship at Netaş, I wrote Unit Test for microservices with Java JUnit. At the end of my internship, I made a presentation to my team about Design Patterns.",
    },
  ],
  skills: [
    "Android",
    "Kotlin",
    "Java",
    "Jetpack Compose",
    "Views",
    "Retrofit",
    "MVVM",
    "MVC",
    "Multi-Module ARchitecture",
    "Dagger Hilt",
    "Navigation",
    "Room",
    "Flutter",
    "React Native",
   
  ],
  projects: [
    {
      title: "Noted",
      techStack: [
        "Android",
        "Kotlin",
        "Room",
        "Dagger Hilt",
        "Navigation",
      ],
      storelinks: [
        "https://play.google.com/store/apps/details?id=com.partnercodes.noted",

      ],
      description:
        "Noted is an intuitive and convenient note-taking app that allows you to easily jot down and organize your thoughts.",
      logo: "https://play-lh.googleusercontent.com/sNnKc_OVHjkao9X3W8GqeNu2zk09bnuRd_HUCLRtfHqFF35neLT7eYxX8QjRSUzaLQU=w480-h960-rw",
      link: {
        label: "Noted Play Store",
        href: "https://play.google.com/store/apps/details?id=com.partnercodes.noted&hl=en&gl=US",
      },
    },
    {
      title: "Puzzled",
      techStack: [
        "Android",
        "Kotlin"
     
      ],
      storelinks: [
        "https://play.google.com/store/apps/details?id=com.partnercodes.puzzled",

      ],
      description:
        "A game that you can play in your spare time. Play anytime, anywhere. Try to solve all the levels which are different in difficulty.",
      logo: "https://play-lh.googleusercontent.com/N_Q5o4ZU4Xn64p-NlENh5C6i-1SOfIT-ItL61Uiky0QHtwjrd8T-KsyRSPwx-XHzF3p4=w480-h960-rw",
      link: {
        label: "Puzzled Play Store",
        href: "https://play.google.com/store/apps/details?id=com.partnercodes.puzzled&hl=en&gl=US",
      },
    },
    {
      title: "habited",
      techStack: [
        "Flutter",
        "Provider",
        "Isar",
        
      ],
      storelinks: [
        "https://play.google.com/store/apps/details?id=com.partnercodes.habited",

      ],
      description: "Keep track of the steps you take every day and visualize your progress!",
      logo: "https://play-lh.googleusercontent.com/2-bRzfFfZfP2gzRb8g8hSR6XWcGLG0vnEr181yK2grYAT6mmeQrmG79gPp4N8CMnTw=w480-h960-rw",
      link: {
        label: "habited Play Store",
        href: "https://play.google.com/store/apps/details?id=com.partnercodes.habited&hl=en&gl=US",
      },
    },
    {
      title: "clozivy.",
      techStack: ["Flutter", "sqflite", "Provider",],
      storelinks: [
        "https://play.google.com/store/apps/details?id=com.partnercodes.clozivy",

      ],
      description:
        "clozivy. offers an easy way to organize your clothing collection and refresh your style! Remember your wardrobe, express your style freely.",
      logo: "https://play-lh.googleusercontent.com/Q1pANdlEkX0SA1RYFDmIdE1_4BMZdIrt6znIW9XQHyo-WSdlJVB2YmMbklShDszPfZU=w480-h960-rw",
      link: {
        label: "clozivy. Play Store",
        href: "https://play.google.com/store/apps/details?id=com.partnercodes.clozivy&hl=en&gl=US",
      },
    },
    {
      title: "Resimli Cuma Mesajları",
      techStack: ["Flutter", "Provider", "Firebase"],
      storelinks: [
        "https://play.google.com/store/apps/details?id=com.partnercodes.resimli_cuma_mesajlari",
       "https://apps.apple.com/tr/app/resimli-cuma-mesajları/id6517353536"
      ],
      description:
        "Friday messages, special day messages and more! Convey your feelings to your loved ones with picture messages.",
      logo: "https://play-lh.googleusercontent.com/lOSDENDVbPj97fvGGadXlUVr5fMLMkMV2VTXmCiy11JBg4vs7h_6CLEhk4DKrbdCIQ=w480-h960-rw",
      link: {
        label: "Resimli Cuma Mesajları Play Store",
        href: "https://play.google.com/store/apps/details?id=com.partnercodes.resimli_cuma_mesajlari&hl=en&gl=US",
      },
    },
    {
      title: "Happy Sunday Messages",
      techStack: ["Flutter", "Provider", "Firebase"],
      storelinks: [
        "https://play.google.com/store/apps/details?id=com.partnercodes.happy_sunday_messages",
        "https://apps.apple.com/tr/app/happy-sunday-messages/id6627339864",

      ],
      description:
        "Sunday messages, special day messages and more! Convey your feelings to your loved ones with picture messages.",
      logo: "https://play-lh.googleusercontent.com/U0QeVn7KdywDf4RhW-B6j73b9_Jv2D1Cu4m8iwzdj7qtjU1xe0uKSLOohl1jbMdoxFWE=w480-h960-rw",
      link: {
        label: "Happy Sunday Messages Play Store",
        href: "https://play.google.com/store/apps/details?id=com.partnercodes.happy_sunday_messages",
      },
    },
    {
      title: "Habit Tracker & Pomodoro",
      techStack: ["Android", "Jetpack Compose", "Room", "Dagger Hilt"],
      storelinks: [
        "https://play.google.com/store/apps/details?id=com.partnercodes.habittracker",

      ],
      description:"Habit Tracker & Pomodoro About this app Transform your productivity with our Habit Tracker & Pomodoro app!",
      logo: "https://play-lh.googleusercontent.com/F1HhZz6KXrDh-XLE_f7afnx8KYC-M_PKuz9-tvVhlSsSWvoIflduY2taNsa_A--TDFE=w480-h960-rw",
      link: {
        label: "Habit Tracker & Pomodoro Play Store",
        href: "https://play.google.com/store/apps/details?id=com.partnercodes.habittracker",
      },
    },
   
   
  
   
  ],
} as const;
