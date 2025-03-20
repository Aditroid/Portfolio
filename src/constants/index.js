export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Education',
    href: '#education',
  },
  {
    id: 4,
    name: 'Projects',
    href: '#project',
  },
  {
    id: 5,
    name: 'Languages',
    href: '#languages',
  },
  {
    id: 6,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Cambridge School, Srinivaspuri',
    position: 'Secondary Education, 2018',
    img: 'assets/cambridge.svg',
    review:
      '',
    marks: '84.8%'
  },
  {
    id: 2,
    name: 'Cambridge School, Srinivaspuri',
    position: 'Senior Secondary Education, 2020',
    img: 'assets/cambridge.svg',
    review:'',
      // 'My stream was PCM with Physical Education as an optional subject.',
    marks: '91.4%'
  },
  {
    id: 3,
    name: 'ADGITM, Shastri Park',
    position: 'Graduation, 2020-2024',
    img: 'assets/college.png',
    review:'',
      // "Minor Project - Food Ordering Website, using HTML, CSS, JS, Node.js, MongoDB",
    marks: '9.2 CGPA'
  },
  // {
  //   id: 4,
  //   name: 'Ether Smith',
  //   position: 'CEO of BrightStar Enterprises',
  //   img: 'assets/review4.png',
  //   review:
  //     'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  // },
];

export const myProjects = [
  {
    title: 'PassManager - Secure Way to Store Passwords',
    desc: 'PassManager is a secure and efficient password management app that allows users to store and retrieve credentials seamlessly. It ensures data persistence and uses the UUID package to generate unique identifiers for each entry. The backend integration ensures smooth data handling, even after page reloads.',
    subdesc:
      'Developed using React.js for the frontend with Tailwind CSS for styling, it provides a clean and responsive UI. The backend, built with Node.js and Express.js, connects to a MongoDB database for secure storage. The UUID package enhances password organization with unique ID generation.',
    href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
    // texture: '/textures/project/project1.mp4',
    texture: '/textures/project/passmanager.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Node.js',
        path: '/assets/nodejs.png',
      },
      {
        id: 4,
        name: 'Express.js',
        path: '/assets/expressjs.png',
      },
      {
        id: 5,
        name: 'MongoDB',
        path: '/assets/mongodb.png',
      },
    ],
  },
  {
    title: 'E-Notebook - Secure and Personalized Note Keeping',
    desc: 'E-Notebook is a simple yet powerful note-taking app that allows users to create, edit, and delete their notes securely. It features user authentication, ensuring that each user can only access their own notes. A user must sign up or log in before adding any notes, providing a secure and personalized experience.',
    subdesc:
      'The frontend is built with React.js and styled using Bootstrap for a clean and responsive UI. The backend, powered by Node.js and Express.js, ensures seamless data handling, while MongoDB stores user-specific notes securely. ',
    href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    texture: '/textures/project/enotebook.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Bootstrap',
        path: 'assets/bootstrap.png',
      },
      {
        id: 3,
        name: 'Node.js',
        path: '/assets/nodejs.png',
      },
      {
        id: 4,
        name: 'Express.js',
        path: '/assets/expressjs.png',
      },
      {
        id: 5,
        name: 'MongoDB',
        path: '/assets/mongodb.png',
      },
    ],
  },
  {
    title: 'NewsAPK - Curated News at Your Fingertips',
    desc: 'NewsHub is a dynamic news website that fetches and organizes the latest articles from various sources, providing users with a seamless browsing experience. Users can click on any article to read the full story on the original news website. The site includes features like infinite scrolling for effortless browsing and a loading bar for a smooth and responsive user experience.',
    subdesc:
      'Developed using React.js with Bootstrap for styling, it ensures a clean and mobile-friendly interface. A news API is integrated to fetch real-time articles. Additional packages like infinite scroll and a loading bar enhance responsiveness and usability.',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/news.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Bootstrap',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'NewsAPK',
        path: '/assets/newsapkapi.png',
      },
    ],
  },
  {
    title: 'URL Shortener - Simplify and Customize Your Links',
    desc: 'URL Shortener is a web application that allows users to create custom short links by providing a long URL and a desired keyword. Once generated, the short URL redirects users to the original link, making sharing and accessing URLs easier.',
    subdesc:
      'Built with Next.js for a fast and optimized frontend, styled using Tailwind CSS for a sleek UI, and powered by MongoDB to store and manage custom short links efficiently.',
    href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    texture: '/textures/project/url.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/nextjs.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Node.js',
        path: '/assets/nodejs.png',
      },
      {
        id: 4,
        name: 'Express.js',
        path: '/assets/expressjs.png',
      },
      {
        id: 5,
        name: 'MongoDB',
        path: '/assets/mongodb.png',
      },
    ],
  },
  {
    title: 'Text Editor - Simple Yet Powerful Text Utility',
    desc: 'This Text Editor is a lightweight and efficient web application that provides users with essential text manipulation features. Users can copy text, convert it to uppercase or lowercase, count words and characters, and toggle between dark and light modes for better readability.',
    subdesc:
      'Developed using React.js for a dynamic interface and styled with Bootstrap for a responsive and visually appealing design. This is a complete frontend-only project focused on user experience and functionality.',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    texture: '/textures/project/texteditor.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Bootstrap',
        path: 'assets/bootstrap.png',
      },
    ],
  },
  // {
  //   title: 'FoodZilla - Seamless Online Food Ordering',
  //   desc: 'FoodZilla is a full-stack food ordering website that provides a smooth and interactive experience for users. It includes animations, a pre-set chatbot for assistance, coupon code discounts, and essential e-commerce features like login/signup, add to cart, and a fake payment gateway for order simulation.',
  //   subdesc:
  //     'Developed during a Web Development Workshop in the third year of college, this project utilizes HTML, CSS, and JavaScript for the frontend. The backend is powered by Node.js and MongoDB, ensuring secure data handling and user authentication.',
  //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
  //   texture: '/assets/project-logo6.png',
  //   logo: '/assets/project-logo6.png',
  //   logoStyle: {
  //     backgroundColor: '#2A1816',
  //     border: '0.2px solid #36201D',
  //     boxShadow: '0px 0px 60px 0px #AA3C304D',
  //   },
  //   spotlight: '/assets/spotlight1.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'HTML',
  //       path: '/assets/html.png',
  //     },
  //     {
  //       id: 2,
  //       name: 'CSS',
  //       path: 'assets/css.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'JavaScript',
  //       path: '/assets/js.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Node.js',
  //       path: '/assets/nodejs.png',
  //     },
  //     {
  //       id: 5,
  //       name: 'MongoDB',
  //       path: '/assets/mongodb.png',
  //     },
  //   ],
  // },
  {
    title: 'LinkTree Clone - Centralized Link Management',
    desc: 'LinkTree Clone is a web application that replicates the core functionality of LinkTree, allowing users to create a personalized webpage containing all their important links. Each user gets a unique LinkTree username, and all their links are efficiently stored and managed in the database for easy access and sharing.',
    subdesc:
      'Developed using Next.js for a fast and seamless experience, styled with Tailwind CSS for a modern UI, and backed by MongoDB for efficient link storage. Additional packages like Toastify enhance user interactions, while MongoDB drivers ensure a smooth backend connection.',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    texture: '/textures/project/linktreeclone.mp4',
    logo: '/assets/project-logo7.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/nextjs.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Node.js',
        path: '/assets/nodejs.png',
      },
      {
        id: 4,
        name: 'Express.js',
        path: '/assets/expressjs.png',
      },
      {
        id: 5,
        name: 'MongoDB',
        path: '/assets/mongodb.png',
      },
    ],
  },
  {
    title: 'Netflix Clone - Static Landing Page Replica',
    desc: 'This Netflix Clone is a frontend-only recreation of Netflix’s landing page, built as a practice project during my early web development days in college. It replicates the visual design and layout of Netflix’s homepage, providing a structured and responsive UI.',
    subdesc:
      'Developed using HTML and CSS, it focuses on clean design, responsive styling, and layout structuring to mimic the original Netflix landing page.',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    texture: '/textures/project/netflix.mp4',
    logo: '/assets/project-logo8.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'HTML',
        path: '/assets/html.png',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/css.png',
      },
    ],
  },
  {
    title: 'Twitter Clone - Pixel-Perfect Homepage Replica',
    desc: 'This Twitter Clone is an exact replica of Twitter’s homepage, designed to be visually indistinguishable from the original. It features smooth animations and effects that mirror the real platform, providing an authentic look and feel despite being a frontend-only project.',
    subdesc:
      'Built using HTML for structure and Tailwind CSS for styling, it incorporates various animations and effects to perfectly match Twitter’s user interface.',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    texture: '/textures/project/twitter.mp4',
    logo: '/assets/project-logo9.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'HTML',
        path: '/assets/html.png',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/css.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [-3, 4, -3] : isMobile ? [-5, 7, -6] : isTablet ? [-6, 4.2, -5] : [-7, 3, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, -2] : isTablet ? [5, 3, 2] : [5, 2, 5],
    // ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-18, 10, 0],
    gameboyPosition: isSmall ? [0.5, -1, 17] : isMobile ? [0.8, -1.2, 16.5 ] : isTablet ? [0.8, -0.9, 17] : [1,-0.6,17.5],
    targetPosition: isSmall ? [-5, -10, -6] : isMobile ? [-7.5, -10, -10] : isTablet ? [-10, -5, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'HTML,CSS,JavaScript',
    // pos: '',
    // duration: '',
    title: "First learned in a college workshop. I have a strong grip on these technologies, especially CSS, where I excel in designing web pages with precision and creativity.",
    icon: '/assets/js.png',
    animation: 'salute',
    rating: '⭐⭐⭐⭐⭐'
  },
  {
    id: 2,
    name: 'Node.Js, Express.Js',
    // pos: '',
    // duration: '',
    title: "Introduced during the workshop and have been practicing consistently since then. I have a solid command over backend development, integrating it with various frameworks like MongoDB and Mongoose.",
    icon: '/assets/nodejs2.png',
    animation: 'clapping',
    rating: '⭐⭐⭐⭐'
  },
  {
    id: 3,
    name: 'MongoDB, MySQL',
    // pos: '',
    // duration: '',
    title: " Have a good command over MongoDB, learned during the workshop and used in several database projects. MySQL is still in the learning phase, introduced as a subject in college, but I am gaining proficiency.",
    icon: '/assets/mongodb.png',
    animation: 'victory',
    rating: '⭐⭐⭐⭐'
  },
  {
    id: 4,
    name: 'React.js',
    // pos: '',
    // duration: '',
    title: "Quickly transitioned from JavaScript to React.js for its advantages, such as component-based architecture, virtual DOM for better performance, and state management. I have a strong command over React and have built multiple projects using it.",
    icon: '/assets/react.svg',
    animation: 'clapping',
    rating: '⭐⭐⭐⭐⭐'
  },
  {
    id: 5,
    name: 'Next.js',
    // pos: '',
    // duration: '',
    title: "Recently shifted to Next.js, exploring its benefits like server-side rendering (SSR), static site generation (SSG), and improved SEO capabilities. Learning how it simplifies web development and enhances performance.",
    icon: '/assets/nextjs2.png',
    animation: 'salute',
    rating: '⭐⭐⭐⭐'
  },
  {
    id: 6,
    name: 'Tailwind CSS, Bootstrap',
    // pos: '',
    // duration: '',
    title: "Learned key CSS frameworks for designing. Familiar with essential features that help make websites visually appealing, responsive, and efficient in styling without writing extensive custom CSS.",
    icon: '/assets/tailwindcss.png',
    animation: 'victory',
    rating: '⭐⭐⭐⭐⭐'
  },
];