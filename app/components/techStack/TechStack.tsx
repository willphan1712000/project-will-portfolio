import { CSSProperties } from 'react'
import type { IconType } from 'react-icons'
import { BiNetworkChart } from 'react-icons/bi'
import { FaJava } from 'react-icons/fa'
import { MdApi } from 'react-icons/md'
import {
  SiBun,
  SiClaude,
  SiCss3,
  SiDocker,
  SiDotnet,
  SiFlask,
  SiFlyway,
  SiGithub,
  SiGooglegemini,
  SiHibernate,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiNpm,
  SiOpenai,
  SiPhp,
  SiPostman,
  SiPrisma,
  SiPython,
  SiRadixui,
  SiReact,
  SiSpringboot,
  SiStripe,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWebpack,
  SiWordpress,
} from 'react-icons/si'
import { TbBinaryTree, TbBrandCSharp, TbBraces } from 'react-icons/tb'
import { VscVscode } from 'react-icons/vsc'
import styles from './TechStack.module.css'
import { ModernButton } from '@willphan1712000/frontend';
import config from '@/app/static/config';

type TechItem = {
  name: string
  icon: IconType
  background: string
  color?: string
  iconColor?: string
}

const techStacks: TechItem[] = [
  { name: 'CHATGPT', icon: SiOpenai, background: '#10b89b' },
  { name: 'GEMINI', icon: SiGooglegemini, background: '#9a85c6' },
  { name: 'CLAUDE', icon: SiClaude, background: '#df805c' },
  { name: 'HTML5', icon: SiHtml5, background: '#f25822' },
  { name: 'CSS', icon: SiCss3, background: '#2d7fbe' },
  { name: 'JAVASCRIPT', icon: SiJavascript, background: '#383838', color: '#f5f5f5', iconColor: '#f7df1e' },
  { name: 'TYPESCRIPT', icon: SiTypescript, background: '#1982d1' },
  { name: 'C#', icon: TbBrandCSharp, background: '#259b1f' },
  { name: '.NET', icon: SiDotnet, background: '#5b31d7' },
  { name: 'JAVA', icon: FaJava, background: '#f39200' },
  { name: 'PHP', icon: SiPhp, background: '#8080b8' },
  { name: 'PYTHON', icon: SiPython, background: '#497fb0', iconColor: '#ffd84d' },
  { name: 'MYSQL', icon: SiMysql, background: '#4e83b0' },
  { name: 'DESIGN PATTERNS', icon: BiNetworkChart, background: '#148d90' },
  { name: 'DATA STRUCTURES', icon: TbBinaryTree, background: '#ff950f' },
  { name: 'ALGORITHMS', icon: TbBraces, background: '#df2d2d' },
  { name: 'REST API', icon: MdApi, background: '#1f84f3' },
  { name: 'SWAGGER', icon: SiSwagger, background: '#49d900' },
  { name: 'REACT', icon: SiReact, background: '#262933', iconColor: '#61dafb' },
  { name: 'NODE.JS', icon: SiNodedotjs, background: '#7cb569' },
  { name: 'NEXT', icon: SiNextdotjs, background: '#000000' },
  { name: 'PRISMA', icon: SiPrisma, background: '#4e8edc' },
  { name: 'VERCEL', icon: SiVercel, background: '#000000' },
  { name: 'DOCKER', icon: SiDocker, background: '#31b4ed' },
  { name: 'REACT NATIVE', icon: SiReact, background: '#2b2d38', iconColor: '#61dafb' },
  { name: 'TAILWINDCSS', icon: SiTailwindcss, background: '#49c0c7' },
  { name: 'NPM', icon: SiNpm, background: '#d53a35' },
  { name: 'RADIX UI', icon: SiRadixui, background: '#161616' },
  { name: 'JQUERY', icon: SiJquery, background: '#1f7ac6' },
  { name: 'POSTMAN', icon: SiPostman, background: '#ff6c3d' },
  { name: 'WEBPACK', icon: SiWebpack, background: '#9ad4f8', color: '#2b2b2b' },
  { name: 'BUN', icon: SiBun, background: '#000000' },
  { name: 'GITHUB', icon: SiGithub, background: '#141414' },
  { name: 'VISUAL STUDIO CODE', icon: VscVscode, background: '#147dda' },
  { name: 'WORDPRESS', icon: SiWordpress, background: '#2d83d2' },
  { name: 'FLASK', icon: SiFlask, background: '#000000' },
  { name: 'STRIPE', icon: SiStripe, background: '#676ee0' },
  { name: 'SPRING BOOT', icon: SiSpringboot, background: '#70bb3f' },
  { name: 'FLYWAY', icon: SiFlyway, background: '#e20000' },
  { name: 'HIBERNATE', icon: SiHibernate, background: '#727e88' },
  { name: 'ASP.NET', icon: SiDotnet, background: '#5b31d7' },
  { name: 'ENTITY FRAMEWORK', icon: SiDotnet, background: '#5b31d7' },
  { name: 'NOTION', icon: SiNotion, background: '#000000' },
]

const TechStack = () => {
  const marqueeItems = [...techStacks, ...techStacks]

  return (
    <section className={styles.container} aria-label="Tech stack">
      <div className={styles.row}>
        <div className={styles.fadeLeft} aria-hidden="true" />
        <div className={styles.fadeRight} aria-hidden="true" />
        <div className={styles.track} style={{ '--duration': '75s', '--delay': '0s' } as CSSProperties}>
          {marqueeItems.map(({ name, icon: Icon }, index) => (
            <ModernButton
                key={`${name}-${index}`}
                first={config.primaryColor}
                aria-hidden={index >= techStacks.length}
                className={styles.item}
                hover={true}
                shadow={true}
            >
                <Icon className={styles.icon} aria-hidden="true" />
                <span className={styles.label}>{name}</span>
            </ModernButton>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
