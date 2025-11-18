import styles from './Footer.module.scss'
import LinkedIn from '../../assets/linkedin.svg'

export default function Footer ({ t } : any) {
  return (
    <footer 
      className={styles['footer']}
    >    
      <p>@ {new Date().getFullYear()} Ewelina Makowska &nbsp;|&nbsp; {t.footer.allRights}</p>
      <div
        className={styles['links']}
      >
        <a 
          href="https://www.linkedin.com/in/ewelina-makowska-1993-fe/"
          className={styles['link']}
        >
          <LinkedIn 
            height={40} 
            width={40}
          />
        </a>
      </div>
    </footer>
  )
}
