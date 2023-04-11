import instagram from "@assets/instagram.png"
import ss1 from "@assets/ss1.png"
import ss2 from "@assets/ss2.png"
import ss3 from "@assets/ss3.png"

// welcome
export const welcomeCopyright = `/* \n* Copyright (c) ${new Date().getFullYear()} Ihsan Fajar Ramadhan. All Rights Reserved \n* This is licensed software from (castrix.github.io), for limitations \n* and restrictions contact your company contract manager.  \n*/ \n`
export const welcomeConsole = [
  {
    sequence: [2000 + 500, 'console'],
    className: 'text-variable whitespace-pre-line',
  },
  {
    sequence: [2200 + 500, '.log('],
    className: 'text-function whitespace-pre-line',
  },
  {
    sequence: [2400 + 500, '“Welcome to:”'],
    className: 'text-string whitespace-pre-line',
  },
  {
    sequence: [2600 + 500, ')'],
    className: 'text-function whitespace-pre-line',
  },
  {
    sequence: [2700 + 500, '// Welcome to:'],
    className: 'text-secondary whitespace-pre-line ml-3',
  },
]
export const welcomeCall = [
  {
    sequence: [2900 + 500, 'myPortofolio('],
    className: 'text-function whitespace-pre-line',
  },
  {
    sequence: [3100 + 500, 'ihsanFajarRamadhan'],
    className: 'text-variable whitespace-pre-line',
  },
  {
    sequence: [3300 + 500, ')'],
    className: 'text-function whitespace-pre-line',
  },
  {
    sequence: [3400 + 500, '// { name: “Ihsan Fajar Ramadhan”, ... }'],
    className: 'text-secondary whitespace-pre-line ml-3',
  },
]
export const welcomeHover = `// Hover my silhouette to render the picture`
export const welcomeCV = `// Click here to get the CV!`
export const CV_URL = "https://docs.google.com/document/d/1WKayGDe8uuSrcC3yx1zQ2EgY3svRJ6ZLPRfJ6jTqgo8/edit?usp=sharing"

// about
export const aboutGreetings = [
  'Hi there!\nHere you can find about my background.',
  'Hi there!\nHere you can find about my interest.',
  'Hi there!\nHere you can find about my career progression.',
]

export const aboutSections = {
  background: 'Background',
  interest: 'Interest',
  career: 'Career',
} as const

export const aboutMessages = {
  [aboutSections.background]: [
    "Hi, nice to meet you! I'm from Indonesia, I like to travel and try to feel different kinds of atmosphere in different cities. I have Engineering degree (Bachelor of Applied Engineering from STTN-BATAN Yogyakarta). I specialized in Frontend Engineer, I've been involved in many different kinds of projects, I also have experience in mentoring.",
  ],
  [aboutSections.interest]: [
    "Hi, nice to meet you! I'm from Indonesia, I like to travel and try to feel different kinds of atmosphere in different cities. I have Engineering degree (Bachelor of Applied Engineering from STTN-BATAN Yogyakarta). I specialized in Frontend Engineer, I've been involved in many different kinds of projects, I also have experience in mentoring.",
  ],
}

export const timeline = [
  {
    date: '2022 - present',
    position: 'Frontend Engineer (PAAS)',
    location: 'Accelbyte INC. Remote, GMT+7',
    description:
      'I build things here, mostly using react. I responsible to execute clients customization, disscuss with teamates to find best solutions, give feedback to peers such as code reviews.',
    icon: 'https://accelbyte.io/hubfs/ab.png',
  },
  {
    date: '2021 - 2022',
    position: 'Frontend Engineer (SAAS), Mentoring',
    location: 'Refactory. Indonesia',
    description:
      'New responsibility: lead a project and mentor new hires. Most of the new hires are fresh graduates with goal to be groomed as engineer. I mentored 3 students for months while I was working on my developer works as well.',
    icon: 'https://refactory.id/android-icon-192x192.png',
  },
  {
    date: '2020 - 2021',
    position: 'Frontend Engineer (SAAS)',
    location: 'Refactory. Indonesia',
    description:
      "The beginning of my professional career. I work with many wonderfull people and I learned so many things here. I'm collaborating with Lion Parcel team from Lion Group.",
    icon: 'https://refactory.id/android-icon-192x192.png',
  },
  {
    date: '2013 - 2020',
    position: 'IT enthusiast',
    location: 'Indonesia',
    description:
      'I focused on my study, graduated from university at 2020. I had an advantage in university because I was self-taugh programmer.',
    icon: 'https://www.blogger.com/about/favicon/android-chrome-192x192.png',
  },
  {
    date: '2011 - 2013',
    position: 'IT enthusiast',
    location: '',
    description:
      'I was active in Blogger community, I was a curious kid and always trying to figure out how things work. My journey in self-taught programming begins here. I made my first .NET software and Blog.',
    icon: 'https://learn.microsoft.com/favicon.ico',
  },
]

export const socials = [
  {
    name: "email",
    value: "castrix.ihsan@gmail.com",
    icon: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico"
  },
  {
    name: "github",
    value: "https://github.com/castrix",
    icon: "https://github.githubassets.com/apple-touch-icon-144x144.png"
  },
  {
    name: "instagram",
    value: "https://www.instagram.com/ihsanfr0/",
    icon: instagram
  },
]

export type Hyperlinks = {label: string, url: string}[];

export const projects = [
  {
    screenshot: ss1,
    title: "Product: AccelByte",
    subTitle: "Accelbyte INC",
    description: "AccelByte is a game backend platform that supports cross-platform, storage, monetization, social, matchmaking, and more. The scope that I work are Admin Dashboard, Player Portal and client customization features.",
    hyperlinks: [
      {
        label: "accelbyte.io",
        url: "https://accelbyte.io/"
      }
    ]
  },
  {
    screenshot: ss2,
    title: "Product: Lion Parcel Core",
    subTitle: "Lion Parcel",
    description: "Lion Parcel is Indonesian logistic provider. I collaborated with Lion Parcel team to develop their Core System from early development until MVP and released to public nationwide.",
    hyperlinks: [
      {
        label: "lionparce.com",
        url: "https://lionparcel.com/"
      }
    ]
  },
  {
    screenshot: ss3,
    title: "Product: Sidig.id",
    subTitle: "Gamatechno",
    description: "Sidig is All-in-one distributor platform to optimize chain supply and after sales management. I took a role as Frontend Lead to rewrite the Sidig.id webiste from pure html/jquery/css to modern JS framework JS framework.",
    hyperlinks: [
      {
        label: "sidig.id",
        url: "https://sidig.id/"
      },
    ],
  },
  {
    screenshot: "",
    title: "Product: Aktiva",
    subTitle: "PT. SDK Indonesia",
    description: "Point of Sales accounting APP. I rewrote the website app from html/css/js to modern JS framework.",
    hyperlinks: [
      {
        label: "Aktiva",
        url: "https://www.sdkindonesia.co.id/work/berkat-pos"
      },
    ],
  },
]