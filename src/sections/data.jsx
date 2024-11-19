const LANG = 'EN'  // EN, CN


const headlineEN = "Cybersecurity engineer with experience in vulnerability assessments, incident response, and security solutions. Seeking to further develop expertise and contribute to securing networks and systems in a dynamic cybersecurity environment.";

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
  techstack: [
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
    icon: "PurpleBox.png",
    company: "PurpleBox Inc.",
    pos: "CyberSecurity Analyst",
    loc: "Marietta, GA",
    time: "July 2024 - Current",
    description: [
      "Assisted in the delivery of vulnerability assessments and penetration testing reports by collaborating with technical teams to compile findings and present actionable recommendations to customers.",
      "Monitored and responded to security incidents using SIEM tools and implemented security policies and controls.",
      "Collaborated with cross-functional teams to design and deploy security solutions, ensuring compliance with industry standards."
    ]
  },
  {
    icon: "Synovus.png",
    company: "Synovus Bank",
    pos: "Relationship Specialist",
    loc: "Marietta, GA",
    time: "Jan 2022 - Current",
    description: [
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
      "Ensured compliance with banking regulations and maintained confidentiality of customer information.",
      "Implemented proactive measures to monitor and prevent fraudulent activities."
    ]
  },
];




const educationEN = [
    {
    icon: "WGU.jpeg",
    school: "Western Governor's University",
    degree: "Master's in Cybersecurity and Information Assurance",
    loc: "Online",
    time: "October 2024-July 2025",
  },
  {
    icon: "VSU.png",
    school: "Valdosta State University",
    degree: "Bachelor's in Computer Information Systems",
    loc: "Valdosta, GA",
    time: "2024",
    description: [
      "GPA: 3.5"
    ],
  },
  {
    icon: "google.png",
    school: "Google",
    degree: "Google Cybersecurity Certificate",
    loc: "www.coursera.org",
    time: "May 2024",
    description: ["Gained hands-on expertise in networking, system security, and incident response to demonstrate proficiency in cybersecurity practices."],
  },
    {
    icon: "comptia.png",
    school: "CompTIA",
    degree: "Security+",
    loc: "CompTIA",
    time: "May 2024",
    description: ["Acquired comprehensive knowledge in securing networks, managing vulnerabilities, implementing access controls, and ensuring compliance with security standards. "],
  },
  {
    icon: "AWS.jpeg",
    school: "AWS",
    degree: "Cloud Practitioneer",
    loc: "AWS",
    time: "August 2024",
    description: ["Gained foundational knowledge of AWS cloud services, including cloud security, architecture, and billing practices."],
  },
  {
    icon: "isc2.png",
    school: "ISC2",
    degree: "Certified in Cybersecurity Certification",
    loc: "ISC2",
    time: "October 2024",
    description: ["Demonstrated foundational knowledge in cybersecurity concepts, including network security, access controls, risk management, and security operations. Validated understanding of best practices for securing systems and mitigating cyber threats."],
  }
];



export const footer = <div>Built with React Last Update 5/31/2024</div>

export const headline = LANG == 'CN' ? headlineCN : headlineEN
export const info = LANG == 'CN' ? infoCN : infoEN

export const experience = LANG == 'CN' ? experienceCN : experienceEN
export const education = LANG == 'CN' ? educationCN : educationEN


export const experienceTitle = LANG == 'CN' ? '职业经历' : 'Relevant Experience'
export const educationTitle = LANG == 'CN' ? '教育背景' : 'Education'
export const contactTitle = LANG == 'CN' ? '联系方式' : 'Contacts'
export const languageTitle = LANG == 'CN' ? '语言能力' : 'Professional Involvement'
export const techstackTitle = LANG == 'CN' ? '技术栈' : 'Tech Stack'
// export const footer = LANG == 'CN' ? footerCN : footerEN
