import React from 'react';

const TechList = ({ techUsed }) => (
  <React.Fragment>
    {techUsed.map(tech => <h4 key={tech}>{tech}</h4>)}
  </React.Fragment>
);

export default TechList;
