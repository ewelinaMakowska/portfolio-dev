import styles from './Contact.module.scss'
import ContactForm from './ContactForm'
import { FileArrowDown } from "@phosphor-icons/react/dist/ssr"
import LinkedIn from '../../assets/linkedin.svg'
import { CV_PATH } from '../../constants'

export default function Contact ({ t }: any) {
  return (
    <section 
      id="contact"
      className={[styles['contact'], 'animate-on-scroll', 'opacity-0', 'translate-y-6', 'transition-all', 'duration-700', 'ease-out'].join(' ')}
    >    
      <div className='width-limiter'>
        <h2>{t.contact.title}</h2>
        <div
            className={['grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-10'].join(' ')}
        >
          <div>
            <ContactForm t={t} />
          </div>

          <div className={styles['text-links-outer-wrapper']}>
            <div className={styles['text-links-wrapper']}>
              <p className={styles['text']}>
                {t.contact.intro}{CV_PATH && t.contact.introResume}
              </p>

              <div className={styles['links-wrapper']}>
                <a 
                  href="https://www.linkedin.com/in/ewelina-makowska-1993-fe/"
                  className={styles['contact-link']}
                >
                  <LinkedIn 
                    height={20} 
                    width={40}
                  />
                  <span>LinkedIn</span>
                </a>

                {CV_PATH && (
                  <a 
                    href={CV_PATH}
                    download
                    className={styles['contact-link']}
                  >
                    <FileArrowDown size={20} /> 
                    <span>{t.contact.resume}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
     </div>
    </section>
  )
}
