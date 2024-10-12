import React from "react";

const TeamMember = ({ name, role, background, socialLinks, avtar }) => (
  <div className="card px-3 bg-transparent team-card h-100 border-0 shadow-sm custome_radius ">
    <div className="card-body card_body_team box_shadow mb-2 custome_radius text-center">
      <div className="avatar mb-3">
        <img className="w-100" src={avtar} alt="" />
      </div>
      <h5 className="card-title">{name}</h5>
      <p className="card-text ">{role}</p>
      <p className="card-text team_desc small">{background}</p>
      <div className="mt-1 sso p-2 d-flex px-5 justify-content-between align-items-center">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary me-2"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default TeamMember;
