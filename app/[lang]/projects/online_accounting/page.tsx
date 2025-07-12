import ProjectPageTemplate from '../../../components/Projects/ProjectPageTemplate/ProjectPageTemplate'
import { getDictionary } from '../../../locales/getDictionary'

export default async function OnlineAccountinng ({ params } : any) {
  const { lang } = await params 
  const t = await getDictionary(lang)
  
  return (
    <ProjectPageTemplate  
      projectIndex={2}
      t={t}
    />
  )
}

