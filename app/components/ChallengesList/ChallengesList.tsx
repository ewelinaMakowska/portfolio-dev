import styles from './ChallengesList.module.scss'
import { FireSimple } from "@phosphor-icons/react/dist/ssr"

interface ChallengesListProps {
  challenges: any,
  t: any
}

export default function ChallengesList({ challenges, t }: ChallengesListProps) {
  return (
    <div>
      <h4>{t.projects.challenges}</h4>
      <ul className={styles['list']}>
        {
          challenges.map((el: any) => {
            return (
            <li key={el}>
              <FireSimple size={17} className={styles['icon'] }/>
              <span>{el}</span>
            </li>)
          })
        }
      </ul>
    </div>
  )
}

