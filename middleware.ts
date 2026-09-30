import { NextResponse } from 'next/server'
import { defaultLanguage } from './app/locales/supportedLanguages'
import { COMING_SOON } from './app/constants'

const COMING_SOON_PATH = '/coming-soon'

export function middleware(request: Request) {
  const url = new URL(request.url)

  if (COMING_SOON) {
    if (url.pathname === COMING_SOON_PATH) return NextResponse.next()
    return NextResponse.rewrite(new URL(COMING_SOON_PATH, request.url))
  }

  if (url.pathname === COMING_SOON_PATH) {
    return NextResponse.redirect(new URL(`/${defaultLanguage}`, request.url))
  }
  if (url.pathname === '/') return NextResponse.redirect(new URL(`/${defaultLanguage}`, request.url))
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
