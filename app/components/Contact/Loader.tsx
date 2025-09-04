import styles from './Contact.module.scss'
import { CircleNotch } from "@phosphor-icons/react/dist/ssr"

export default function Loader ({ t }: any) {
  return (
    <div className={styles['loader-wrapper']}>
      <div className={styles['loader-inner-wrapper']}>
        <CircleNotch 
          size={60}
          className='animate-spin'
        />
      </div>
      <p className="animate-pulse">{t.contact.sending}</p>
    </div>
  )
}
