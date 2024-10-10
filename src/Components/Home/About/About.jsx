import React from 'react';
import './About.scss';

function About() {
    return (
      <div className="about_container mb-5 align-items-center">
        <div className="about_img rounded-circle h-100">
          <img className="w-100" src="./img.jpg" alt="" />
        </div>
        <div className="about_text">
          <p className="about_btn f20">About Us</p>
          <h2>Transforming Core Business Activities Digitally</h2>
          <p className="f20">
            As a client, you are at the center of everything I do. I understand
            that every project is unique, and I am dedicated to providing
            tailored solutions that meet your specific goals. Whether you need a
            professional website, API integration, or multimedia services like
            video and image editing, I offer a complete range of services to
            suit your needs. From the moment we begin working together, you’ll
            have access to a streamlined project management system that allows
            you to track milestones, review progress, and provide feedback with
            ease. You’ll receive regular updates on the status of your project,
            ensuring complete transparency and giving you control over every
            aspect of the development process. Communication is key, and my
            platform allows for direct, secure interactions between us, so that
            no detail is missed. With flexible payment options that include
            stage-wise payments—an initial deposit, 50% at mid-project, and
            final payment on completion—you’ll always feel confident in your
            investment. As a skilled full-stack developer, I ensure your project
            is handled with professionalism, using the latest technologies and
            development practices. I prioritize delivering high-quality work on
            time, within budget, and tailored to your exact specifications.
            Whether it’s a small website or a large-scale project, I aim to
            exceed expectations and help you achieve your business goals.
          </p>
          <button className="get_in_touch_btn btn">Get In Touch</button>
        </div>
      </div>
    );
}

export default About