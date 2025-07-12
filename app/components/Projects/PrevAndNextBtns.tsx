import Link from 'next/link'
import styles from './PrevAndNextBtns.module.scss'
import { CaretRight, CaretLeft } from "@phosphor-icons/react/dist/ssr"

interface PrevAndNextBtnsProps {
  projectsData: Array<any>
  t: any
  index: number
}

export default function PrevAndNextBtns({ projectsData, t, index } : PrevAndNextBtnsProps) {
  return (
    <div className={styles['wrapper']}>
      {index >= 1 && (
        <Link href={`/${t.lang}${projectsData[index - 1]?.url}`}>
          <CaretLeft size={18} /> <span>{t.projects.prevProject}</span>
        </Link>
      )}
      {index <= projectsData.length - 2 && (
        <Link href={`/${t.lang}${projectsData[index + 1]?.url}`}>
          <span>{t.projects.nextProject}</span> <CaretRight size={18} />
        </Link>
      )}
    </div>
  )
}
