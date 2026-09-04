import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BrainCircuit,
  Check,
  CloudCog,
  Code2,
  Clock3,
  Copy,
  GraduationCap,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  Moon,
  Send,
  Sun,
  X,
} from 'lucide-react'
import { type FormEvent, useEffect, useMemo, useRef, useState } from 'react'
import { GitHubIcon, LinkedInIcon } from './components/BrandIcons'
import { ProjectVisual } from './components/ProjectVisual'
import { Reveal } from './components/Reveal'
import {
  achievements,
  capabilities,
  education,
  journey,
  marqueeItems,
  navItems,
  profile,
  projectArchive,
  projects,
  type ProjectArchiveItem,
  type ProjectCategory,
} from './data/portfolio'

type Theme = 'dark' | 'light'
type ProjectFilter = 'All' | ProjectCategory

const projectFilters: ProjectFilter[] = ['All', 'AI / ML', 'Full stack', 'Frontend', 'Mobile', 'Systems']
const observedSections = ['about', 'work', 'journey', 'contact']

function useActiveSection() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-32% 0px -56% 0px', threshold: [0.05, 0.2, 0.5] },
    )

    observedSections.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return activeSection
}

function useSriLankaTime() {
  const formatter = useMemo(
    () =>
      new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Colombo',
      }),
    [],
  )
  const [time, setTime] = useState(() => formatter.format(new Date()))

  useEffect(() => {
    const timer = window.setInterval(() => setTime(formatter.format(new Date())), 30_000)
    return () => window.clearInterval(timer)
  }, [formatter])

  return time
}

function CapabilityVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="capability-visual capability-visual-product" aria-hidden="true">
        <div className="capability-visual-bar"><span><i /><i /><i /></span><small>PRODUCT / LIVE</small></div>
        <div className="product-wireframe">
          <div className="product-sidebar"><i /><i /><i /></div>
          <div className="product-canvas">
            <span className="product-heading" />
            <span className="product-copy" />
            <div><i /><i /></div>
          </div>
          <span className="product-cursor"><Code2 size={15} /></span>
        </div>
      </div>
    )
  }

  if (index === 1) {
    return (
      <div className="capability-visual capability-visual-cloud" aria-hidden="true">
        <div className="capability-visual-bar"><span><i className="status-pulse" /> HEALTHY</span><small>3 SERVICES</small></div>
        <div className="cloud-map">
          <span className="cloud-node cloud-node-api">API</span>
          <span className="cloud-node cloud-node-core"><CloudCog size={25} /></span>
          <span className="cloud-node cloud-node-db">DB</span>
          <i className="cloud-path cloud-path-one" />
          <i className="cloud-path cloud-path-two" />
          <span className="cloud-packet cloud-packet-one" />
          <span className="cloud-packet cloud-packet-two" />
        </div>
      </div>
    )
  }

  return (
    <div className="capability-visual capability-visual-ai" aria-hidden="true">
      <div className="capability-visual-bar"><span><i className="status-pulse" /> MODEL ACTIVE</span><small>98.4%</small></div>
      <div className="ai-field">
        {Array.from({ length: 12 }, (_, point) => <i key={point} />)}
        <span className="ai-core"><BrainCircuit size={29} /></span>
        <span className="ai-scan" />
      </div>
    </div>
  )
}

function App() {
  const reduceMotion = useReducedMotion()
  const activeSection = useActiveSection()
  const sriLankaTime = useSriLankaTime()
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState<ProjectFilter>('All')
  const [copied, setCopied] = useState(false)
  const [messagePrepared, setMessagePrepared] = useState(false)
  const [selectedProject, setSelectedProject] = useState<ProjectArchiveItem | null>(null)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  )
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const mobileNavRef = useRef<HTMLElement>(null)
  const modalRef = useRef<HTMLElement>(null)
  const modalCloseRef = useRef<HTMLButtonElement>(null)
  const modalTriggerRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 28,
    mass: 0.25,
  })

  const visibleProjects = useMemo(
    () =>
      filter === 'All'
        ? projects
        : projects.filter((project) => project.categories.includes(filter)),
    [filter],
  )
  const visibleArchive = useMemo(
    () =>
      filter === 'All'
        ? projectArchive
        : projectArchive.filter((project) => project.categories.includes(filter)),
    [filter],
  )

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 900)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    const main = document.querySelector('main')
    const footer = document.querySelector('footer')
    if (main instanceof HTMLElement) main.inert = menuOpen
    if (footer instanceof HTMLElement) footer.inert = menuOpen

    if (!menuOpen) {
      return () => {
        document.body.style.overflow = ''
        if (main instanceof HTMLElement) main.inert = false
        if (footer instanceof HTMLElement) footer.inert = false
      }
    }

    const menu = mobileNavRef.current
    const focusable = menu
      ? [...menu.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')]
      : []
    window.requestAnimationFrame(() => focusable[0]?.focus())

    const handleMenuKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setMenuOpen(false)
        window.requestAnimationFrame(() => menuButtonRef.current?.focus())
        return
      }

      if (event.key !== 'Tab' || focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', handleMenuKeydown)

    return () => {
      document.body.style.overflow = ''
      if (main instanceof HTMLElement) main.inert = false
      if (footer instanceof HTMLElement) footer.inert = false
      document.removeEventListener('keydown', handleMenuKeydown)
    }
  }, [menuOpen])

  useEffect(() => {
    if (!selectedProject) return

    document.body.style.overflow = 'hidden'
    const backgroundElements = [
      document.querySelector('.site-header'),
      document.querySelector('main'),
      document.querySelector('footer'),
    ].filter((element): element is HTMLElement => element instanceof HTMLElement)
    backgroundElements.forEach((element) => { element.inert = true })
    window.requestAnimationFrame(() => modalCloseRef.current?.focus())

    const handleModalKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setSelectedProject(null)
        return
      }

      if (event.key !== 'Tab') return
      const focusable = modalRef.current
        ? [...modalRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')]
        : []
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleModalKeydown)

    return () => {
      document.body.style.overflow = ''
      backgroundElements.forEach((element) => { element.inert = false })
      document.removeEventListener('keydown', handleModalKeydown)
      window.requestAnimationFrame(() => modalTriggerRef.current?.focus())
    }
  }, [selectedProject])

  useEffect(() => {
    if (reduceMotion || !window.matchMedia('(pointer: fine)').matches) return

    const updateSpotlight = (event: PointerEvent) => {
      document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`)
    }
    window.addEventListener('pointermove', updateSpotlight, { passive: true })
    return () => window.removeEventListener('pointermove', updateSpotlight)
  }, [reduceMotion])

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.documentElement.dataset.theme = nextTheme
    try {
      localStorage.setItem('kd-theme', nextTheme)
    } catch {
      // The visual toggle still works when storage is blocked by the browser.
    }
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', nextTheme === 'dark' ? '#050816' : '#f4f7ff')
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  const handleContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') ?? '').trim()
    const email = String(form.get('email') ?? '').trim()
    const message = String(form.get('message') ?? '').trim()
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
    const body = encodeURIComponent(
      `Hi Kavindu,\n\n${message}\n\nFrom: ${name}\nReply to: ${email}`,
    )

    setMessagePrepared(true)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const openProjectDetails = (project: ProjectArchiveItem) => {
    modalTriggerRef.current = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null
    setMenuOpen(false)
    setSelectedProject(project)
  }

  return (
    <div className="site-shell">
      <motion.div className="scroll-progress" style={{ scaleX: smoothProgress }} />
      <div className="ambient-spotlight" aria-hidden="true" />
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <nav className="nav-shell" aria-label="Primary navigation">
          <a className="brand" href="#home" aria-label="Kavindu Damsith — home">
            <span className="brand-mark">K</span>
            <span className="brand-name">Kavindu<span>.</span></span>
          </a>

          <div className="desktop-nav">
            {navItems.map((item) => {
              const id = item.href.slice(1)
              return (
                <a
                  key={item.href}
                  className={activeSection === id ? 'active' : ''}
                  href={item.href}
                  aria-current={activeSection === id ? 'location' : undefined}
                >
                  {item.label}
                </a>
              )
            })}
          </div>

          <div className="nav-actions">
            <button
              className="icon-button theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={reduceMotion ? false : { opacity: 0, rotate: -45, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0, rotate: 45, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </motion.span>
              </AnimatePresence>
            </button>
            <a className="nav-cta" href="#contact">Let’s talk <ArrowUpRight size={16} /></a>
            <button
              ref={menuButtonRef}
              className="icon-button menu-toggle"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              ref={mobileNavRef}
              id="mobile-navigation"
              className="mobile-nav"
              aria-label="Mobile navigation"
              initial={reduceMotion ? false : { opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -14 }}
              transition={{ duration: 0.25 }}
            >
              <div className="mobile-nav-inner">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    initial={reduceMotion ? false : { opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                  >
                    <span>0{index + 1}</span>{item.label}<ArrowUpRight size={20} />
                  </motion.a>
                ))}
                <div className="mobile-socials">
                  <a href={profile.github} target="_blank" rel="noreferrer"><GitHubIcon size={18} /> GitHub</a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon size={18} /> LinkedIn</a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main id="main-content">
        <section className="hero section-shell" id="home" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-copy">
              <motion.div
                className="eyebrow availability"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.6 }}
              >
                <span className="pulse-dot" /> Open to ambitious software projects
              </motion.div>

              <h1 id="hero-title" className="hero-title">
                <motion.span
                  initial={reduceMotion ? false : { y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.82, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  Digital products
                </motion.span>
                <motion.span
                  initial={reduceMotion ? false : { y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.82, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                >
                  built to <em>perform</em>,
                </motion.span>
                <motion.span
                  initial={reduceMotion ? false : { y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.82, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
                >
                  made to feel right.
                </motion.span>
              </h1>

              <motion.p
                className="hero-intro"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.52, duration: 0.7 }}
              >
                I’m <strong>Kavindu Damsith</strong>, a full-stack developer building thoughtful web
                products, cloud-ready platforms, and applied AI experiences from Sri Lanka.
              </motion.p>

              <motion.div
                className="hero-actions"
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.64, duration: 0.65 }}
              >
                <a className="button button-primary" href="#work">
                  Explore my work <ArrowRight size={18} />
                </a>
                <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">
                  <GitHubIcon size={18} /> GitHub profile <ArrowUpRight size={15} />
                </a>
              </motion.div>
            </div>

            <motion.div
              className="portrait-stage"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.92, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.28, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="orbit orbit-one" aria-hidden="true"><i /></div>
              <div className="orbit orbit-two" aria-hidden="true"><i /></div>
              <div className="portrait-card">
                <div className="portrait-topline"><span>KD / 2026</span><span>FULL-STACK + AI</span></div>
                <div className="portrait-image-wrap">
                  <img
                    src={profile.avatar}
                    alt="Kavindu Damsith in a dark suit outdoors"
                    width="1050"
                    height="1134"
                    fetchPriority="high"
                    decoding="async"
                  />
                  <div className="portrait-scan" aria-hidden="true" />
                </div>
                <div className="portrait-caption">
                  <div>
                    <strong>Kavindu</strong>
                    <span>Damsith</span>
                  </div>
                  <span className="portrait-arrow"><ArrowUpRight size={19} /></span>
                </div>
              </div>
              <motion.div
                className="floating-tag floating-tag-left"
                animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span>Currently shipping</span><strong>Maple Wraps + VSR</strong>
              </motion.div>
              <motion.div
                className="floating-tag floating-tag-right"
                animate={reduceMotion ? undefined : { y: [0, 7, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <span className="signal-dot" /> BUILDING
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="hero-foot"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.88, duration: 0.8 }}
          >
            <div className="hero-meta-item"><MapPin size={16} /><span>{profile.location}</span></div>
            <div className="hero-meta-item"><Clock3 size={16} /><span>{sriLankaTime} · UTC +05:30</span></div>
            <a className="scroll-cue" href="#about"><span>Scroll to discover</span><ArrowDown size={18} /></a>
          </motion.div>
        </section>

        <div className="marquee" aria-label="Core skills">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`} aria-hidden={index >= marqueeItems.length}>
                {item}<i>✦</i>
              </span>
            ))}
          </div>
        </div>

        <section className="about section-shell section-pad" id="about" aria-labelledby="about-title">
          <Reveal className="section-heading heading-grid">
            <div>
              <span className="section-index">01 / ABOUT</span>
              <h2 id="about-title">Engineer across the <em>whole idea.</em></h2>
            </div>
            <div className="about-lead">
              <p>
                I work where product thinking meets engineering—turning a rough problem into an
                interface, an API, a reliable system, and something people can actually use.
              </p>
              <p>
                My Computer Science &amp; Engineering background at the University of Moratuwa and
                industry experience at Cloud Solutions International shape how I build: curious,
                methodical, and always focused on the outcome.
              </p>
            </div>
          </Reveal>

          <Reveal className="about-editorial" delay={0.08}>
            <figure className="about-portrait">
              <img
                src={profile.editorialPortrait}
                alt=""
                width="800"
                height="1000"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="about-editorial-copy">
              <span className="section-index">HOW I WORK</span>
              <h3>Clarity in the interface. Discipline in the system.</h3>
              <p>
                I enjoy making complicated products feel calm—mapping the real workflow, choosing
                the right technical boundaries, and refining the details until the experience is
                easy to understand.
              </p>
              <div className="principle-list" aria-label="Working principles">
                <span>01 · Understand the problem</span>
                <span>02 · Build the useful core</span>
                <span>03 · Polish what people feel</span>
              </div>
            </div>

            <div className="education-panel" aria-labelledby="education-title">
              <div className="education-heading">
                <span id="education-title"><GraduationCap size={18} /> Education</span>
                <p>Strong fundamentals, carried into every system I build.</p>
              </div>
              <div className="education-grid">
                {education.map((item, index) => (
                  <article className="education-item" key={item.qualification}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <small>{item.period}</small>
                      <h4>{item.qualification}</h4>
                      <p>{item.institution}</p>
                      <em>{item.note}</em>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="about-stats">
            <Reveal className="stat-block" delay={0.05}>
              <strong>48</strong><span>GitHub repositories</span><small>public + private work</small>
            </Reveal>
            <Reveal className="stat-block" delay={0.1}>
              <strong>03</strong><span>engineering lenses</span><small>product · cloud · AI</small>
            </Reveal>
            <Reveal className="stat-block" delay={0.15}>
              <strong>∞</strong><span>room to improve</span><small>always learning</small>
            </Reveal>
          </div>

          <div className="capability-grid">
            {capabilities.map((capability, index) => (
              <Reveal key={capability.title} className="capability-card" delay={index * 0.08}>
                <div className="capability-top"><span>{capability.number}</span><ArrowUpRight size={18} /></div>
                <CapabilityVisual index={index} />
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <div className="tool-list">
                  {capability.tools.map((tool) => <span key={tool}>{tool}</span>)}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="work section-shell section-pad" id="work" aria-labelledby="work-title">
          <Reveal className="section-heading work-heading">
            <div>
              <span className="section-index">02 / SELECTED WORK</span>
              <h2 id="work-title">Ideas, shipped as <em>systems.</em></h2>
            </div>
            <p>Twenty-five selected builds from 48 repositories—spanning a live customer platform, real-time AI, mobile products, cloud infrastructure, and computer systems.</p>
          </Reveal>

          <Reveal className="project-filters" delay={0.08}>
            <span>FILTER BY</span>
            <div role="group" aria-label="Filter projects">
              {projectFilters.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={filter === item ? 'active' : ''}
                  aria-pressed={filter === item}
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </Reveal>

          <motion.div className="projects-grid" layout>
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => (
                <motion.article
                  layout
                  key={project.id}
                  className={`project-card ${project.featured && filter === 'All' ? 'project-featured' : ''}`}
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96, y: 12 }}
                  transition={{ duration: 0.42, delay: Math.min(index * 0.04, 0.16) }}
                >
                  <div className="project-card-head">
                    <span>{project.number}</span>
                    <div className="project-card-meta">
                      <span>{project.eyebrow}</span>
                      {project.private && <small><LockKeyhole size={11} /> Private repository</small>}
                    </div>
                  </div>
                  <ProjectVisual type={project.visual} />
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p className="project-summary">{project.description}</p>
                    <p className="project-detail">{project.detail}</p>
                    <div className="project-tech">
                      {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                    </div>
                    <a
                      href={project.url}
                      target={project.url.startsWith('#') ? undefined : '_blank'}
                      rel={project.url.startsWith('#') ? undefined : 'noreferrer'}
                      aria-label={`${project.linkLabel}: ${project.title}`}
                    >
                      {project.linkLabel} <ArrowUpRight size={17} />
                    </a>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {visibleArchive.length > 0 && (
            <Reveal className="project-archive" delay={0.08}>
              <div className="archive-heading">
                <div>
                  <span>PROJECT INDEX</span>
                  <h3>More systems, less filler.</h3>
                </div>
                <p>{String(visibleProjects.length + visibleArchive.length).padStart(2, '0')} projects in this view</p>
              </div>

              <motion.div className="archive-list" layout>
                <AnimatePresence mode="popLayout">
                  {visibleArchive.map((project, index) => (
                    <motion.article
                      layout
                      key={project.id}
                      className="archive-row"
                      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduceMotion ? undefined : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.32, delay: Math.min(index * 0.025, 0.14) }}
                    >
                      <span className="archive-number">{project.number}</span>
                      <div className="archive-copy">
                        <div className="archive-title-line">
                          <h4>{project.title}</h4>
                          {project.private && <span className="private-badge"><LockKeyhole size={11} /> Private</span>}
                        </div>
                        <p>{project.description}</p>
                      </div>
                      <div className="archive-tech">
                        {project.technologies.slice(0, 3).map((technology) => <span key={technology}>{technology}</span>)}
                      </div>
                      <button
                        className="archive-read-more"
                        type="button"
                        onClick={() => openProjectDetails(project)}
                        aria-label={`Read more about ${project.title}`}
                      >
                        <span>Read more</span><ArrowUpRight size={17} />
                      </button>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </motion.div>
            </Reveal>
          )}

          <Reveal className="github-banner">
            <div className="github-mark"><GitHubIcon size={28} /></div>
            <div>
              <span>48 REPOSITORIES · CURATED HERE</span>
              <h3>Public code on GitHub. Private case studies available on request.</h3>
            </div>
            <a href={profile.github} target="_blank" rel="noreferrer">
              Explore all repositories <ArrowUpRight size={18} />
            </a>
          </Reveal>
        </section>

        <section className="journey section-shell section-pad" id="journey" aria-labelledby="journey-title">
          <Reveal className="section-heading heading-grid journey-heading">
            <div>
              <span className="section-index">03 / JOURNEY</span>
              <h2 id="journey-title">Learning by <em>building.</em></h2>
            </div>
            <p>From core engineering fundamentals to industry delivery and applied research, each chapter expands the next.</p>
          </Reveal>

          <div className="timeline">
            {journey.map((item, index) => (
              <Reveal key={item.title} className="timeline-row" delay={index * 0.08}>
                <span className="timeline-period">{item.period}</span>
                <div className="timeline-marker"><i /></div>
                <div className="timeline-content">
                  <span>{item.kind}</span>
                  <h3>{item.title}</h3>
                  <h4>{item.organisation}</h4>
                  <p>{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="achievement-heading">
            <Reveal><span className="section-index">SELECTED MILESTONES</span></Reveal>
          </div>
          <div className="achievement-grid">
            {achievements.map((achievement, index) => (
              <Reveal key={achievement.label} className="achievement-card" delay={index * 0.07}>
                <div className="achievement-value">{achievement.value}</div>
                <span>{achievement.label}</span>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="contact section-shell section-pad" id="contact" aria-labelledby="contact-title">
          <div className="contact-panel">
            <Reveal className="contact-copy">
              <span className="section-index">04 / LET’S CONNECT</span>
              <h2 id="contact-title">Have a problem worth <em>solving?</em></h2>
              <p>
                I’m always interested in thoughtful products, ambitious engineering challenges,
                and teams that care about the craft.
              </p>
              <div className="contact-direct">
                <a href={`mailto:${profile.email}`}><Mail size={18} />{profile.email}</a>
                <button type="button" onClick={copyEmail} aria-label="Copy email address">
                  {copied ? <Check size={17} /> : <Copy size={17} />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
              <div className="contact-socials">
                <a href={profile.github} target="_blank" rel="noreferrer"><GitHubIcon size={19} /> GitHub <ArrowUpRight size={15} /></a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon size={19} /> LinkedIn <ArrowUpRight size={15} /></a>
              </div>
            </Reveal>

            <Reveal className="contact-form-wrap" delay={0.12}>
              <form className="contact-form" onSubmit={handleContact}>
                <div className="form-row">
                  <label>
                    <span>Your name</span>
                    <input name="name" type="text" autoComplete="name" placeholder="Jane Smith" maxLength={80} required />
                  </label>
                  <label>
                    <span>Email address</span>
                    <input name="email" type="email" autoComplete="email" placeholder="jane@company.com" maxLength={120} required />
                  </label>
                </div>
                <label>
                  <span>What are we building?</span>
                  <textarea name="message" rows={6} placeholder="Tell me a little about the idea, challenge, or opportunity..." minLength={10} maxLength={1800} required />
                </label>
                <div className="form-submit-row">
                  <p>Your message stays private—submitting opens your email app.</p>
                  <button className="button button-primary" type="submit">
                    Prepare message <Send size={17} />
                  </button>
                </div>
                <p className="form-status" aria-live="polite">
                  {messagePrepared ? 'Your email app should now be ready with the message.' : ''}
                </p>
              </form>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <div className="footer-main">
          <a className="brand footer-brand" href="#home"><span className="brand-mark">K</span><span className="brand-name">Kavindu<span>.</span></span></a>
          <p>Designed and engineered with intention.<br />No templates. No database. Just the web.</p>
          <a className="footer-up" href="#home">Back to top <ArrowUp size={17} /></a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Kavindu Damsith</span>
          <span>Built in Sri Lanka · Available worldwide</span>
        </div>
      </footer>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="case-study-backdrop"
            role="presentation"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedProject(null)
            }}
          >
            <motion.section
              ref={modalRef}
              className="case-study-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="case-study-title"
              aria-describedby="case-study-description"
              initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="case-study-topline">
                <div>
                  <span>{selectedProject.number} · PROJECT DETAIL</span>
                  {selectedProject.private && <span className="private-badge"><LockKeyhole size={11} /> Private repository</span>}
                </div>
                <button
                  ref={modalCloseRef}
                  className="modal-close"
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                >
                  <X size={19} />
                </button>
              </div>

              <div className="case-study-body">
                <span className="case-study-category">{selectedProject.categories.join(' · ')}</span>
                <h2 id="case-study-title">{selectedProject.title}</h2>
                <p id="case-study-description" className="case-study-lead">{selectedProject.description}</p>

                <div className="case-study-profile" aria-label="Project profile">
                  <div><small>ENGINEERING LENS</small><strong>{selectedProject.categories.join(' + ')}</strong></div>
                  <div><small>CODE ACCESS</small><strong>{selectedProject.private ? 'Private case study' : 'Public repository'}</strong></div>
                  <div><small>PROJECT SCOPE</small><strong>{selectedProject.highlights.length} focus areas · {selectedProject.technologies.length} technologies</strong></div>
                </div>

                <div className="case-study-overview">
                  <span>PROJECT OVERVIEW</span>
                  <p className="case-study-detail">{selectedProject.detail}</p>
                </div>

                <div className="case-study-highlights">
                  <span>ENGINEERING BREAKDOWN</span>
                  <ul>
                    {selectedProject.highlights.map((highlight, index) => (
                      <li key={highlight}><span>{String(index + 1).padStart(2, '0')}</span><p>{highlight}</p></li>
                    ))}
                  </ul>
                </div>

                <div className="case-study-stack">
                  <span>BUILT WITH</span>
                  <div>{selectedProject.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
                </div>
              </div>

              <div className="case-study-footer">
                <p>
                  {selectedProject.private
                    ? 'The source is private, but I can walk you through the architecture, decisions, and outcome.'
                    : 'Explore the repository for implementation details and source history.'}
                </p>
                <a
                  className="button button-primary"
                  href={selectedProject.url}
                  target={selectedProject.url.startsWith('#') ? undefined : '_blank'}
                  rel={selectedProject.url.startsWith('#') ? undefined : 'noreferrer'}
                  onClick={() => {
                    if (selectedProject.url.startsWith('#')) setSelectedProject(null)
                  }}
                >
                  {selectedProject.private ? 'Discuss this project' : 'View repository'} <ArrowUpRight size={17} />
                </a>
              </div>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showBackToTop && (
          <motion.a
            className="back-to-top"
            href="#home"
            aria-label="Back to top"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, scale: 0.8 }}
          >
            <ArrowUp size={18} />
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
