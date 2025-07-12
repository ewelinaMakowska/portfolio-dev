'use client'

import { useState } from 'react'
import Image from 'next/image'
import ProjectImagePlaceholder from './ProjectImagePlaceholder'

interface ProjectImageProps {
  src: string | null
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export default function ProjectImage({ src, alt, width, height, className, priority }: ProjectImageProps) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return <ProjectImagePlaceholder />
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      onError={() => setFailed(true)}
    />
  )
}
