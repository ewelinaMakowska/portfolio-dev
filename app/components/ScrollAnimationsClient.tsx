'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollAnimationsClient() {
  const pathname = usePathname()

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement
          el.style.transitionDelay = el.dataset.delay || `${i * 150}ms`
          el.classList.remove('opacity-0', 'translate-y-6', 'scale-95')
          el.classList.add('opacity-100', 'translate-y-0', 'scale-100')
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [pathname])

  return null
}
