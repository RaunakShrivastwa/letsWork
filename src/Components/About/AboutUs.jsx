import React from "react";
import { Linkedin, Twitter, Github } from "lucide-react";
import "./About.scss";
import Banner from "../../commonComponents/Banner/Banner";
import ServiceCard from "./ServiceCard";
import TeamMember from "./TeamMember";
import { Facebook, GitHub, Instagram, Phone } from "react-feather";
import Footer from "../../commonComponents/Footer/Footer";
import WhyChhoseUs from "./WhyChhoseUs";

{/* <Banner />;
<ServiceCard />;
<TeamMember />; */}

const ScrollableSection = ({ title, items, renderItem }) => (
  <section className="mb-5">
    <h2 className="section-title text-center mb-4">{title}</h2>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {items.map((item, index) => (
        <div key={index} className="col">
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  </section>
);

const AboutUs = () => {
  const services = [
    {
      icon: Linkedin,
      title: "Website Development",
      description:
        "We create responsive websites using cutting-edge technologies.",
    },
    {
      icon: Twitter,
      title: "Video Editing",
      description:
        "Professional video editing services for all your multimedia needs.",
    },
    {
      icon: Github,
      title: "API Services",
      description:
        "Robust and scalable API solutions for seamless integration.",
    },
    {
      icon: Linkedin,
      title: "UI Design",
      description: "Intuitive and visually appealing user interface designs.",
    },
    {
      icon: Twitter,
      title: "Courses",
      description:
        "Educational courses to enhance your skills in various technologies.",
    },
  ];

  const teamMembers = [
    {
      name: "Rahul Sharma",
      role: "Full Stack Developer",
      avtar: "https://cdn-icons-png.flaticon.com/256/4825/4825112.png",
      background:
        "IIT Delhi graduate with expertise in modern web technologies.",
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
      background:
        "IIT Delhi graduate with expertise in modern web technologies.",
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
      background:
        "IIT Delhi graduate with expertise in modern web technologies.",
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
      background:
        "IIT Delhi graduate with expertise in modern web technologies.",
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

  return (
    <div className="about-us-page vh-100 overflow-y-auto mt-4">
      <Banner
        image={"https://wallpapercave.com/wp/wp2471711.jpg"}
        title={"Welcome to Let's Work"}
        lead={"Empowering Your Digital Journey with Cutting-Edge Solutions"}
      />
      <div className=" py-5 p-3">
        <section className="about-section mb-5">
          <h2 className="section-title text-center mb-4">About Let's Work</h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <p className="lead text-center mb-4">
                As a client, you are at the center of everything I do. I
                understand that every project is unique, and I am dedicated to
                providing tailored solutions that meet your specific goals.
                Whether you need a professional website, API integration, or
                multimedia services like video and image editing
              </p>
              <div className="card border-0 bg-transparent box_shadow mb-2">
                <div className="card-body why_choose_lets_work">
                  <h3 className="h4 mb-3">Why Choose Lets'work?</h3>
                  <WhyChhoseUs />
                </div>
              </div>
            </div>
          </div>
        </section>

        <ScrollableSection
          title="Our Services"
          items={services}
          renderItem={(service, index) => (
            <ServiceCard key={index} {...service} />
          )}
        />

        <ScrollableSection
          title="Meet Our Team"
          items={teamMembers}
          renderItem={(member, index) => <TeamMember key={index} {...member} />}
        />
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
