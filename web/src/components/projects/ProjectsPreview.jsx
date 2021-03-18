import React from 'react';

import Project from './Project';

const ProjectsPreview = ({ projects }) => (
  <div className="grid w-11/12 max-w-screen-lg grid-cols-1 gap-8 mx-auto lg:w-full md:grid-cols-2 lg:grid-cols-3 ">
    {projects.map(project => (
      <Project key={project.id} {...project} /> // eslint-disable-line
    ))}
  </div>
);

export default ProjectsPreview;
