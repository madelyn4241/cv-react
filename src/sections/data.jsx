const LANG = 'EN'  // EN, CN


const headlineEN = "Recent Computer Information Systems graduate with a passion for cybersecurity. Seeking an entry-level position in cybersecurity to leverage skills in networking, system security, and incident response gained through academic coursework and practical certification.";

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
      icon: "SQL.jpeg",
      name: "SQL",
    },
    {
      icon: "html.png",
      name: "HTML",
    },
    {
      icon: "css.png",
      name: "CSS",
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
      "Contributed to the reduction of fraudulent activities through proactive monitoring."
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
      "Implemented proactive measures to monitor and prevent fraudulent activities."
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
      "Developed strong communication and negotiation skills.",
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
    loc: "Valdosta, GA",
    time: "4 yrs",
    description: [
      "GPA: 3.5"
    ],
  },
  {
    icon: "treehouse.png",
    school: "Treehouse",
    degree: "Certificate in Front End Web Development",
    loc: "www.treehouse.com",
    time: "2024",
    description: ["Learned to code websites using HTML, CSS, and JavaScript "],
  },
  {
    icon: "google.png",
    school: "Google",
    degree: "Google Cybersecurity Certificate",
    loc: "www.coursera.org",
    time: "April 2024",
    description: ["Gained hands-on expertise in networking, system security, and incident response to demonstrate proficiency in cybersecurity practices."],
  },
];



export const footer = <div>Built with React Last Update 2/29/2024</div>

export const headline = LANG == 'CN' ? headlineCN : headlineEN
export const info = LANG == 'CN' ? infoCN : infoEN
export const projects = LANG == 'CN' ? projectsCN : projectsEN
export const experience = LANG == 'CN' ? experienceCN : experienceEN
export const education = LANG == 'CN' ? educationCN : educationEN

export const projectTitle = LANG == 'CN' ? '开源项目' : 'Open-source Projects'
export const experienceTitle = LANG == 'CN' ? '职业经历' : 'Relevant Experience'
export const educationTitle = LANG == 'CN' ? '教育背景' : 'Education'
export const contactTitle = LANG == 'CN' ? '联系方式' : 'Contacts'
export const languageTitle = LANG == 'CN' ? '语言能力' : 'Languages'
export const techstackTitle = LANG == 'CN' ? '技术栈' : 'Tech Stack'
// export const footer = LANG == 'CN' ? footerCN : footerEN
