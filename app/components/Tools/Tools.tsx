import styles from './Tools.module.scss'
import {
  BracketsCurly,
  Layout,
  TestTube,
  Database,
  ChartLineUp,
  PaintBrush,
  Graph,
  Translate,
  Check
} from "@phosphor-icons/react/dist/ssr"

export default function Tools ({ t }: any) {
  interface SkillSubcategory {
    text: string
  }

  interface Skill {
    category: string,
    icon: any,
    items: Array<SkillSubcategory>
  } 

  const skills: Array<Skill> = [
    {
      category: t.home.languagesAndFrameworks,
      icon: BracketsCurly,
      items: [
        { text:  "HTML, CSS, SCSS" },
        { text:  "JavaScript, TypeScript" },
        { text:  "C#, .NET, ASP.NET Core" },
        { text:  "React, Next.js" },
        { text:  "Node.js, Express.js" },
        { text:  "Redux, TanStack Query" },
        { text:  "WebSockets, REST APIs" },
      ]
    },
    {
      category: t.home.uiAndStyling,
      icon: Layout,
      items: [
        { text:  "MUI" },
        { text:  "Tailwind CSS, Bootstrap" },
      ]
    },
    {
      category: t.home.buildTools,
      icon: TestTube,
      items: [
        { text:  "Webpack, Vite, Docker, Jest, Vitest, Playwright" },
        { text:  "Git, Bitbucket" },
      ]
    },
    {
      category: t.home.databasesAndOrm,
      icon: Database,
      items: [
        { text:  "PostgreSQL, MySQL, SQL" },
        { text:  "Sequelize, EF Core" },
      ]
    },
    {
      category: t.home.productAnalytics,
      icon: ChartLineUp,
      items: [
        { text:  "Amplitude" },
        { text:  "Tealium, Adobe Analytics" },
      ]
    },
    {
      category: t.home.designAndCreative,
      icon: PaintBrush,
      items: [
        { text:  "Adobe Photoshop, Adobe Illustrator" },
        { text:  t.home.graphicDesignAndUIPrinciples },
      ]
    },
    {
      category: t.home.dev,
      icon: Graph,
      items: [
        { text:  t.home.fAndB },
        { text:  t.home.architecture },
        { text:  t.home.oop },
        { text:  t.home.designPatterns },
        { text: t.home.cleanCode },
        { text: t.home.aiAssisted }
      ]
    },
    {
      category: t.home.lang,
      icon: Translate,
      items: [
        { text: t.home.pl },
        { text: t.home.en },
      ]
    },
  ]

  return (
    <section 
      id="tools"
      className={[styles['tools'], 'animate-on-scroll', 'opacity-0', 'translate-y-6', 'transition-all', 'duration-700', 'ease-out'].join(' ')}
    >    
    <div className='width-limiter'>
      <h2>{t.home.technologiesIntro}</h2>

      <div 
        className={[styles['list'], 'grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 2xl:gap-x-14 gap-y-14 justify-items-center items-stretch lg:auto-rows-fr'].join(' ')}
      >
        {skills.map(obj => {
          return (
            <article 
              key={obj.category}
              className={styles['list__item']}
            >
              <div className={styles['list__header']}>
                <obj.icon 
                  size={20}
                  className={styles['icon']}
                />
                <p>{obj.category}</p>
              </div>
              <ul>
                {obj.items.map((item, i) => {
                  return (
                    <li 
                      key={i}
                      className={styles['subcategory__item']}
                    >
                      <Check /> <p>{item.text}</p>
                    </li>
                  )
                })}
              </ul>
            </article>
          )
        })}
      </div>
      </div>
    </section>
  )
}
