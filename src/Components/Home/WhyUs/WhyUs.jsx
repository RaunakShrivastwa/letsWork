import React from 'react';
import './WhyUs.scss';

function WhyUs() {
    return (
      <div className="mb-4 why_us_container container">
        <div className="right_text">
          <h1 className="f40">
            Why <br />
            Next Big Technology?
          </h1>
          <p className="f18">
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
        </div>

        <div className="left_card">
          <div className="left_items custome_radius box_shadow">
            <img
              src="https://nextbigtechnology.com/wp-content/uploads/2023/06/Completed-Project.png"
              alt=""
            />
            <h2>100+</h2>
            <span>Completed Projects</span>
          </div>
          <div className="left_items custome_radius box_shadow">
            <img
              src="https://nextbigtechnology.com/wp-content/uploads/2023/06/Countries-Served.png"
              alt=""
            />
            <h2>10+</h2>
            <span>Country Served</span>
          </div>

          <div className="left_items custome_radius box_shadow">
            <img
              src="https://nextbigtechnology.com/wp-content/uploads/2023/06/Hours-of-Coding.png"
              alt=""
            />
            <h2>100000+</h2>
            <span>hour of coding</span>
          </div>

          <div className="left_items custome_radius box_shadow">
            <img
              src="https://nextbigtechnology.com/wp-content/uploads/2023/06/Hours-of-Coding.png"
              alt=""
            />
            <h2>2+</h2>
            <span>Years of Business</span>
          </div>
        </div>
      </div>
    );
}

export default WhyUs