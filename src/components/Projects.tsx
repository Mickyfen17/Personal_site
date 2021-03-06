import * as React from 'react';
import { AnchorLink } from './AnchorLink';
import { NeonContentWrapper } from './NeonContentWrapper';
import { Modal } from './Modal';
import { useModalReducer } from '../reducers/useModalReducer';
import { Projects } from '../reducers/useAppReducer';
import 'styles/projects.scss';

interface ProjectsSectionProps {
  projectsMap: Projects;
}

export const ProjectsSection = ({ projectsMap }: ProjectsSectionProps): JSX.Element => {
  const { activeProjectId, modalOpen, toggleModal } = useModalReducer();
  const activeProject = projectsMap.get(activeProjectId);

  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Array.from(projectsMap).forEach(([_, project]) => (new Image().src = project.image));
  }, [projectsMap]);

  return (
    <React.Fragment>
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
      {modalOpen && (
        <Modal title={activeProject.title} toggleModal={toggleModal}>
          <div>
            <p className='project-description'>{activeProject.description}</p>
            <img
              className='project-image'
              src={activeProject.image}
              alt={`screenhot of ${activeProject.title} project`}
            />
            <p className='project-tech-used'>{activeProject.techUsed.join(', ')}</p>
          </div>
          <footer>
            <AnchorLink type='project-link' href={activeProject.gitHubRepo}>
              <img src={activeProject.icons.git} alt='icon of github cat' />
            </AnchorLink>
            <AnchorLink type='project-link' href={activeProject.siteURL}>
              <img src={activeProject.icons.site} alt='icon of laptop' />
            </AnchorLink>
          </footer>
        </Modal>
      )}
    </React.Fragment>
  );
};
