import styles from './Projects.module.scss'
import { 
  Crane
} from "@phosphor-icons/react/dist/ssr"

export default function ProjectImagePlaceholder () {
  return (
   <div className={styles['img-placeholder']}>
    <div className={styles['crane-icon__wrapper']}>
      <Crane size={60} />
    </div>
   </div>
  )
}
