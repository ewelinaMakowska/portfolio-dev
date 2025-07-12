import styles from './Projects.module.scss'
import projects from './ProjectsData'
import Chip from '../Chip/Chip'
import ProjectImage from './ProjectImage'
import Link from 'next/link'

export default function Projects({ t }: any) {
  const projectsData = projects(t)

  return (
    <section
      id="projects"
      className={[
        styles['projects'],
        'animate-on-scroll',
        'opacity-0',
        'translate-y-6',
        'transition-all',
        'duration-700',
        'ease-out',
      ].join(' ')}
    >
      <div className='width-limiter'>
        <h2>{t.home.projs}</h2>
        <p className="main-text">
          {t.home.projDesc1}
        </p>
        <div
          className={[
            styles['list'],
            'grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 2xl:gap-x-14 gap-y-14 place-items-center',
          ].join(' ')}
        >
          {projectsData.map((project) => (
            <article key={project.name} className={styles['list__item']}>
              <div className={styles['img-wrapper']}>
                <ProjectImage
                  src={project.imageUrl}
                  alt={`${project.name} screenshot`}
                  width={600}
                  height={700}
                />
                <div className={styles['img-cover']}></div>
              </div>

              <div className={styles['descr-wrapper']}>
                <p>{project.name}</p>
                <div className={styles['stack-wrapper']}>
                  {project.stack.split(', ').map((item, i) => (
                    <Chip text={item} key={i} />
                  ))}
                </div>
                <p className={styles['description']}>{project.description}</p>
                <Link href={`${t.lang}${project.url}`} className={styles['more-btn']}>
                  {t.projects.more}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
