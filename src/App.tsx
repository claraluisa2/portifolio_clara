import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Moon, Sun, Menu, X, Code2, Cpu, Bot, Database, Sparkles, Braces, CircuitBoard } from 'lucide-react'

type Theme = 'soft' | 'tech'

const navItems = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'conhecimentos', label: 'Conhecimentos' },
  { id: 'contato', label: 'Contato' },
]

const skillGroups = [
  { title: 'Desenvolvimento', icon: Code2, items: ['Python', 'C / C++', 'JavaScript', 'PHP', 'HTML & CSS'] },
  { title: 'Hardware & sistemas', icon: Cpu, items: ['Sistemas embarcados', 'Firmware', 'IoT', 'Arduino', 'ESP32'] },
  { title: 'Pesquisa & tecnologia', icon: Bot, items: ['Robótica', 'Visão computacional', 'Machine Learning', 'Processamento de dados'] },
  { title: 'Ferramentas', icon: Database, items: ['Git & GitHub', 'MySQL', 'XAMPP', 'PlatformIO', 'MATLAB / Simulink'] },
]

function App() {
  const [active, setActive] = useState('inicio')
    useEffect(() => {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
    { rootMargin: '-45% 0px -50% 0px' }
  )
  navItems.forEach(({ id }) => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })
    return () => observer.disconnect()
  }, [])

  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('clara-portfolio-theme')
    return saved === 'tech' ? 'tech' : 'soft'
  })
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('clara-portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(current => current === 'soft' ? 'tech' : 'soft')
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
  <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Clara Luísa, início">
    <span className="brand-mark">C<span>.</span></span>
    <span className="brand-text">
      <strong>clara luísa</strong>
      <small>engenharia da computação</small>
    </span>
  </a>

  <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
    {menuOpen ? <X size={20}/> : <Menu size={20}/>}
  </button>

  <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
    <div className="nav-center">
      {navItems.map(item => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={active === item.id ? 'active' : ''}
          onClick={closeMenu}
        >
          {item.label}
        </a>
      ))}
    </div>
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Alternar identidade visual" title="Alternar tema">
      {theme === 'soft' ? <Moon size={16}/> : <Sun size={16}/>}
      <span>{theme === 'soft' ? 'modo tech' : 'modo suave'}</span>
    </button>
  </nav>
</header>

      <main>
        <section className="hero section-wrap" id="inicio">
          <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" /> PORTFÓLIO • 2026
          </div>

          
          <p className="hero-kicker">Oi, eu sou a Clara.</p>

          <h1>
            Entre código,<br />
            <span className="gradient-text">
              hardware e novas possibilidades
            </span>
            <span className="hero-period">.</span>
          </h1>

          <p className="hero-description">
  Estudante de Engenharia da Computação, interessada em
  desenvolvimento de <strong>software</strong>, <strong>sistemas embarcados</strong>,{' '}
  <strong>robótica</strong> e <strong>pesquisa</strong>.
</p>


          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">
              Explorar projetos <ArrowUpRight size={17} />
            </a>
            <a className="text-link" href="#sobre">
              Um pouco sobre mim <ArrowDown size={15} />
            </a>
          </div>
</div>
<div className="hero-art">
  <div className="art-glow" />
  <div className="art-ring" />
  <span className="art-dot dot-a" />
  <span className="art-dot dot-b" />

  {/* detalhes rosas ao redor da foto */}
  <svg className="art-decor" viewBox="0 0 560 580" aria-hidden="true">
    <defs>
      <pattern id="halftone" width="14" height="14" patternUnits="userSpaceOnUse">
        <circle cx="3" cy="3" r="1.6" className="d-fill" />
      </pattern>
      <radialGradient id="fadeL" cx="35%" cy="60%" r="65%">
        <stop offset="0" stopColor="#fff" />
        <stop offset="1" stopColor="#000" />
      </radialGradient>
      <radialGradient id="fadeR" cx="75%" cy="35%" r="65%">
        <stop offset="0" stopColor="#fff" />
        <stop offset="1" stopColor="#000" />
      </radialGradient>
      <mask id="maskL"><rect x="0" y="200" width="300" height="360" fill="url(#fadeL)" /></mask>
      <mask id="maskR"><rect x="400" y="30" width="160" height="200" fill="url(#fadeR)" /></mask>
    </defs>

    {/* textura de pontinhos */}
    <rect x="0" y="200" width="300" height="360" fill="url(#halftone)" mask="url(#maskL)" opacity=".6" />
    <rect x="400" y="30" width="160" height="200" fill="url(#halftone)" mask="url(#maskR)" opacity=".5" />

    {/* linhas pontilhadas */}
    <path d="M45 110 C 15 200, 15 300, 55 390" className="d-dash" />
    <path d="M525 120 C 550 200, 548 290, 515 370" className="d-dash" />

    {/* partículas */}
    <circle cx="62" cy="232" r="4" className="d-fill" />
    <circle cx="505" cy="205" r="3" className="d-fill" />
    <circle cx="112" cy="92" r="2.5" className="d-fill" opacity=".7" />
    <circle cx="536" cy="410" r="2.5" className="d-fill" opacity=".7" />
    <circle cx="28" cy="430" r="3" className="d-fill" opacity=".6" />
    <circle cx="150" cy="40" r="2" className="d-fill" opacity=".6" />
    <circle cx="522" cy="352" r="5" className="d-ring" />
    <circle cx="82" cy="486" r="4" className="d-ring" />

    {/* sinais de + */}
    <path d="M-6 0H6M0 -6V6" transform="translate(505 62)" className="d-stroke" />
    <path d="M-6 0H6M0 -6V6" transform="translate(92 150)" className="d-stroke" />
    <path d="M-6 0H6M0 -6V6" transform="translate(38 330)" className="d-stroke" />
    <path d="M-6 0H6M0 -6V6" transform="translate(530 290)" className="d-stroke" />
    <path d="M-6 0H6M0 -6V6" transform="translate(140 530)" className="d-stroke" />

    {/* brilho de 4 pontas */}
    <path
      d="M0 -9 C1 -3 3 -1 9 0 C3 1 1 3 0 9 C-1 3 -3 1 -9 0 C-3 -1 -1 -3 0 -9Z"
      transform="translate(70 62)"
      className="d-fill"
    />
  </svg>

  <div className="hero-portrait">
    <img src="/images/clara.png" alt="Clara Luísa" />
  </div>

  <div className="floating-chip chip-top">
    <Sparkles size={16} />
    <span>curiosity.exe</span>
    <i className="chip-dot" />
  </div>

  <div className="floating-chip chip-brace">
    <Braces size={18} />
  </div>

  <div className="floating-chip chip-bottom">
    <span>build();</span>
    <i className="chip-dot" />
  </div>
</div>


          <a className="scroll-cue" href="#sobre"><span/> role para descobrir</a>
        </section>

        <section className="intro-strip">
          <div className="section-wrap strip-inner">
            <span className="strip-label">O QUE ME MOVE</span>
            <p>Entender como as coisas funcionam — e usar esse conhecimento para construir algo novo.</p>
            <span className="strip-symbol">✳</span>
          </div>
        </section>

        <section className="section-wrap content-section about-section" id="sobre">
          <div className="section-heading">
            <span className="eyebrow">01 / SOBRE MIM</span>
            <h2>Curiosidade que<br/><span className="muted-heading">vira construção.</span></h2>
          </div>
          <div className="about-content">
            <p className="about-lead">Gosto de explorar a tecnologia por diferentes perspectivas.</p>
            <p>Minha formação em Engenharia da Computação me permite transitar entre o desenvolvimento de software, os sistemas embarcados e a integração entre componentes físicos e digitais. Também tenho interesse em pesquisa e em aprender na prática, experimentando, testando e aprimorando ideias.</p>
            <p>Este espaço reúne um pouco do que venho estudando, desenvolvendo e descobrindo ao longo dessa jornada.</p>
            <div className="about-note"><Sparkles size={17}/><span>Em constante aprendizado, sempre construindo.</span></div>
          </div>
        </section>

        <section className="projects-section" id="projetos">
          <div className="section-wrap content-section">
            <div className="projects-heading">
              <div className="section-heading">
                <span className="eyebrow">02 / PROJETOS</span>
                <h2>Do conceito à<br/><span className="muted-heading">experimentação.</span></h2>
              </div>
              <p className="section-side-note">Projetos acadêmicos, experiências práticas e ideias que saíram do papel.</p>
            </div>
            <div className="empty-projects">
              <div className="empty-visual">
                <div className="empty-ring ring-one"/><div className="empty-ring ring-two"/>
                <div className="empty-icon"><Code2 size={35}/></div>
                <span className="spark spark-a">✳</span><span className="spark spark-b">+</span>
              </div>
              <div className="empty-copy">
                <span className="eyebrow">EM CONSTRUÇÃO</span>
                <h3>Tem coisa boa<br/>ganhando forma por aqui.</h3>
                <p>Estou organizando os projetos para compartilhar não só o resultado, mas também o processo, as escolhas e os aprendizados por trás de cada um.</p>
                <span className="coming-soon"><span/> Novos projetos em breve</span>
              </div>
              <span className="empty-index">01—06</span>
            </div>
          </div>
        </section>

        <section className="section-wrap content-section skills-section" id="conhecimentos">
          <div className="section-heading">
            <span className="eyebrow">03 / CONHECIMENTOS</span>
            <h2>Ferramentas para<br/><span className="muted-heading">tirar ideias do papel.</span></h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, index) => {
              const Icon = group.icon
              return <article className="skill-card" key={group.title}>
                <div className="skill-card-top"><span className="skill-number">0{index + 1}</span><Icon size={21} strokeWidth={1.6}/></div>
                <h3>{group.title}</h3>
                <div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div>
              </article>
            })}
          </div>
          <p className="skills-footnote">Conhecimentos em desenvolvimento — a lista acompanha minha evolução.</p>
        </section>

        <section className="contact-section" id="contato">
          <div className="section-wrap contact-inner">
            <div>
              <span className="eyebrow">04 / CONTATO</span>
              <h2>Vamos criar algo<br/><span className="gradient-text">interessante?</span></h2>
              <p>Estou aberta a trocar ideias, conhecer projetos e conversar sobre tecnologia.</p>
            </div>
            <div className="contact-links">
              <a href="https://github.com/claraluisa2" target="_blank" rel="noreferrer"><Github size={19}/> GitHub <ArrowUpRight size={15}/></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={19}/> LinkedIn <ArrowUpRight size={15}/></a>
              <a href="mailto:"><Mail size={19}/> E-mail <ArrowUpRight size={15}/></a>
              <span className="contact-hint">Adicione seus links pessoais quando quiser.</span>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer section-wrap">
        <a className="brand footer-brand" href="#inicio"><span className="brand-mark">C<span>.</span></span><span>clara luísa</span></a>
        <span>Feito com curiosidade e café <span className="footer-heart">♥</span></span>
        <a href="#inicio" className="back-top">Voltar ao topo ↑</a>
      </footer>
    </div>
  )
}

export default App
