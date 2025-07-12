import styles from './ProjectStack.module.scss'
import Chip from '../Chip/Chip'

interface ProjectStackProps {
  stack: string
}

export default function ProjectStack ({ stack } : ProjectStackProps) {
  return (
   <div>
    <div className={styles['stack-wrapper']}>
      {stack.split(', ').map((item, i) => {
        return (
          <Chip 
            text={item} 
            key={i}
            large
          />
        )
      })}
    </div>
   </div>
  )
}

