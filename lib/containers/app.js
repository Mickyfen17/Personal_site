import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from '../components/Home';
import ProjectDetails from '../components/ProjectDetails';
import ProjectList from '../Data/ProjectList';


export default class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={ Home } />
        <Route path='/project/:id' render={({ match }) => {
          const projectToDisplay = ProjectList.find(project => match.params.id === project.title);
          return <ProjectDetails { ...projectToDisplay } />
        }}
      />
      </div>
    );
  }
}
