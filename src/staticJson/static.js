import { Book, Globe, Phone } from "lucide-react";
import { Airplay, Facebook, Figma, GitHub, Instagram, Linkedin, Video } from "react-feather";

const aboutMe = {
  heading: "Why",
  title: "Choose Let's Work as Your Web Development Partner",
  summary:
    `At "Let's Work," we bring expertise in cutting-edge web development, specializing in the MERN stack (MongoDB, Express, React, 
  Node.js) and other advanced technologies to deliver modern, scalable, and efficient solutions tailored to your needs. We prioritize 
  understanding your vision to provide customized websites that align perfectly with your goals, whether it's for business, portfolio, 
  or e-commerce. Our designs focus on creating a seamless user experience with intuitive navigation and optimized performance. Time is 
  critical, and we ensure on-time project delivery without compromising quality while offering post-launch support to keep your website 
  running smoothly. At "Let's Work," we thrive on innovation and creativity, transforming ideas into impactful digital experiences that 
  stand out.`.trim(),
};

const about = {
  title: "Crafting Websites That Empower Your Vision",
  summary: `
    "Let's Work," your trusted partner in crafting exceptional digital experiences. We specialize in website development using the MERN stack (MongoDB, Express, React, Node.js) and other cutting-edge technologies, delivering modern and scalable solutions tailored to your unique needs.

At "Let's Work," we believe that every project tells a story. Our mission is to transform your ideas into stunning, functional websites that not only look great but also drive results. Whether you’re building a personal portfolio, launching a business, or expanding an e-commerce platform, we’re here to make your vision a reality.

Our team is dedicated to providing customized solutions, seamless user experiences, and unwavering support throughout your project's journey. With a passion for innovation and a commitment to excellence, "Let's Work" is here to help you stand out in the digital world.

Let’s collaborate and create something extraordinary together!

Would you like to adjust the tone or add more specific details?
  `.trim(),
};

const served = [
  {
    Image: "./images/ecart.jpg",
    tips: "we work for E-commerce",
  },
  {
    Image: "./images/edit.jpg",
    tips: "we work for Edditing (Video,Images,Logo,banner,Thumbnail)",
  },
  {
    Image: "./images/edu.jpg",
    tips: "we work for Education",
  },
  {
    Image: "./images/gym.jpg",
    tips: "we work for Gym",
  },
  {
    Image: "./images/health.jpg",
    tips: "we work for Health or Hospital",
  },
  {
    Image: "./images/music.jpg",
    tips: "we work for Music",
  },
  {
    Image: "./images/sport.jpg",
    tips: "we work for Sports",
  },
  {
    Image: "./images/edu.jpg",
    tips: "we work for Education",
  },
];

const blogs = [
  {
    title: "How to Get Started as a Freelance Web Developer",
    aboutBlog:
      "Learn the essential steps to kickstart your freelancing career as a web developer. From setting up your portfolio to finding your first clients, this blog covers it all.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    title: "Top 10 Skills Every Freelance Web Developer Needs in 2025",
    aboutBlog:
      "Discover the most in-demand skills for web developers, including frameworks, tools, and soft skills to thrive in the freelancing world.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    title: "Effective Ways to Build a Winning Portfolio",
    aboutBlog:
      "A step-by-step guide to creating a portfolio that attracts high-paying clients. Showcase your skills and stand out from the competition.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    title: "How to Price Your Web Development Services",
    aboutBlog:
      "Learn how to set competitive and profitable rates for your freelance web development projects without underselling yourself.",
    image:
      "https://blog.oziconnect.com/wp-content/uploads/2023/12/How-to-price-your-web-design-and-development-services-oziconnect.jpg",
  },
  {
    title: "Managing Clients: Tips for Freelance Web Developers",
    aboutBlog:
      "Master the art of client communication, setting expectations, and maintaining long-term relationships to ensure a steady stream of projects.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    title: "Best Platforms to Find Freelance Web Development Projects",
    aboutBlog:
      "Explore the top freelancing platforms and networks to land consistent projects and grow your business.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    title: "Balancing Work and Life as a Freelance Web Developer",
    aboutBlog:
      "Tips and strategies to manage your time, avoid burnout, and achieve a healthy work-life balance in freelancing.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    title: "The Future of Freelance Web Development",
    aboutBlog:
      "Get insights into the trends and technologies shaping the future of web development and how freelancers can stay ahead of the curve.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
];


const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "We create responsive websites using cutting-edge technologies.",
  },
  {
    icon: Video,
    title: "Video Editing",
    description:
      "Professional video editing services for all your multimedia needs.",
  },
  {
    icon: Airplay ,
    title: "API Services",
    description: "Robust and scalable API solutions for seamless integration.",
  },
  {
    icon: Figma,
    title: "UI Design",
    description: "Intuitive and visually appealing user interface designs.",
  },
  {
    icon: Book,
    title: "Courses",
    description:
      "Educational courses to enhance your skills in various technologies.",
  },
];

const teamMembers = [
  {
    name: "Shubham Shrivastwa",
    role: "Full Stack Developer",
    avtar:
      "http://res.cloudinary.com/deqnxyzio/image/upload/v1735400227/IMG20241130205144_ex6rsd.jpg",
    background:
      "IIT Delhi graduate with expertise in modern web technologies, delivering innovative and scalable web solutions.",
    socialLinks: [
      {
        icon: <Linkedin size={20} />,
        url: "https://www.linkedin.com/in/shubham-shrivastwa/",
      },
      {
        icon: <GitHub size={20} />,
        url: "https://github.com/RaunakShrivastwa",
      },
      {
        icon: <Facebook size={20} />,
        url: "https://www.facebook.com/shubham.shrivastwa.16",
      },

      {
        icon: <Instagram size={20} />,
        url: "https://www.instagram.com/ks_shubham31/",
      },
      {
        icon: <Phone size={20} />,
        url: "9508840645",
      },
    ],
  },
  {
    name: "Rahul Sharma",
    role: "Full Stack Developer",
    avtar: "https://cdn-icons-png.flaticon.com/256/4825/4825112.png",
    background: "IIT Delhi graduate with expertise in modern web technologies.",
    socialLinks: [
      {
        icon: <Linkedin size={20} />,
        url: "https://www.linkedin.com/in/rahulsharma",
      },
      { icon: <GitHub size={20} />, url: "https://github.com/rahulsharma" },
      { icon: <Facebook size={20} />, url: "https://github.com/rahulsharma" },

      {
        icon: <Instagram size={20} />,
        url: "https://github.com/rahulsharma",
      },
      {
        icon: <Phone size={20} />,
        url: "https://github.com/rahulsharma",
      },
    ],
  },
  {
    name: "Rahul Sharma",
    role: "Full Stack Developer",
    avtar: "https://cdn-icons-png.flaticon.com/256/4825/4825112.png",
    background: "IIT Delhi graduate with expertise in modern web technologies.",
    socialLinks: [
      {
        icon: <Linkedin size={20} />,
        url: "https://www.linkedin.com/in/rahulsharma",
      },
      { icon: <GitHub size={20} />, url: "https://github.com/rahulsharma" },
      { icon: <Facebook size={20} />, url: "https://github.com/rahulsharma" },

      {
        icon: <Instagram size={20} />,
        url: "https://github.com/rahulsharma",
      },
      {
        icon: <Phone size={20} />,
        url: "https://github.com/rahulsharma",
      },
    ],
  },
  {
    name: "Rahul Sharma",
    role: "Full Stack Developer",
    avtar: "https://cdn-icons-png.flaticon.com/256/4825/4825112.png",
    background: "IIT Delhi graduate with expertise in modern web technologies.",
    socialLinks: [
      {
        icon: <Linkedin size={20} />,
        url: "https://www.linkedin.com/in/rahulsharma",
      },
      { icon: <GitHub size={20} />, url: "https://github.com/rahulsharma" },
      { icon: <Facebook size={20} />, url: "https://github.com/rahulsharma" },

      {
        icon: <Instagram size={20} />,
        url: "https://github.com/rahulsharma",
      },
      {
        icon: <Phone size={20} />,
        url: "https://github.com/rahulsharma",
      },
    ],
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export { aboutMe, about, served, blogs, services,teamMembers };
