import { NextResponse } from 'next/server'
import { defaultLanguage } from './app/locales/supportedLanguages'

export function middleware(request: Request) {
  const url = new URL(request.url)
  if (url.pathname === '/') return NextResponse.redirect(new URL(`/${defaultLanguage}`, request.url))
  return NextResponse.next()
}

export const config = {
  matcher: ['/'],
}