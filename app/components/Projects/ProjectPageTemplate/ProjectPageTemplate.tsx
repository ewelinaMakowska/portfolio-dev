import data from '../ProjectsData'
import ProgressList from '../../ProgressList/ProgressList'
import ProjectImage from '../ProjectImage'
import styles from './ProjectPageTemplate.module.scss'
import ProjectStack from '../../ProjectStack/ProjectStack'
import ChallengesList from '../../ChallengesList/ChallengesList'
import PrevAndNextBtns from '../PrevAndNextBtns'

interface ProjectPageTemplateProps {
  projectIndex: number
  t: any
}

export default function ProjectPageTemplate({ projectIndex, t }: ProjectPageTemplateProps) {
  const projects = data(t)
  const projectData = projects[projectIndex]
  const tName = projectData.tName
  return (
    <div className="page">
      <div className='width-limiter'>
        <h2>{projectData.name}</h2>
        <ProjectImage
          src={projectData.imageUrl}
          alt="Project Screenshot"
          width={1500}
          height={400}
          className="main-img"
          priority
        />

        <ProjectStack stack={projectData.stack} />

        <p className="main-text mb-4">
          <span>{projectData.description} </span>
          {projectData.additionalDescription && <span>{projectData.additionalDescription}</span>}
        </p>

        {projectData.demoLink && (
          <p className={['main-text', styles['demo']].join(' ')}>
            Demo:{' '}
            <a href={projectData.demoLink} target="_blank" rel="noopener noreferrer">
              {projectData.demoLink}
            </a>
            . {projectData.demoHostingDisclaimer && <span>{t.projects.demoHostingDisclaimer}</span>}
          </p>
        )}

        {projectData.website && (
          <p className={['main-text', styles['demo']].join(' ')}>
            {t.projects.website}:{' '}
            <a href={projectData.website} target="_blank" rel="noopener noreferrer">
              {projectData.website}
            </a>
          </p>
        )}

        {projectData.github && (
          <p className={['main-text', styles['demo']].join(' ')}>
            GitHub:{' '}
            <a href={projectData.github} target="_blank" rel="noopener noreferrer">
              {projectData.github}
            </a>
          </p>
        )}

        {projectData.role && (
          <p className={['main-text', styles['demo']].join(' ')}>
            {projectData.role}
          </p>
        )}

        {t.projects[tName].challengesTitle && <h3>{t.projects[tName].challengesTitle}</h3>}

        <div className={styles['boxes-wrapper']}>
          {projectData.progress && projectData.progress.length > 0 && (
            <article className={styles['box']}>
              <ProgressList progress={projectData.progress} t={t} />
            </article>
          )}

          {projectData.challenges && projectData.challenges.length > 0 && (
            <article className={styles['box']}>
              <ChallengesList challenges={projectData.challenges} t={t} />
            </article>
          )}
        </div>

        <PrevAndNextBtns projectsData={projects} t={t} index={projectIndex} />
      </div>
    </div>
  )
}