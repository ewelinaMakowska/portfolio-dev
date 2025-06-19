import styles from './ProgressList.module.scss'
import { Check, X } from "@phosphor-icons/react/dist/ssr"

interface ProgressListProps {
  progress: Array<any>
  t: any
}

export default function ProgressList({ progress, t }: ProgressListProps) {

  return (
    <div>
      <h4>{t.projects.progress}</h4>
      <ul className={styles['list']}>
        {
          progress.map(el => {
            return (
            <li key={el.text}>
              { el.done && <Check className={styles['check']} /> }
              { !el.done && <X className={styles['x']} /> }
              <span>{el.text}</span>
            </li>)
          })
        }
      </ul>
    </div>
  )
}

