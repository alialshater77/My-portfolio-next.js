export type NavLink = {
  id: string
  title: string
}

export type Service = {
  title: string
  icon: string
}

export type Technology = {
  name: string
  icon: string
}

export type Experience = {
  title: string
  company_name: string
  icon: string
  iconBg: string
  date: string
  points: string[]
}

export type ProjectTag = {
  name: string
  color: string
}

export type Project = {
  name: string
  description: string
  tags: ProjectTag[]
  image: string
  source_code_link?: string
  demo: string
}

export type PortfolioContent = {
  navLinks: NavLink[]
  services: Service[]
  technologies: Technology[]
  experiences: Experience[]
  projects: Project[]
  portrait: string
}

export const portfolioContent: PortfolioContent = {
  portrait: "/images/me3.jpg",
  navLinks: [
    { id: "about", title: "About" },
    { id: "work", title: "Services" },
    { id: "my-projects", title: "My Projects" },
    { id: "contact", title: "Contact" },
  ],
  services: [
    { title: "Front-End Engineer", icon: "/images/web.png" },
    { title: "Back-End Engineer", icon: "/images/mobile.png" },
    { title: "Full Stack Developer", icon: "/images/backend.png" },
    { title: "Real-Time & 3D Web", icon: "/images/creator.png" },
  ],
  technologies: [
    { name: "HTML 5", icon: "/images/tech/html.png" },
    { name: "CSS 3", icon: "/images/tech/css.png" },
    { name: "JavaScript", icon: "/images/tech/javascript.png" },
    { name: "TypeScript", icon: "/images/tech/typescript.png" },
    { name: "React JS", icon: "/images/tech/reactjs.png" },
    { name: "Next JS", icon: "/images/tech/nextjs.png" },
    { name: "Redux Toolkit", icon: "/images/tech/redux.png" },
    { name: "Tailwind CSS", icon: "/images/tech/tailwind.png" },
    { name: "Node JS", icon: "/images/tech/nodejs.png" },
    { name: "MongoDB", icon: "/images/tech/mongodb.png" },
    { name: "Three JS", icon: "/images/tech/threejs.svg" },
    { name: "git", icon: "/images/tech/git.png" },
    { name: "expressjs", icon: "/images/expressjs.png" },
  ],
  experiences: [
    {
      title: "Front-End Engineering (React.js & Next.js)",
      company_name: "Starbucks",
      icon: "/images/tech/reactjs.png",
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Build responsive, accessible interfaces with React.js and Next.js.",
        "Deliver fast pages using SSR and SSG, and optimize for Core Web Vitals.",
        "Manage state with Redux and Context API, and structure reusable component libraries.",
        "Implement SEO with metadata handling and multilingual support (i18n).",
      ],
    },
    {
      title: "Back-End & API Development (Node.js)",
      company_name: "Starbucks",
      icon: "/images/tech/nodejs.png",
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Design secure REST APIs with Node.js and Express, including authentication.",
        "Build real-time features with WebSockets and Socket.IO.",
        "Model and query data in MongoDB, including aggregation pipelines.",
        "Integrate third-party APIs and services.",
      ],
    },
    {
      title: "Full Stack Product Development",
      company_name: "Tesla",
      icon: "/images/software.png",
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Deliver complete features from database to UI.",
        "Deploy and maintain applications on Vercel and cloud platforms.",
        "Write maintainable, well-structured code with clear separation of concerns.",
        "Implement object-oriented programming and design patterns for clean and robust codebases.",
        "Perform thorough testing and debugging to ensure high-quality, bug-free applications.",
        "Collaborate with designers and product teams from requirements to release.",
      ],
    },
    // {
    //   title: "Node.js Developer",
    //   company_name: "Tesla",
    //   icon: "/images/tech/nodejs.png",
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Develop scalable and secure server-side applications using Node.js.",
    //     "Build real-time applications using WebSocket and libraries like Socket.IO.",
    //     "Implement microservices architecture and optimize server performance.",
    //     "Integrate third-party APIs and services to enhance application capabilities.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: "/images/mern.png",
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Build full-stack applications using MongoDB, Express.js, React.js, and Node.js.",
    //     "Develop secure and scalable REST APIs and integrate them with front-end applications.",
    //     "Manage databases efficiently, including CRUD operations and aggregation pipelines in MongoDB.",
    //     "Deploy and maintain web applications on cloud platforms like AWS, Vercel, or Heroku.",
    //   ],
    // },
  ],
  projects: [
    {
      name: "(Comming Soon) General Authority of Civil Aviation (Syria)",
      description:
        "The General Authority of Civil Aviation is Syria's official civil aviation body. I designed and built the bilingual public portal and a custom Strapi control panel end to end: the interface, the content model, the publishing workflow, and the security layer, handled the SEO and the deployment, Optimized the performance. The public site is Next.js and React in TypeScript, with content stored in PostgreSQL. Editors compose pages from ordered sections. Locales drive routing, the language switcher, hreflang, and the sitemap. Scheduled publishing covers multi-entry, multi-locale releases, with draft preview and a Redis lock so the same batch is never published or sent twice. The portal serves CMS forms with file upload and request tracking, newsletter campaigns, Excel flight schedules, a Leaflet map of Syrian airports, statistics charts, and site search. Sign-in uses TOTP two-factor authentication, an encrypted login log, upload and threat checks, content security policy, a threat scanner and upload firewall, Admin IP block and unblock tools, an immutable audit trail.",
      tags: [
        { name: "Next.js", color: "silver-text-gradient" },
        { name: "TypeScript", color: "blue-text-gradient" },
        { name: "Strapi", color: "violet-text-gradient" },
        { name: "PostgreSQL", color: "royal-text-gradient" },
        { name: "Redis", color: "pink-text-gradient" },
        { name: "GSAP", color: "lime-text-gradient" },
        { name: "Tailwind", color: "teal-text-gradient" },
      ],
      image: "/images/gaca.webp",
      demo: "https://gaca.gov.sy/",
    },
    {
      name: "Halo Phones",
      description:
        "Halo Phones is a server-rendered shop (Template Engine EJS) for a short list of handsets. Customers search and filter the catalog, keep a cart, pay by card, and receive an order confirmation with a branded PDF invoice. An admin manages listings, photos, and stock. I built it with Node.js, Express, and EJS, and store users, products, and sessions in MongoDB with Mongoose. Passwords are hashed with bcrypt. Sessions use express-session and connect-mongodb-session, sent as httpOnly, sameSite cookies. Helmet, csrf-sync, and rate limits protect login, signup, and password reset, and express-validator checks every write. Multer accepts product images and Sharp resizes them. Nodemailer sends the confirmation and the password-reset email, PDFKit builds the invoice, and Redis caches the catalog and product pages until a listing or its stock changes. The service runs on Render with MongoDB Atlas.",
      tags: [
        { name: "Node.js", color: "green-text-gradient" },
        { name: "Express", color: "stone-text-gradient" },
        { name: "EJS", color: "amber-text-gradient" },
        { name: "MongoDB", color: "emerald-text-gradient" },
        { name: "Redis", color: "pink-text-gradient" },
        { name: "Stripe", color: "indigo-text-gradient" },
      ],
      image: "/images/halo-phones.webp",
      source_code_link:
        "https://github.com/alialshater77/Halo-Phones-Node.js-Project",
      demo: "https://halo-phones-node-js-project.onrender.com/",
    },
    {
      name: "Vellum",
      description:
        "Vellum is a private editorial journal. Members publish short pictured dispatches, and anyone with the desk open sees a new note, a revision, or a removal as it happens, without refreshing the page. I built the full product: a Next.js 16 and React 19 site in TypeScript and Tailwind CSS, deployed on Cloudflare Workers with OpenNext and Wrangler, and a Node.js API on Express 5 with Mongoose and MongoDB Atlas. Authentication uses JSON Web Tokens and bcrypt, with the session kept in an httpOnly cookie. express-validator and express-rate-limit check every write, Multer accepts only PNG or JPEG images up to 1 MB, and Socket.IO delivers live events to signed-in members. The API runs on Render.",
      tags: [
        { name: "Next.js", color: "silver-text-gradient" },
        { name: "TypeScript", color: "blue-text-gradient" },
        { name: "Node.js", color: "green-text-gradient" },
        { name: "Express", color: "stone-text-gradient" },
        { name: "MongoDB", color: "emerald-text-gradient" },
        { name: "Socket.IO", color: "pink-text-gradient" },
        { name: "Tailwind", color: "teal-text-gradient" },
      ],
      image: "/images/vellum.webp",
      source_code_link: "https://github.com/alialshater77/Vellum-journal-Server",
      demo: "https://vellum-journal.alialshater7.workers.dev/",
    },
    {
      name: "Obsidian Global Investment",
      description:
        "Obsidian Global Investment is a diversified holding and operating group across energy, commodity trading, technology, property management, and corporate services. I delivered the public website and a Strapi-backed content dashboard as a full CMS, so editors can publish pages, sections, and media without engineering changes.",
      tags: [
        { name: "Next.js", color: "silver-text-gradient" },
        { name: "TypeScript", color: "blue-text-gradient" },
        { name: "Strapi", color: "violet-text-gradient" },
        { name: "shadcn", color: "slate-text-gradient" },
        { name: "Tailwind", color: "teal-text-gradient" },
      ],
      image: "/images/obsidian.webp",
      demo: "https://www.obsidianholding.net/",
    },
    {
      name: "Imkan Tours",
      description:
        "Imkan designs tailored travel programs with accredited partners across exploration, luxury, and educational tourism. I built the Next.js website and dashboard, implemented the SEO, and wrote backend code for the site logic, booking flow, and Stripe payments.",
      tags: [
        { name: "Next.js", color: "silver-text-gradient" },
        { name: "Node.js", color: "green-text-gradient" },
        { name: "Express", color: "stone-text-gradient" },
        { name: "MongoDB", color: "emerald-text-gradient" },
        { name: "Stripe", color: "indigo-text-gradient" },
        { name: "Tailwind", color: "teal-text-gradient" },
      ],
      image: "/images/imkan.webp",
      demo: "https://imkan.tours/",
    },
    {
      name: "4M Creative House",
      description:
        "4M Creative House is a creative campus where production, retail, marketing, and a coffeehouse share one workspace. I designed and built the website in Next.js and developed the motion system with GSAP.",
      tags: [
        { name: "Next.js", color: "silver-text-gradient" },
        { name: "TypeScript", color: "blue-text-gradient" },
        { name: "GSAP", color: "lime-text-gradient" },
        { name: "Tailwind", color: "teal-text-gradient" },
      ],
      image: "/images/4m.webp",
      demo: "https://4mcreativehouse.com/",
    },
    {
      name: "ABIR Fitness",
      description:
        "ABIR Fitness is a leading fitness center. I built the marketing website in Next.js and Tailwind CSS, and owned the SEO implementation, including metadata and page-level search visibility.",
      tags: [
        { name: "Next.js", color: "silver-text-gradient" },
        { name: "TypeScript", color: "blue-text-gradient" },
        { name: "Tailwind", color: "teal-text-gradient" },
      ],
      image: "/images/abir.webp",
      demo: "https://abirfitness.com/",
    },
    {
      name: "BeeBuy Industrial B2B",
      description:
        "BeeBuy is a global B2B marketplace connecting manufacturers, suppliers, buyers, and service providers for international trade. I designed the website, implemented the SEO, and wrote backend code with the team for the marketplace API and dashboard.",
      tags: [
        { name: "Next.js", color: "silver-text-gradient" },
        { name: "Node.js", color: "green-text-gradient" },
        { name: "Express", color: "stone-text-gradient" },
        { name: "MongoDB", color: "emerald-text-gradient" },
        { name: "Tailwind", color: "teal-text-gradient" },
      ],
      image: "/images/beebuy.webp",
      demo: "https://beebuy.online/",
    },
    {
      name: "Bee Global",
      description:
        "Bee Global is an international technology group that builds and operates digital ecosystems across fintech, platforms, infrastructure, and digital transformation. I built the corporate website and the project dashboard in Next.js and Tailwind CSS.",
      tags: [
        { name: "Next.js", color: "silver-text-gradient" },
        { name: "Tailwind", color: "teal-text-gradient" },
      ],
      image: "/images/bee-global.webp",
      demo: "https://beeglobal.tech/",
    },
    {
      name: "Arab Tourism Organization, League of Arab States",
      description:
        "The Arab Tourism Organization is a League of Arab States institution based in Jeddah. It represents the Arab tourism sector and carries out the decisions of the Council of Arab Ministers of Tourism. I designed and built the website in Next.js and Tailwind CSS, and contributed to the content dashboard.",
      tags: [
        { name: "Next.js", color: "silver-text-gradient" },
        { name: "TypeScript", color: "blue-text-gradient" },
        { name: "shadcn", color: "slate-text-gradient" },
        { name: "Tailwind", color: "teal-text-gradient" },
      ],
      image: "/images/arabia.webp",
      demo: "https://atoorg.org/",
    },
    {
      name: "F & B Services",
      description:
        "F & B Services is an international B2B supplier of food, beverage, and non-food products for ship-to-shore catering, duty-free cruise retail, airports, embassies, offshore platforms, and luxury hotels. I built the website in Next.js and produced the animations with GSAP.",
      tags: [
        { name: "Next.js", color: "silver-text-gradient" },
        { name: "TypeScript", color: "blue-text-gradient" },
        { name: "GSAP", color: "lime-text-gradient" },
        { name: "Tailwind", color: "teal-text-gradient" },
      ],
      image: "/images/fbservice.webp",
      demo: "https://fbservice.eu/",
    },
    {
      name: "FSC DWC LLC",
      description:
        "FSC DWC LLC, based in Dubai World Central, distributes food and beverage to the travel, hospitality, and remote-site sectors, and premium toys for duty-free and travel retail. I built the website in Next.js and produced the animations with GSAP.",
      tags: [
        { name: "Next.js", color: "silver-text-gradient" },
        { name: "TypeScript", color: "blue-text-gradient" },
        { name: "GSAP", color: "lime-text-gradient" },
        { name: "Tailwind", color: "teal-text-gradient" },
      ],
      image: "/images/fsc.webp",
      demo: "https://foodsc.ae/",
    },
    {
      name: "Jood",
      description:
        "Jood is a Saudi platform for economic empowerment, creating income and growth paths for women chefs, home cooks, productive families, and creators. I built the website in Next.js and Tailwind CSS and owned the SEO across the site.",
      tags: [
        { name: "Next.js", color: "silver-text-gradient" },
        { name: "TypeScript", color: "blue-text-gradient" },
        { name: "GSAP", color: "lime-text-gradient" },
        { name: "Tailwind", color: "teal-text-gradient" },
      ],
        image: "/images/jood.webp",
      demo: "https://jood.alialshater7.workers.dev/",
    },
    // {
    //   name: "Abana",
    //   description:
    //     "Abana provides business solutions, digital transformation, and custom technology services for government and enterprise clients in Saudi Arabia. I built the multilingual website in Next.js 14 with server-side rendering and Tailwind CSS.",
    //   tags: [
    //     { name: "Next.js", color: "silver-text-gradient" },
    //     { name: "Tailwind", color: "teal-text-gradient" },
    //   ],
    //   image: "/images/abana.webp",
    //   demo: "https://www.abana.com.sa/",
    // },
    // {
    //   name: "Prokoders company website",
    //   description:
    //     "I built the Prokoders company website from scratch as a multilingual Next.js 15 application, combining server rendering and static generation for performance. The interface includes light and dark themes, built with Tailwind CSS and shadcn/ui.",
    //   tags: [
    //     { name: "Next.js", color: "silver-text-gradient" },
    //     { name: "shadcn", color: "slate-text-gradient" },
    //     { name: "Tailwind", color: "teal-text-gradient" },
    //   ],
    //   image: "/images/prokoders.webp",
    //   demo: "https://prokoders.com/en",
    // },
    // {
    //   name: "BOLD Bespoke Design",
    //   description:
    //     "BOLD Bespoke Design is a Dubai manufacturer of luxury furniture shaped to each client's taste. I built the interactive front end in JavaScript and Tailwind CSS and integrated it with Laravel Blade templates.",
    //   tags: [
    //     { name: "JavaScript", color: "yellow-text-gradient" },
    //     { name: "Laravel", color: "orange-text-gradient" },
    //     { name: "Tailwind", color: "teal-text-gradient" },
    //   ],
    //   image: "/images/bold.webp",
    //   demo: "https://bolduae.com/en",
    // },
    {
      name: "Cryptoverse",
      description:
        "A cryptocurrency market explorer built with React and Redux Toolkit. The interface uses Ant Design, market charts are rendered with Chart.js, and live data is loaded from two external APIs.",
      tags: [
        { name: "React", color: "cyan-text-gradient" },
        { name: "Redux Toolkit", color: "purple-text-gradient" },
        { name: "Ant Design", color: "sky-text-gradient" },
      ],
      image: "/images/cryptocurrencies.webp",
      source_code_link: "https://github.com/alialshater77/Cryptoverse",
      demo: "https://cryptoverse-8zz.pages.dev/",
    },
    {
      name: "Real-Time Chat App",
      description:
        "A real-time chat application on the MERN stack. Users can message privately or in groups and exchange files and images. Socket.IO handles live delivery, and Zustand manages client state.",
      tags: [
        { name: "React", color: "cyan-text-gradient" },
        { name: "Node.js", color: "green-text-gradient" },
        { name: "Express", color: "stone-text-gradient" },
        { name: "MongoDB", color: "emerald-text-gradient" },
        { name: "Zustand", color: "amber-text-gradient" },
        { name: "Socket.IO", color: "pink-text-gradient" },
        { name: "Tailwind", color: "teal-text-gradient" },
      ],
      image: "/images/chat-app.webp",
      source_code_link: "https://github.com/alialshater77/mern-chat-app-server",
      demo: "https://mern-chat-app-react.pages.dev",
    },
    {
      name: "University Website",
      description:
        "A responsive multi-page university website built with React. It presents programs, student services, and clear paths to contact the university and register.",
      tags: [
        { name: "React", color: "cyan-text-gradient" },
        { name: "CSS", color: "royal-text-gradient" },
      ],
      image: "/images/university.webp",
      source_code_link: "https://github.com/alialshater77/university-website",
      demo: "https://f356601f.university-website-ccq.pages.dev/",
    },
    {
      name: "GYM Page",
      description:
        "A gym marketing site built with React, TypeScript, and Tailwind CSS. It presents facilities, membership benefits, offers, and registration details.",
      tags: [
        { name: "React", color: "cyan-text-gradient" },
        { name: "TypeScript", color: "blue-text-gradient" },
        { name: "Tailwind", color: "teal-text-gradient" },
      ],
      image: "/images/gym.webp",
      source_code_link: "https://github.com/alialshater77/gym-TypeScript",
      demo: "https://gym-typescript-4m7.pages.dev/",
    },
    {
      name: "Admin Dashboard",
      description:
        "An admin dashboard built with React and Material UI. It includes light and dark themes, Nivo charts, data tables, an FAQ, forms, and calendar integration.",
      tags: [
        { name: "React", color: "cyan-text-gradient" },
        { name: "MUI", color: "azure-text-gradient" },
      ],
      image: "/images/dashboard.webp",
      source_code_link: "https://github.com/alialshater77/Admin-dashboard",
      demo: "https://admin-dashboard-bb8.pages.dev/",
    },
  ],
}
