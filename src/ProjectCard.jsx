import React from 'react';


function ProjectCard({ image, alt, title, description, link, linkText }) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100 shadow-sm">
        <img className="card-img-top" src={image} alt={alt} />
        <div className="card-body d-flex flex-column">
          <h4 className="card-title">{title}</h4>
          <p className="card-text flex-grow-1">{description}</p>
          <a href={link} className="btn btn-outline-dark mt-auto" target='_blank' rel="noopener noreferrer">
            {linkText || 'View Live'}
          </a>
        </div>
      </div>
    </div>
  );
}



export default ProjectCard;