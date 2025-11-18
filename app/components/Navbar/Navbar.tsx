'use client'

import styles from './Navbar.module.scss'
import { useState, useEffect } from 'react'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import Em from '../../assets/em.svg'
import { usePathname } from 'next/navigation'
import { List } from "@phosphor-icons/react/dist/ssr"
import supportedLanguages from '../../locales/supportedLanguages'
import Link from 'next/link'
import { CV_PATH } from '../../constants'

export default function Navbar ({ t } : any) {
  const pathname = usePathname()
  const isMobile = useMediaQuery('(max-width: 639px)')

  const [overlayOpen, setOverlayOpen] = useState(false)
  const toggleOverlay = () => setOverlayOpen(!overlayOpen)

  const homePathnames = ['/', ...supportedLanguages.map(l => '/' + l)]
  const isHome = homePathnames.includes(pathname)

  const [scrolled, setScrolled] = useState(false)
  const opaqueNavbar = (isHome && scrolled) || (!isHome && (scrolled || overlayOpen)) || (isMobile && scrolled) 
  const navbarClasses = opaqueNavbar
    ? [styles['navbar'], styles['navbar--scrolled']].join(' ')
    : [styles['navbar']].join(' ')

  const showLogo = !isHome || opaqueNavbar

  const navLinks = [
    {
      text: t.navbar.skills,
      url: isHome? '#tools' : `/${t.lang}/#tools`
    },
    {
      text: t.navbar.projects,
      url: isHome? '#projects' : `/${t.lang}/#projects`
    },
    {
      text: t.navbar.contact,
      url: isHome? '#contact' : `/${t.lang}/#contact`
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const changeLanguage = (lang: string) => {
    const segments = pathname.split('/')
    segments[1] = lang
    const newPath = segments.join('/') || '/'
    window.location.href = newPath
  }

  return (
    <nav className={navbarClasses}>    
      {showLogo ? (
        <Link href="/" className={styles['logo']}>
          <Em />
        </Link>
      ) : (
        <div/>
      )}

      <div className={[styles['links-wrapper'], 'hidden', 'md:flex'].join(' ')}>
        {navLinks.map(link => (
          <Link key={link.text} href={link.url}>
            {link.text}
          </Link>
        ))}
        {CV_PATH && <a href={CV_PATH} download>{t.navbar.resume}</a>}
        <div className={styles['lang-switch']}>
          <button onClick={() => changeLanguage('en')}>EN</button>
          <span>|</span>
          <button onClick={() => changeLanguage('pl')}>PL</button>
        </div>
      </div>

      <div className={[styles['mobile-navbar'], 'block', 'md:hidden'].join(' ')}>
        <button className={styles['toggle-btn']} onClick={toggleOverlay}>
          <List size={30} />
        </button>

        {overlayOpen && (
          <div
            className={[
              styles['overlay'],
              'fixed',
              'inset-0',
              'flex',
              'flex-col',
              'items-center',
              'justify-center',
              'space-y-8',
              'transition-all',
              'duration-300',
              'md:hidden',
            ].join(' ')}
          >
            <div>
              {navLinks.map(link => (
                <Link key={link.text} href={link.url} onClick={toggleOverlay}>
                  {link.text}
                </Link>
              ))}
              {CV_PATH && (
                <a 
                  href={CV_PATH} 
                  download>
                    {t.navbar.resume}
                  </a>
              )}
              <div className={styles['lang-switch']}>
                <button onClick={() => changeLanguage('en')}>EN</button>
                <span>|</span>
                <button onClick={() => changeLanguage('pl')}>PL</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
