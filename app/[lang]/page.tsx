import Hero from "../components/Hero/Hero"
import AboutMe from "../components/AboutMe/AboutMe"
import Tools from "../components/Tools/Tools"
import Projects from "../components/Projects/Projects"
import Contact from "../components/Contact/Contact"
import { getDictionary } from "../locales/getDictionary"
import ScrollAnimationsClient from "../components/ScrollAnimationsClient"

export default async function Home({ params }: any) {
  const { lang } = await params
  const t = await getDictionary(lang)

  return (
    <>
      <ScrollAnimationsClient />
      <Hero t={t} />
      <main>
        <AboutMe t={t} />
        <Tools t={t} />
        <Projects t={t} />
        <Contact t={t} />
      </main>
    </>
  )
}
