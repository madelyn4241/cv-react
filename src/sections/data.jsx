const LANG = 'EN';

const headlineCN = "Computer Information Systems graduate seeking entry level tech position. ";

const infoEN = {
  contact: [
    {
      icon: <i className="ri-mail-send-line"></i>,
      name: "maddi.a42436@gmail.com",
      url: "mailto:maddi.a42436@gmail.com",
    },
    {
      icon: <i className="ri-phone-line"></i>,
      name: "4709059161",
      url: "",
    },
    {
      icon: <i className="ri-github-fill"></i>,
      name: "GitHub - madelyn4241",
      url: "https://github.com/madelyn4241",
    },
    {
      icon: <i className="ri-linkedin-box-fill"></i>,
      name: "LinkedIn - Madelyn Adams",
      url: "https://www.linkedin.com/in/madelyn-adams-3b6a73159/",
    },
  ],
  language: ["English (native)", "Italian (beginner)"],
  techstack: [
    {
      icon: "python.png",
      name: "Python",
    },
    {
      icon: "js.png",
      name: "JavaScript",
    },
    {
      icon: "react.svg",
      name: "React",
    },
    {
      icon: "html.png",
      name: "HTML",
    },
    {
      icon: "css.png",
      name: "CSS",
    },
    {
      icon: "vite.png",
      name: "Vite",
    },
  ],
};

const experienceEN = [
  {
    icon: "Synovus.png",
    company: "Synovus Bank",
    pos: "Relationship Specialist",
    loc: "Marietta, GA",
    time: "Jan 2022 - Current",
    description: [
      "Cultivated strong relationships with clients, providing exceptional customer service and addressing financial needs",
      "Demonstrated strong problem-solving abilities and attention to detail in resolving client issues.",
      "Created customized packages for customers based on financial targets and current capabilities."
    ]
  },
  {
    icon: "PNC.png",
    company: "PNC",
    pos: "Financial Solutions Consultant",
    loc: "El Paso, TX",
    time: "2020-2022",
    description: [
      "Assisted clients with various banking services, including account management, transactions, and loan applications",
      "Ensured compliance with banking regulations and maintained confidentiality of customer information.",
      "Reduced bank fraud with proactive customer monitoring and in-depth checks on suspicious transactions."
    ]
  },
  {
    icon: "Wireless Advocates.jpeg",
    company: "Wireless Advocates",
    pos: "Sales Representative",
    loc: "Jacksonville, NC",
    time: "2018-2020",
    description: [
      "Achieved and exceeded sales targets by effectively promoting wireless products and services.",
      "Developed excellent communication and negotiation skills while interacting with diverse customers.",
    ]
  },
];

const projectsEN = [
  {
    icon: "global.svg",
    name: "https://madelyn4241.github.io/learnReactJs/",
    link: "https://madelyn4241.github.io/learnReactJs/",
    year: 2024,
    description: [
      "The 'Build a Hero' web application using React and Vite that integrates user interactions. "
    ],
  },
  {
    icon: "global.svg",
    name: "https://madelyn4241.github.io/ToDo/",
    link: "https://madelyn4241.github.io/ToDo/",
    year: 2024,
    description: [
      "The To-Do List website is a user-friendly task management application with a visually appealing interface, allowing users to add, remove, and mark tasks as completed in a clean and organized manner."
    ],
  }
];


const educationEN = [
  {
    icon: "VSU.png",
    school: "Valdosta State University",
    degree: "Bachelor's in Computer Information Systems",
    loc: "Valdosta, GA ",
    time: "2020 ~ 2024, 4 years",
    description: [
      "GPA: 3.5"
    ]
  },
  {
    icon: "treehouse.png",
    school: "Treehouse",
    degree: "Certificate in Front End Web Development",
    loc: "www.treehouse.com",
    time: "Completed in 2024"
  },
  {
    icon: "treehouse.png",
    school: "Treehouse",
    degree: "Certificate in Java Basics",
    loc: "www.treehouse.com",
    time: "Completed in 2023"
  },
  {
    icon: "google.png",
    school: "Google",
    degree: "Certificate in Java Basics",
    loc: "www.treehouse.com",
    time: "Currently enrolled, expected completion March 2024"
  }
];

export const footer = <div>Built with React Last Update 2/24/2024</div>
export const headline = LANG === 'EN' ? headlineCN : headlineEN;

// ... (other code)

export const info = infoEN;

// ... (other code)

export const projects = LANG === 'CN' ? projectsCN : projectsEN;
export const experience = LANG === 'CN' ? experienceCN : experienceEN;
export const education = LANG === 'EN' ? educationCN : educationEN;

export const projectTitle = LANG === 'EN' ? 'Open_source Projects' : 'Open-source Projects';
export const experienceTitle = LANG === 'EN' ? 'Relevant Experience' : 'Relevant Experience';
export const educationTitle = LANG === 'EN' ? 'Education' : 'Education';
export const contactTitle = LANG === 'EN' ? 'Contacts' : 'Contacts';
export const languageTitle = LANG === 'EN' ? 'Languages' : 'Languages';
export const techstackTitle = LANG === 'EN' ? 'Tech Stack' : 'Tech Stack';
// export const footer = LANG == 'CN' ? footerCN : footerEN
