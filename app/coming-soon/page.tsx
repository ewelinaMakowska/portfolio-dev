import type { Metadata } from 'next'
import '../styles/globals.scss'
import styles from './ComingSoon.module.scss'
import Em from '../assets/em.svg'

export const metadata: Metadata = {
  title: 'Ewelina Makowska — Coming Soon',
  description: 'Portfolio under construction.',
  robots: { index: false, follow: false },
}

export default function ComingSoon() {
  return (
    <div className={styles['wrapper']}>
      <Em className={styles['logo']} />
      <p className={styles['name']}>Ewelina Makowska</p>
      <div className={styles['divider']} />
      <h1 className={styles['heading']}>Work in progress</h1>
      <p className={styles['text']}>
        My portfolio is being reworked and will be available here soon.
        Thanks for stopping by.
      </p>
      <p className={styles['text']}>
        Moje portfolio jest w trakcie przebudowy i wkrótce będzie dostępne pod tym adresem.
        Dziękuję za odwiedziny.
      </p>
    </div>
  )
}
