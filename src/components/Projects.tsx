import * as React from 'react';
import { useModalReducer } from '../reducers/useModalReducer';
import { Projects } from '../sharedTypes';
import { AnchorLink } from './AnchorLink';
import { Modal } from './Modal';
import { NeonContentWrapper } from './NeonContentWrapper';
import 'styles/projects.scss';

interface ProjectsSectionProps {
  projectsMap: Projects;
}

export const ProjectsSection = ({ projectsMap }: ProjectsSectionProps) => {
  const { activeProjectId, modalOpen, toggleModal } = useModalReducer();
  const activeProject = activeProjectId ? projectsMap.get(activeProjectId) : null;

  React.useEffect(() => {
    Array.from(projectsMap).forEach(([_, project]) => (new Image().src = project.image));
  }, [projectsMap]);

  return (
    <>
      <section id='projects'>
        <NeonContentWrapper color='cyan' title='Projects'>
          {Array.from(projectsMap).map(([key, { title }]) => (
            <div key={key} className='project'>
              <h3>{title}</h3>
              <button
                className='project-btn'
                onClick={() => toggleModal(key)}
                aria-label={`open ${title} in model`}
              />
            </div>
          ))}
        </NeonContentWrapper>
      </section>
      {modalOpen && activeProject != null ? (
        <Modal title={activeProject.title} toggleModal={toggleModal}>
          <div>
            <p className='project-description'>{activeProject.description}</p>
            <img
              className='project-image'
              src={activeProject.image}
              alt={`screenshot of ${activeProject.title} project`}
            />
            <p className='project-tech-used'>{activeProject.techUsed.join(', ')}</p>
          </div>
          <footer>
            {activeProject.linksConfig.hasGithub && (
              <AnchorLink type='project-link' href={activeProject.gitHubRepo}>
                <img src='images/github.svg' alt='icon of github cat' />
              </AnchorLink>
            )}
            {activeProject.linksConfig.hasHostedSite && (
              <AnchorLink type='project-link' href={activeProject.siteURL}>
                <img src='images/browser.svg' alt='icon of laptop' />
              </AnchorLink>
            )}
          </footer>
        </Modal>
      ) : null}
    </>
  );
};
