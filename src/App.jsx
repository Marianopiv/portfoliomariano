import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import portrait from './assets/black-white.png';
import adminImage from './assets/admin-gastos.webp';
import typingImage from './assets/typing-god.webp';
import questionImage from './assets/question-x.webp';
import pivflixImage from './assets/pivflix.webp';
import yugiohImage from './assets/yu-gi-oh-card.webp';
import mercadoImage from './assets/mercadopivo.png';
import banderasImage from './assets/banderas-card.webp';
import portfolioImage from './assets/portfolio-original.webp';
import './App.css';

const content = {
  en: {
    nav: ['Experience', 'Selected work', 'Skills', 'About'], contact: 'Get in touch',
    eyebrow: 'Bilingual support · Operations · Technology', greeting: "Hi, I'm Mariano.",
    headline: 'I help people and solve the problems behind the scenes.',
    intro: "I'm a bilingual professional with experience in medical interpretation, customer communication and day-to-day operations. I also build software, so I feel at home learning tools, untangling workflows and making things work better.",
    work: 'See my work', email: 'Email me', location: 'Based in Buenos Aires, working remotely',
    experienceLabel: 'What I do', experienceTitle: 'Experience across people, processes and software.',
    experienceIntro: 'Different roles, one common thread: staying clear, organized and useful when something needs to get done.',
    roles: [
      ['Medical interpreter', 'English ↔ Spanish · 2023–present', 'I interpret conversations between patients and healthcare professionals, often in stressful or time-sensitive situations. The work calls for accuracy, composure and making communication flow without taking over the conversation.'],
      ['Operations & customer support', 'Premys Car SRL · 2016–present', 'I handle client emails, invoicing, spreadsheets and follow-up on transportation services. When a client or driver has a question or a problem, I track down the details and help resolve it.'],
      ['AI evaluation', 'Project-based work', 'I review and improve AI-generated responses, checking whether they follow instructions, make sense and communicate clearly. It has sharpened how I analyze information and give precise feedback.'],
    ],
    projectsLabel: 'Things I’ve built', projectsTitle: 'Software built around real problems and curiosity.',
    projectsIntro: 'My technical background is practical. These projects show how I approach a problem, build a solution and keep learning.',
    projects: [
      ['Admin Gastos', 'Internal tool · React / TypeScript / Firebase', 'A vehicle expense management app I built for the company where I work. It brings records, authentication and alerts into one daily workflow. Demo account: prueba123@gmail.com / password: prueba999.', adminImage],
      ['Typing God', 'Interactive game · React / Firebase', 'A typing game that challenged me to work through application logic, event handling and live player feedback.', typingImage, 'typing-god', 'https://typing-god.vercel.app/'],
      ['Question X Trivia App', 'Trivia · React / TypeScript / Firebase', 'A trivia app with Google authentication and saved progress, built while exploring customized Material UI components.', questionImage, null, 'https://trivia-app-nine-ebon.vercel.app/'],
      ['Pivflix', 'Movie explorer · React', 'A movie interface built around reusable components, API requests and working with external media.', pivflixImage, null, 'https://movies-pied-ten.vercel.app/'],
      ['Yu Gi Oh Enciclopedia', 'API explorer · React', 'A searchable card encyclopedia with filters and pagination over an external API.', yugiohImage, 'yu-gi-oh', 'https://yu-gi-oh-iota.vercel.app/'],
      ['Mercado Pivo', 'Storefront · React', 'A small storefront where I worked with React Context, routing and product data.', mercadoImage, 'mercadopiv', 'https://mercadopiv.vercel.app/'],
      ['Banderas', 'Country explorer · React', 'A country data app with filtering and a dark mode, built to practice working with APIs.', banderasImage, 'banderas'],
      ['Portfolio Mariano', 'This website · React', 'My portfolio, now bringing together my work with people, operations and software.', portfolioImage, 'portfoliomariano', 'https://portfoliomariano.vercel.app/'],
    ],
    live: 'Open live project ↗', source: 'View source ↗', moreProjects: 'More projects on GitHub ↗',
    skillsLabel: 'How I work', skillsTitle: 'A useful mix of human and technical skills.',
    skillGroups: [
      ['Customer & operations', 'Customer communication', 'Email support', 'Billing & records', 'Problem solving', 'Workflow follow-up'],
      ['Technical', 'React', 'JavaScript & TypeScript', 'Firebase', 'APIs', 'Troubleshooting', 'AI evaluation'],
      ['Languages', 'Spanish · native', 'English · fluent professional'],
    ],
    aboutLabel: 'A little more about me', aboutTitle: 'I like work that connects people and systems.',
    about: "I have a law degree from the University of Buenos Aires and studied frontend development with a mentor. Interpreting taught me to listen carefully; operations taught me to follow through; programming taught me to look for better ways to do the work. I'm looking for roles where those strengths meet, especially customer support, operations and technical support.",
    education: 'Law degree · University of Buenos Aires  /  Frontend development · mentored practical training',
    contactLabel: 'Let’s talk', contactTitle: 'Have a role or a problem I could help with?',
    contactBody: 'Tell me what you’re working on. I’m happy to have a direct conversation about how I can contribute.',
    footer: 'Built by Mariano Pividori',
  },
  es: {
    nav: ['Experiencia', 'Proyectos', 'Habilidades', 'Sobre mí'], contact: 'Contactame',
    eyebrow: 'Atención bilingüe · Operaciones · Tecnología', greeting: 'Hola, soy Mariano.',
    headline: 'Ayudo a las personas y resuelvo los problemas detrás de escena.',
    intro: 'Trabajo en interpretación médica, comunicación con clientes y operaciones del día a día. También desarrollo software: me gusta aprender herramientas, entender cómo funciona un proceso y encontrar formas de mejorarlo.',
    work: 'Ver proyectos', email: 'Escribime', location: 'En Buenos Aires, disponible para trabajo remoto',
    experienceLabel: 'Lo que hago', experienceTitle: 'Experiencia con personas, procesos y software.',
    experienceIntro: 'Roles distintos con algo en común: comunicar con claridad, organizarse y resolver lo que haga falta.',
    roles: [
      ['Intérprete médico', 'Inglés ↔ español · 2023–actualidad', 'Interpreto conversaciones entre pacientes y profesionales de la salud, muchas veces en situaciones difíciles o urgentes. El trabajo exige precisión, calma y facilitar la comunicación sin adueñarse de ella.'],
      ['Administración y atención al cliente', 'Premys Car SRL · 2016–actualidad', 'Me ocupo de correos con clientes, facturación, planillas y seguimiento de servicios de transporte. Cuando un cliente o un chofer tiene una consulta o un problema, busco los datos y ayudo a resolverlo.'],
      ['Evaluación de IA', 'Trabajo por proyectos', 'Reviso y mejoro respuestas generadas por IA: compruebo si siguen las instrucciones, son correctas y están expresadas con claridad. Esto afinó mi capacidad de análisis y de dar devoluciones precisas.'],
    ],
    projectsLabel: 'Cosas que construí', projectsTitle: 'Software nacido de problemas reales y de la curiosidad.',
    projectsIntro: 'Mi formación técnica es práctica. Estos proyectos muestran cómo encaro un problema, construyo una solución y sigo aprendiendo.',
    projects: [
      ['Admin Gastos', 'Herramienta interna · React / TypeScript / Firebase', 'Una aplicación de gestión de gastos de vehículos que construí para la empresa donde trabajo. Reúne registros, autenticación y alertas en un flujo cotidiano. Usuario de prueba: prueba123@gmail.com / contraseña: prueba999.', adminImage],
      ['Typing God', 'Juego interactivo · React / Firebase', 'Un juego de tipeo que me desafió a resolver la lógica de la aplicación, los eventos y la respuesta en tiempo real al jugador.', typingImage, 'typing-god', 'https://typing-god.vercel.app/'],
      ['Question X Trivia App', 'Trivia · React / TypeScript / Firebase', 'Una trivia con autenticación de Google y progreso guardado, desarrollada mientras exploraba componentes personalizados de Material UI.', questionImage, null, 'https://trivia-app-nine-ebon.vercel.app/'],
      ['Pivflix', 'Películas · React', 'Una interfaz de películas para trabajar con componentes reutilizables, llamados a una API y archivos externos.', pivflixImage, null, 'https://movies-pied-ten.vercel.app/'],
      ['Yu Gi Oh Enciclopedia', 'Explorador de API · React', 'Una enciclopedia de cartas con búsqueda, filtros y paginación sobre una API externa.', yugiohImage, 'yu-gi-oh', 'https://yu-gi-oh-iota.vercel.app/'],
      ['Mercado Pivo', 'Tienda · React', 'Una pequeña tienda en la que trabajé con React Context, rutas y datos de productos.', mercadoImage, 'mercadopiv', 'https://mercadopiv.vercel.app/'],
      ['Banderas', 'Países · React', 'Una app de datos de países con filtros y modo oscuro, creada para practicar el trabajo con APIs.', banderasImage, 'banderas'],
      ['Portfolio Mariano', 'Este sitio · React', 'Mi portfolio, que ahora reúne mi trabajo con personas, operaciones y software.', portfolioImage, 'portfoliomariano', 'https://portfoliomariano.vercel.app/'],
    ],
    live: 'Abrir proyecto ↗', source: 'Ver código ↗', moreProjects: 'Más proyectos en GitHub ↗',
    skillsLabel: 'Cómo trabajo', skillsTitle: 'Una combinación útil de habilidades humanas y técnicas.',
    skillGroups: [
      ['Clientes y operaciones', 'Comunicación con clientes', 'Atención por email', 'Facturación y registros', 'Resolución de problemas', 'Seguimiento de procesos'],
      ['Tecnología', 'React', 'JavaScript y TypeScript', 'Firebase', 'APIs', 'Resolución de problemas técnicos', 'Evaluación de IA'],
      ['Idiomas', 'Español · nativo', 'Inglés · fluido profesional'],
    ],
    aboutLabel: 'Un poco más sobre mí', aboutTitle: 'Me gusta el trabajo que conecta personas y sistemas.',
    about: 'Soy abogado por la Universidad de Buenos Aires y estudié desarrollo frontend con un mentor. La interpretación me enseñó a escuchar con atención; la administración, a hacer seguimiento; y programar, a buscar mejores maneras de trabajar. Busco roles donde se crucen esas fortalezas, especialmente en atención al cliente, operaciones y soporte técnico.',
    education: 'Abogado · Universidad de Buenos Aires  /  Desarrollo frontend · formación práctica con mentor',
    contactLabel: 'Hablemos', contactTitle: '¿Tenés un puesto o un problema en el que pueda ayudar?',
    contactBody: 'Contame en qué estás trabajando. Me interesa conversar directamente sobre cómo puedo aportar.',
    footer: 'Sitio hecho por Mariano Pividori',
  },
};

const sections = ['experience', 'work', 'skills', 'about'];
const github = 'https://github.com/Marianopiv';
const normalizeName = value => String(value || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '');
const hiddenProjects = new Set([
  'piedrapapelotijera', 'tipcalculator', 'tictactoe',
  'escapeabali', 'ninjamail', 'ninjaemail', 'portfoliomariano', 'mercadopivo',
]);
const safeUrl = value => {
  try {
    const url = new URL(value);
    return ['https:', 'http:'].includes(url.protocol) ? url.href : null;
  } catch {
    return null;
  }
};
const safeDemoUrl = value => {
  const url = safeUrl(value);
  return url && new URL(url).hostname !== 'github.com' ? url : null;
};

function projectCard(project, featured, language) {
  const name = normalizeName(project.name);
  const repo = normalizeName((project.github || '').split('/').filter(Boolean).pop());
  const index = featured.findIndex(([title, , , , slug]) => {
    const featuredName = normalizeName(title);
    return (slug && normalizeName(slug) === repo) ||
      (name.length >= 5 && (featuredName === name || featuredName.includes(name) || name.includes(featuredName)));
  });
  const local = featured[index];
  return {
    title: local?.[0] || project.name,
    tag: local?.[1] || project.tecnologias,
    body: local?.[2] || (language === 'es' ? project.descripcion : project.descript || project.descripcion),
    image: local?.[3] || project.img,
    demo: safeDemoUrl(project.url) || safeDemoUrl(local?.[5]),
    source: safeUrl(project.github) || (local?.[4] ? `${github}/${local[4]}` : null),
  };
}

function App() {
  const [language, setLanguage] = useState('en');
  const [firebaseProjects, setFirebaseProjects] = useState(null);
  const t = content[language];
  useEffect(() => {
    let active = true;
    if (!process.env.REACT_APP_API_KEY || !process.env.REACT_APP_PROJECTID) return;
    import('./FireBase').then(({ db }) => getDocs(collection(db, 'proyectos')))
      .then(snapshot => {
        if (active) setFirebaseProjects(snapshot.docs.map(doc => doc.data()).sort((a, b) => Number(a.order || 0) - Number(b.order || 0)));
      })
      .catch(error => console.error('Could not load projects', error));
    return () => { active = false; };
  }, []);
  const projects = firebaseProjects?.length
    ? firebaseProjects.map(project => projectCard(project, t.projects, language))
    : t.projects.map(([title, tag, body, image, repo, demo]) => ({
      title, tag, body, image, demo: safeDemoUrl(demo), source: repo ? `${github}/${repo}` : null,
    }));
  const visibleProjects = projects.filter(({ title }) => !hiddenProjects.has(normalizeName(title)));
  return <div className="site-shell" lang={language}>
    <header className="site-header"><div className="container header-inner">
      <a className="brand" href="#top" aria-label="Mariano Pividori — top">M.P <span>PORTFOLIO</span></a>
      <nav className="main-nav" aria-label={language === 'en' ? 'Main navigation' : 'Navegación principal'}>{sections.map((id, i) => <a href={`#${id}`} key={id}>{t.nav[i]}</a>)}</nav>
      <div className="header-actions"><button className="language-switch" type="button" onClick={() => setLanguage(language === 'en' ? 'es' : 'en')} aria-label={language === 'en' ? 'Cambiar a español' : 'Switch to English'}>{language === 'en' ? 'ES' : 'EN'}</button><a className="header-contact" href="#contact">{t.contact} <span>↗</span></a></div>
    </div></header>
    <main id="top">
      <section className="hero container" aria-labelledby="hero-title"><div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-line" />{t.eyebrow}</p><p className="hero-greeting">{t.greeting}</p><h1 id="hero-title">{t.headline}</h1><p className="hero-intro">{t.intro}</p>
        <div className="hero-actions"><a className="button button-primary" href="#work">{t.work} <span>↗</span></a><a className="button button-secondary" href="mailto:marianopividori93@gmail.com">{t.email} <span>↗</span></a></div>
        <p className="location"><span className="status-dot" />{t.location}</p>
      </div><div className="hero-art"><div className="art-orbit art-orbit-one" /><div className="art-orbit art-orbit-two" /><div className="portrait-frame"><img src={portrait} alt="Mariano Pividori" /></div><span className="art-spark art-spark-one" /><span className="art-spark art-spark-two" /><span className="art-caption">MARIANO PIVIDORI <span>— 2026</span></span></div></section>
      <div className="section-divider" />
      <section className="section container" id="experience" aria-labelledby="experience-title"><div className="section-heading"><div><p className="section-kicker">01 / {t.experienceLabel}</p><h2 id="experience-title">{t.experienceTitle}</h2></div><p>{t.experienceIntro}</p></div><div className="experience-list">{t.roles.map(([title, meta, body], i) => <article className="experience-row" key={title}><span className="row-number">0{i + 1}</span><div><h3>{title}</h3><p className="role-meta">{meta}</p></div><p className="role-body">{body}</p></article>)}</div></section>
      <section className="section work-section" id="work" aria-labelledby="work-title"><div className="container"><div className="section-heading"><div><p className="section-kicker">02 / {t.projectsLabel}</p><h2 id="work-title">{t.projectsTitle}</h2></div><p>{t.projectsIntro}</p></div><div className="project-grid">{visibleProjects.map(({ title, tag, body, image, demo, source }) => <article className="project-card" key={title}><div className="project-art">{demo ? <a href={demo} target="_blank" rel="noopener noreferrer" aria-label={`${t.live}: ${title}`}><img src={image} alt="" loading="lazy" /></a> : <img src={image} alt="" loading="lazy" />}</div><div className="project-content"><p className="project-tag">{tag}</p><h3>{demo ? <a className="project-title-link" href={demo} target="_blank" rel="noopener noreferrer">{title}</a> : title}</h3><p>{body}</p><div className="project-links">{demo && <a href={demo} target="_blank" rel="noopener noreferrer">{t.live}</a>}{source && <a className="project-source" href={source} target="_blank" rel="noopener noreferrer">{t.source}</a>}</div></div></article>)}</div><a className="more-link" href={github} target="_blank" rel="noreferrer">{t.moreProjects}</a></div></section>
      <section className="section container" id="skills" aria-labelledby="skills-title"><div className="section-heading"><div><p className="section-kicker">03 / {t.skillsLabel}</p><h2 id="skills-title">{t.skillsTitle}</h2></div></div><div className="skills-grid">{t.skillGroups.map(([title, ...items]) => <div className="skill-group" key={title}><h3>{title}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div></section>
      <section className="section about-section" id="about" aria-labelledby="about-title"><div className="container about-grid"><div><p className="section-kicker">04 / {t.aboutLabel}</p><h2 id="about-title">{t.aboutTitle}</h2></div><div><p className="about-body">{t.about}</p><p className="education">{t.education}</p></div></div></section>
      <section className="contact-section container" id="contact" aria-labelledby="contact-title"><p className="section-kicker">05 / {t.contactLabel}</p><h2 id="contact-title">{t.contactTitle}</h2><p>{t.contactBody}</p><a className="button button-primary" href="mailto:marianopividori93@gmail.com">marianopividori93@gmail.com <span>↗</span></a></section>
    </main><footer className="site-footer"><div className="container footer-inner"><span>© {new Date().getFullYear()} {t.footer}</span><div><a href="https://www.linkedin.com/in/marianopividori/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={github} target="_blank" rel="noreferrer">GitHub ↗</a><a href="mailto:marianopividori93@gmail.com">Email ↗</a></div></div></footer>
  </div>;
}
export default App;
