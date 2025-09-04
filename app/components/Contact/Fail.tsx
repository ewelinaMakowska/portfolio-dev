import styles from './Contact.module.scss'

export default function Fail ({ t }: any) {
  return (
    <div className={styles['error-wrapper']}>
      <p>
        {t.contact.oops1}{' '}<a href="https://www.linkedin.com/in/ewelina-makowska-1993-fe/">{t.contact.oops2}</a>.
      </p>
    </div>
  )
}
