import type { Metadata } from "next"
import "../../app/styles/globals.scss"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import { redirect } from "next/navigation"
import supportedLanguages, { defaultLanguage } from "../locales/supportedLanguages"
import { type Locale } from '../locales/getDictionary'
import { getDictionary } from "../locales/getDictionary"

const META: Record<string, Metadata> = {
  en: {
    title: "Ewelina Makowska — Full-Stack Developer",
    description: "Full-stack developer — React, Next.js, TypeScript, .NET, Node.js, PostgreSQL.",
  },
  pl: {
    title: "Ewelina Makowska — Full-Stack Developer",
    description: "Full-stack deweloperka — React, Next.js, TypeScript, .NET, Node.js, PostgreSQL.",
  },
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const { lang } = await params
  return META[lang] ?? META[defaultLanguage]
}

export default async function LangLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode,
  params: { lang: string }
}>) {
  const { lang } = await params
  if (!supportedLanguages.includes(lang as Locale)) redirect(`/${defaultLanguage}`)
  const t = await getDictionary(lang)

  return (
    <>
      <header>
        <Navbar t={t} />
      </header>
      <main className="flex-1">
        {children}
      </main>
      <Footer t={t} />
    </>
  )
}
