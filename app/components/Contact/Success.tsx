import styles from './Contact.module.scss'

export default function Success ({ t }: any) {
  return (
    <div className={styles['success-wrapper']}>
      <p>
        {t.contact.thanks}
      </p>
    </div>
  )
}
