 import { BACKEND_SKILLS, FRONTEND_SKILLS } from './tech-skills';

export const PROJECT_CATEGORY = {
  ALL: 'all',
  FULL_STACK: 'full-stack',
  OPEN_SOURCE: 'open-source',
};

export const TABS = [
  {
    label: 'All',
    value: PROJECT_CATEGORY.ALL,
    icon: 'fluent:tab-desktop-20-regular',
  },
  {
    label: 'Full Stack',
    value: PROJECT_CATEGORY.FULL_STACK,
    icon: 'bx:code-block',
  },
  {
    label: 'Open Source',
    value: PROJECT_CATEGORY.OPEN_SOURCE,
    icon: 'fluent-mdl2:open-source',
  },
];

const getSkillByLabel = (skills, techLabel) => skills.find(({ label }) => label === techLabel);

export const PROJECTS = [
  {
    imgSrc: './TalkTales.jpg',
    title: 'TalkTales',
    techIcons: [
     
      getSkillByLabel(BACKEND_SKILLS, 'Spring Boot'),
      getSkillByLabel(BACKEND_SKILLS, 'MySQL'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(BACKEND_SKILLS, 'REST Api'),
      getSkillByLabel(FRONTEND_SKILLS, 'Reactstrap'),
      
      
    ],
    description:
      'A dynamic and interactive blogging platform where users can write, edit, and upload images for blogs across various topics. Registered users can log in, read blogs, and engage with the community through comments. The application is built with a Java Spring Boot backend, MySQL database, and a React Vite frontend, ensuring a seamless user experience. Deployed on Digital Ocean, TalkTales offers a responsive and intuitive interface for effortless content creation and engagement.',
    repoLink: 'https://github.com/harshpatil19/TalkTales.git',
    sourceLink: '',
    category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
  },
 
  {
    imgSrc: './QuickCart.jpg',
    title: 'QuickCart E-Commerce',
    techIcons: [
      getSkillByLabel(BACKEND_SKILLS, 'Hibernate'),
      getSkillByLabel(BACKEND_SKILLS, 'MySQL'),
      getSkillByLabel(FRONTEND_SKILLS, 'JSP'),
      getSkillByLabel(BACKEND_SKILLS, 'Servlet'),
      getSkillByLabel(FRONTEND_SKILLS, 'Bootstrap'),
     
      // {
      //   label: 'Java',
      //   icon: 'logos:java',
      // },
      
    ],
    description:
      'QuickCart delivers a seamless online shopping experience with secure user authentication, dynamic pricing, and real-time cart updates. It offers intuitive product and category management, smooth checkout processing, and responsive design for an optimal shopping journey. Admins can efficiently manage inventory, upload product images, and oversee transactions through a protected dashboard, ensuring streamlined operations.',
    repoLink: 'https://github.com/harshpatil19/QuickCart.git',
    sourceLink: '',
    category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
  },

  
];
