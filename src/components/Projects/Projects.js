import React, { Fragment } from 'react';
import AnchorLink from '../AnchorLink';
import NeonContentWrapper from '../NeonContentWrapper';
import Modal from '../Modal';
import { useModalReducer } from '../../reducers/useModalReducer';
import 'styles/projects.scss';

const Projects = ({ projectsMap }) => {
  const { activeProjectId, modalOpen, toggleModal } = useModalReducer();
  const activeProject = projectsMap.get(activeProjectId);

  return (
    <Fragment>
      <section id='projects'>
        <NeonContentWrapper color='cyan' title='Projects'>
          {Array.from(projectsMap).map(([key, { title, gitHubRepo, siteURL }]) => (
            <div key={key} className='project'>
              <h3>{title}</h3>
              <div>
                <AnchorLink type='project-link' href={gitHubRepo}>
                  Code
                </AnchorLink>
                <AnchorLink type='project-link' href={siteURL}>
                  Live Site
                </AnchorLink>
                <button onClick={() => toggleModal(key)}>open project</button>
              </div>
            </div>
          ))}
        </NeonContentWrapper>
      </section>
      {modalOpen && (
        <Modal title={activeProject.title} toggleModal={toggleModal}>
          Selected Project
        </Modal>
      )}
    </Fragment>
  );
};
export default Projects;
