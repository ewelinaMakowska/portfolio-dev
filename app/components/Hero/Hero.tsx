import Image from "next/image"
import styles from './Hero.module.scss'
import Em from '../../assets/em.svg'
import Link from 'next/link'

export default function Hero ({ t } : any) {
  return (
    <section 
      id="hero"
      className={[styles['hero'],'animate-on-scroll', 'opacity-0', 'translate-y-6', 'transition-all', 'duration-700', 'ease-out'].join(' ')}
    >
      <div className={[styles['hero__inner'], 'width-limiter'].join(' ')}>
        <Link 
          href="/"
          className={styles['stripe']}
        >
          <Em /> <p>Ewelina Makowska</p>
        </Link>

        <div className={styles['text__wrapper']}>
          <h1 className={[styles['text']].join(' ')}>
            {t.home.headline1}<br/> {t.home.headline2}
          </h1>
          <p className={styles['text--smaller']}>
            {t.home.intro}
          </p>

          <div className={styles['cta__wrapper']}>
            <Link 
              href={`/${t.lang}#contact`}
              className={styles['cta']}
            >
              {t.home.callToAction1}
            </Link>
            <Link 
              href={`/${t.lang}#about-me`}
              className={[styles['cta'], styles['cta--secondary']].join(' ')}
            >
              {t.home.callToAction2}
            </Link>
          </div>
      
        </div>

        <div>
          <div className={[styles['portrait__wrapper']].join(' ')}>
            <Image 
              src="/my-portrait.png"
              alt="my photo"
              width={600}
              height={700}
              priority
              className={styles['portrait']}
            />
          </div>
        </div>
      </div>
    
    </section>
  )
}