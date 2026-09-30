interface ChecklistItem {
  text: string
  done: true | false | null
}

interface Project {
  tName: string
  name: string
  role: string
  url: string
  imageUrl: string | null
  type: 'Personal' | 'Commercial'
  github?: string | null
  website?: string | null
  description: string
  additionalDescription?: string
  stack: string
  challenges: string[]
  progress: ChecklistItem[] | null
  demoLink: string | null
  demoHostingDisclaimer: boolean
}

export default function (t: any): Project[] {
  return [
    {
      tName: 'stepstoneApply',
      name: t.projects.stepstoneApply.title,
      role: t.projects.stepstoneApply.role,
      url: '/projects/stepstone_apply',
      imageUrl: '/stepstone-apply.jpg',
      type: 'Commercial',
      website: 'https://www.thestepstonegroup.pl/produkty/',
      description: t.projects.stepstoneApply.desc,
      additionalDescription: t.projects.stepstoneApply.descLong,
      stack:
        'React, Next.js, TypeScript, TanStack Query, Redux, WebSockets, C#, .NET, PostgreSQL, Vitest, Playwright, Microservices, BFF, Amplitude, Tealium, Adobe Analytics, Claude Code',
      challenges: [...t.projects.stepstoneApply.challenges],
      progress: null,
      demoLink: null,
      demoHostingDisclaimer: false,
    },
    {
      tName: 'fakturownia',
      name: t.projects.fakturownia.title,
      role: t.projects.fakturownia.role,
      url: '/projects/fakturownia',
      imageUrl: '/fakturownia-2.png',
      type: 'Commercial',
      description: t.projects.fakturownia.desc,
      additionalDescription: t.projects.fakturownia.descLong,
      stack:
        'HTML, SCSS, JavaScript, jQuery, Handlebars, React, Adobe Photoshop, Adobe Illustrator, Docker',
      challenges: [...t.projects.fakturownia.challenges],
      progress: null,
      demoLink: 'fakturownia.pl',
      demoHostingDisclaimer: false,
    },
    {
      tName: 'onlineAccounting',
      name: t.projects.onlineAccounting.title,
      role: t.projects.onlineAccounting.role,
      url: '/projects/online_accounting',
      imageUrl: '/online-accounting.webp',
      type: 'Commercial',
      website: 'https://fakturownia.pl/samodzielna-ksiegowosc',
      description: t.projects.onlineAccounting.desc,
      additionalDescription: t.projects.onlineAccounting.descLong,
      stack:
        'HTML, SCSS, JavaScript, React (Hooks), Tailwind CSS, MUI, Webpack, Docker',
      challenges: [...t.projects.onlineAccounting.challenges],
      progress: null,
      demoLink: null,
      demoHostingDisclaimer: false,
    },
    {
      tName: 'boutique',
      name: t.projects.boutique.title,
      role: t.projects.boutique.role,
      url: '/projects/belle_and_co',
      imageUrl: '/belle_and_co.png',
      type: 'Personal',
      github: 'https://github.com/ewelinaMakowska/boutique',
      description: t.projects.boutique.desc,
      additionalDescription: t.projects.boutique.descLong,
      stack:
        'HTML, SCSS, TypeScript, React, Redux, Next.js, Node.js, Express.js, MySQL, Sequelize, MUI, Docker, Adobe Photoshop, Adobe Illustrator',
      challenges: [...t.projects.boutique.challenges],
      progress: t.projects.boutique.progress.map(
        (text: string, i: number): ChecklistItem => ({
          text,
          done: [true, true, true, true, false, false, false, false, false][i] ?? false,
        })
      ),
      demoLink: 'https://boutique-nine-ruby.vercel.app',
      demoHostingDisclaimer: true,
    },
    {
      tName: 'thisPortfolio',
      name: t.projects.thisPortfolio.title,
      role: t.projects.thisPortfolio.role,
      url: '/projects/this_portfolio',
      imageUrl: `/this-portfolio-${t.lang}.png`,
      type: 'Personal',
      github: 'https://github.com/ewelinaMakowska/portfolio-dev',
      description: t.projects.thisPortfolio.desc,
      additionalDescription: t.projects.thisPortfolio.descLong,
      stack: 'React, Next.js, TypeScript, Tailwind CSS, SCSS, Next.js API Routes, zod, Resend, Docker',
      challenges: [],
      progress: null,
      demoLink: 'https://portfolio-dev-ewelinamakowskas-projects.vercel.app',
      demoHostingDisclaimer: false,
    },
  ]
}
