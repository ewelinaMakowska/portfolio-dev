import styles from './AboutMe.module.scss'
import Image from 'next/image'

export default function AboutMe ({ t } : any) {
  return (
    <section 
      id="about-me"
      className={[styles['about-me'], 'animate-on-scroll', 'opacity-0', 'translate-y-6', 'transition-all', 'duration-700', 'ease-out'].join(' ')}
    >    
      <div className="width-limiter">
        <div className={styles['my-small-portrait__wrapper']}>
          <Image 
            src="/my-portrait.png"
            alt="my photo"
            width={600}
            height={700}
            className={styles['my-small-portrait']}
          />
        </div>
        <p>
          {t.home.about}
        </p>
      </div>
    </section>
  )
}