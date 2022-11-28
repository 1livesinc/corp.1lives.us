


const NavData = [
    
    {
      id:1,
      navitem: 'DevOps',
      submenu: true,
      portfolio:'DevOps Services',
      src:`https://media.1lives.us/wp-content/uploads/2022/11/devops.png`,
      sublinks: [
        {
          id:11,
          subnav: 'Web',
          link: '/web',
          
        },
        {
          id:12,
          subnav: 'Android',
          link: '/android',
        },
       
        {
          id:13,
          subnav: 'iOS',
          link: '/ios',
        },
        {
          id:14,
          subnav: 'SaaS',
          link: '/saas',
        }
       
      ],
    },
    {
      id:2,
      navitem: 'SECaaS',
      submenu: true,
      portfolio:'Security as a Service',
      src:`https://media.1lives.us/wp-content/uploads/2022/11/secaas.png`,
      sublinks: [
       
        {
          id:21,
          subnav: 'Secure Websites & APIs',
          link: '/swapi',
        },
        {
          id:22,
          subnav: 'Zero Trust Access',
          link: '/zta',
        },
        
        {
          id:23,
          subnav: 'L3 DDoS Mitigation',
          link: '/ddoS-mitigation',
        },
        
        {
          id:24,
          subnav: 'Phishing-resistant MFA',
          link: '/prmfa',
        },
       
      ],
    },
    {
      id:3,
      navitem: 'Assistive Technology',
      submenu: true,
      portfolio:'Virtual Memory',
      src:`https://media.1lives.us/wp-content/uploads/2022/11/mind-e1669148523677.png`,
      sublinks: [
       
        {
          id:31,
          subnav: 'Learning',
          link: '/learning',
        },
        {
          id:32,
          subnav: 'Communication',
          link: '/communication',
        },
        {
          id:33,
          subnav: 'Cognitive',
          link: '/cognitive',
        },
       
        {
          id:34,
          subnav: 'Low Vision',
          link: '/low-vision',
        },
       
      
       
      ],
    },
    {
      id:4,
      navitem: 'Solar Energy',
      submenu: true,
      portfolio:'Solar Energy Management',
      src:`https://media.1lives.us/wp-content/uploads/2022/11/solar-scaled-e1669149322142.jpg`,
      sublinks: [
        {
          id:41,
          subnav: 'Design Software',
          link: '/design-software',
        },
        {
          id:42,
          subnav: 'Asset Management',
          link: '/asset-mgmt',
        },
        {
          id:43,
          subnav: 'Field Service',
          link: '/field-service',
        },
        {
          id:44,
          subnav: 'Solar Monitoring',
          link: '/solar-monitor',
        },
      ],
    },
   
    {
      id:5,
      navitem: 'Shop Now',
      submenu: true,
      portfolio:'Lowest Cost | Quality Products & Services!',
      src:`https://media.1lives.us/wp-content/uploads/2022/11/shop.png`,
      sublinks: [
        {
          id:51,
          subnav: 'Software',
          link: '/software',
        },
        {
          id:52,
          subnav: 'Hardware',
          link: '/hardware',
        },
       
        
       
      ],
    },
    {
      id:6,
      navitem: 'About Us',
      submenu: true,
      portfolio:'We want to be part of your success!',
      src:`https://media.1lives.us/wp-content/uploads/2022/11/about.png`,
      sublinks: [
        {
          id:61,
          subnav: 'Training',
          link: '/training',
        },
        {
          id:62,
          subnav: 'Projects',
          link: '/projects',
        },
        {
          id:63,
          subnav: 'Careers',
          link: '/careers',
        },
        {
          id:64,
          subnav: 'Contact Us',
          link: '/contact',
        },
      
       
      ],
    },
   
  ];
  
  export default NavData;