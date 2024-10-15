import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Code, Database, Film, Server, Sliders, Globe } from "lucide-react";
import "./Services.scss";
import Banner from "../../commonComponents/Banner/Banner";
import WhyChhoseUs from "../About/WhyChhoseUs";
import Footer from "../../commonComponents/Footer/Footer";

const Services = () => {
  const services = [
    {
      title: "JavaScript Development",
      description:
        "Build dynamic and interactive web applications with cutting-edge JavaScript technologies.",
      icon: <Code size={24} />,
      color: "warning",
      image:
        "https://th.bing.com/th/id/OIP.3DyX19zZmh8OIvKzovjyTgHaE8?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      title: "React Development",
      description:
        "Create robust and scalable front-end applications using the popular React library.",
      icon: <Globe size={24} />,
      color: "info",
      image:
        "https://th.bing.com/th/id/OIP.3DyX19zZmh8OIvKzovjyTgHaE8?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      title: "Spring Boot Development",
      description:
        "Develop enterprise-grade applications with the powerful and flexible Spring Boot framework.",
      icon: <Server size={24} />,
      color: "success",
      image:
        "https://th.bing.com/th/id/OIP.3DyX19zZmh8OIvKzovjyTgHaE8?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      title: "Node.js Development",
      description:
        "Build fast and scalable server-side applications with Node.js.",
      icon: <Sliders size={24} />,
      color: "primary",
      image:
        "https://th.bing.com/th/id/OIP.3DyX19zZmh8OIvKzovjyTgHaE8?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      title: "API Integration",
      description:
        "Seamlessly connect your systems with third-party services through efficient API integrations.",
      icon: <Globe size={24} />,
      color: "secondary",
      image:
        "https://th.bing.com/th/id/OIP.3DyX19zZmh8OIvKzovjyTgHaE8?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      title: "Database Management",
      description:
        "Design, implement, and optimize database solutions for your data-driven applications.",
      icon: <Database size={24} />,
      color: "danger",
      image:
        "https://th.bing.com/th/id/OIP.3DyX19zZmh8OIvKzovjyTgHaE8?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      title: "Video Editing",
      description:
        "Transform raw footage into polished, professional videos that captivate your audience.",
      icon: <Film size={24} />,
      color: "dark",
      image:
        "https://th.bing.com/th/id/OIP.3DyX19zZmh8OIvKzovjyTgHaE8?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
  ];

  const technologies = [
    "JavaScript",
    "React",
    "Spring Boot",
    "Node.js",
    "RESTful APIs",
    "SQL",
    "NoSQL",
    "Adobe Premiere Pro",
  ];

  return (
    <div className="our-services vh-100 overflow-y-auto">
      {/* Main Banner */}

      <Banner
        image={"https://wallpapercave.com/wp/wp14232509.jpg"}
        title={"Welcome to Let's Work"}
        lead={"Empowering Your Digital Journey with Cutting-Edge Solutions"}
      />

      {/* Main Content */}
      <Container>
        {/* Description */}
        <Row className="mt-5">
          <Col>
            <h2>What We Offer</h2>
            <p>
              At Lets Work, we provide a comprehensive range of freelancing
              services to help businesses and individuals bring their ideas to
              life. Our team of skilled professionals specializes in various
              technologies and services, ensuring that your projects are
              executed with precision and creativity.
            </p>
          </Col>
        </Row>

        {/* Services */}
        <Row className="mb-5 bg-transparent">
          {services.map((service, index) => (
            <Col
              key={index}
              md={6}
              lg={4}
              className="mb-4 p-3 w-100 gap-2 custome_radius service_stack d-flex"
            >
              <Card className="shadow-sm w-100 border-0">
                <Card.Img
                  variant="top"
                  height={"400px"}
                  src={service.image}
                  alt={service.title}
                />
              </Card>

              <Card
                className="w-100 bg-transparent box_shadow border-0"
                style={{ borderRadius: "0px !important" }}
              >
                <Card.Header className={`service_head text-white`}>
                  <div className="d-flex align-items-center">
                    {service.icon}
                    <h3 className="ms-2 mb-0 h5">{service.title}</h3>
                  </div>
                </Card.Header>
                <Card.Body className="card_body">
                  <Card.Text id="card_text">{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Technologies */}
        <Row className="mb-5">
          <Col>
            <h3>Technologies We Use</h3>
            <div className="d-flex flex-wrap">
              {technologies.map((tech, index) => (
                <span key={index} className="badge bg-secondary me-2 mb-2 p-2">
                  {tech}
                </span>
              ))}
            </div>
          </Col>
        </Row>

        {/* Additional Information */}
        <Row>
          <Col>
            <h3>Why Choose Us?</h3>
            <WhyChhoseUs />
          </Col>
        </Row>

        {/* Articles */}
        <Row className="mt-5">
          <Col>
            <h3>Latest Articles</h3>
            <ul className="list-unstyled">
              <li>
                <a href="#">
                  The Future of JavaScript: Trends to Watch in 2024
                </a>
              </li>
              <li>
                <a href="#">
                  Building Scalable Applications with Spring Boot and React
                </a>
              </li>
              <li>
                <a href="#">
                  Best Practices for API Integration in Modern Web Development
                </a>
              </li>
              <li>
                <a href="#">
                  Choosing the Right Database for Your Project: SQL vs NoSQL
                </a>
              </li>
              <li>
                <a href="#">
                  Video Editing Tips to Enhance Your Marketing Content
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Services;
