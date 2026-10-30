import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Boxes, Code2, Github, Heart, Linkedin, Mail, MapPin, Rocket, Shield, Sparkles, Terminal } from "lucide-react";
import { existsSync } from "node:fs";
import { join } from "node:path";
import Navbar from "@/components/Navbar";
import ProjectVisual from "@/components/ProjectVisual";
import Reveal from "@/components/Reveal";
import { learning, profile, projects, skills } from "@/data/portfolio";

const expertise = [
  { icon: Code2, title: "Software development", text: "Turning ideas into useful applications." },
  { icon: Sparkles, title: "Artificial intelligence", text: "Exploring practical AI and machine learning." },
  { icon: Shield, title: "Cybersecurity", text: "Studying systems, networks, and digital safety." },
  { icon: Boxes, title: "Full-stack development", text: "Building across frontend, backend, and APIs." },
];

const hasResume = existsSync(join(process.cwd(), "public", "Atharva-Kanekar-CV.pdf"));

export default function Home() {
  return <>
    <Navbar />
    <main>
      <section className="hero container" id="home">
        <Reveal className="hero-copy">
          <h1 className="name-display"><span>ATHARVA</span> <em>KANEKAR</em></h1>
          <p className="hero-role">AI &amp; SOFTWARE ENGINEERING STUDENT</p>
          <span className="short-rule"/>
          <p className="hero-description">Exploring AI, building software, and solving real-world problems through technology.</p>
          <div className="hero-actions"><a className="button button-dark" href="#projects">Explore my work <ArrowRight size={15}/></a><a className="button button-outline" href="#about">More about me</a></div>
          <a href="#expertise" className="scroll-cue">SCROLL DOWN <ArrowDown size={12}/></a>
        </Reveal>
      </section>

      <section className="expertise-band" id="expertise"><div className="container expertise-grid">{expertise.map(({icon: Icon,title,text})=><article className="expertise-item" key={title}><Icon className="line-icon" size={23} strokeWidth={1.35}/><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>

      <section className="projects-section section-pad container" id="projects"><div className="section-heading"><div><p className="eyebrow">FEATURED WORK</p><h2>Selected Projects</h2><p className="section-intro">Built with curiosity. Designed to solve real problems.</p></div><a className="text-link" href={profile.github} target="_blank" rel="noreferrer">View all projects <ArrowRight size={14}/></a></div>
        <div className="project-grid">{projects.map((project)=><article className="project-card" key={project.name}>{project.href ? <a className="project-image-link" href={project.href} aria-label={`View ${project.name} details`}><ProjectVisual type={project.visual}/><span className="project-open"><ArrowUpRight size={18}/></span></a> : <div className="project-image-link" aria-hidden="true"><ProjectVisual type={project.visual}/></div>}<div className="project-meta"><span>{project.category}</span><span>/{project.number}</span></div><h3>{project.name}</h3><p className="project-description">{project.description}</p><div className="tag-list">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div><div className="project-links">{project.href ? <a href={project.href}>View project <ArrowRight size={13}/></a> : <span className="link-placeholder">Project link to be added</span>}{project.repo ? <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub repository`}><Github size={15}/></a> : <span className="link-placeholder repo-placeholder">Repo to be added</span>}</div></article>)}</div>
      </section>

      <section className="about-section" id="about"><div className="container about-layout"><div className="about-copy"><p className="eyebrow">ABOUT ME</p><h2>Technology is not<br/>just about writing code.<br/>It&apos;s about creating<br/><em>meaningful solutions.</em></h2><p>I&apos;m an MCA student passionate about AI, software engineering, and cybersecurity.</p><p>I enjoy learning, experimenting, and building technology that solves meaningful problems.</p><div className="signature">Atharva Kanekar</div>{hasResume ? <a className="button button-outline cv-button" href="/Atharva-Kanekar-CV.pdf" download>Download CV <ArrowDown size={14}/></a> : <span className="button button-outline cv-button" aria-disabled="true">Download CV <ArrowDown size={14}/></span>}<span className="asset-note">{hasResume ? "Download my resume" : "Add /public/Atharva-Kanekar-CV.pdf to enable the download"}</span></div>
        <div className="about-still-life" aria-label="Decorative composition reading build, learn, create, repeat"><div className="plant"><i/><i/><i/><i/><i/><span/></div><div className="frame-art"><span>BUILD.<br/>LEARN.<br/>CREATE.<br/><b>REPEAT.</b></span><small>NOTES TO SELF · 001</small></div><div className="desk-book"><span>FIELD NOTES</span><i/></div><div className="desk-pen pen-one"/><div className="desk-pen pen-two"/></div>
        <div className="stats-list"><div className="stat-row"><BookOpen size={22}/><strong>BCA + MCA</strong><span>EDUCATION</span></div><div className="stat-row"><Rocket size={22}/><strong>04</strong><span>FEATURED PROJECTS</span></div><div className="stat-row"><Terminal size={22}/><strong>15</strong><span>TOOLS &amp; TECHNOLOGIES</span></div><div className="stat-row"><MapPin size={22}/><strong>Mumbai</strong><span>BASED IN INDIA</span></div><p className="stats-note">A snapshot of my current learning journey.</p></div>
      </div></section>

      <section className="education-section container" aria-labelledby="education-heading"><div className="education-title"><p className="eyebrow">EDUCATION</p><h2 id="education-heading">Learning is<br/>the foundation.</h2></div><article className="education-entry"><span>2025 — PRESENT · PURSUING</span><h3>Master of Computer Applications</h3><p>DES Navinchandra Mehta Institute of Technology and Development, Mumbai</p><b>CGPA 8.32</b></article><article className="education-entry"><span>2022 — 2025 · COMPLETED</span><h3>Bachelor of Computer Applications</h3><p>Tilak Maharashtra Vidyapeeth</p><b>CGPA 8.30</b></article></section>

      <section className="skills-section section-pad container" id="skills"><div className="section-heading"><div><p className="eyebrow">MY TOOLKIT</p><h2>Technologies I Work With</h2><p className="section-intro">Tools I&apos;m learning and using to bring ideas to life.</p></div><span className="section-index">01 — 05 / TOOLKIT</span></div><div className="skills-grid">{skills.map((group,i)=><article className="skill-group" key={group.title}><span className="skill-number">0{i+1}</span><h3>{group.title}</h3><ul>{group.items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></section>

      <section className="learning-section section-pad" id="learning"><div className="container"><div className="section-heading"><div><p className="eyebrow">CONTINUOUS LEARNING</p><h2>Always learning.<br/><em>Always improving.</em></h2></div></div><div className="learning-content">{learning.map((group,i)=><div className="learning-row" key={group.category}><div className="learning-label"><span>0{i+1}</span>{group.category}</div><div className="learning-list">{group.items.map(({name,href})=>href ? <a className="learning-chip" key={name} href={href} target="_blank" rel="noreferrer">{name}<ArrowUpRight size={13}/></a> : <span className="learning-chip" key={name}>{name}</span>)}</div></div>)}<div className="learning-row certification-row"><div className="learning-label"><span>03</span>Certifications</div><div className="empty-cert"><p>No verified certifications listed.</p></div></div></div></div></section>

      <section className="cta-section container"><div><p className="eyebrow">HAVE A PROJECT OR OPPORTUNITY IN MIND?</p><h2>Let&apos;s Create Something <em>Meaningful Together.</em></h2></div><a className="button button-dark" href="#contact">Let&apos;s connect <ArrowRight size={15}/></a></section>

      <section className="contact-section section-pad container" id="contact"><div className="contact-heading"><p className="eyebrow">LET&apos;S TALK</p><h2>Good things start<br/><em>with a conversation.</em></h2><p>Have an interesting project? Let&apos;s talk.</p></div><div className="contact-details"><a className="contact-item" href={profile.linkedin} target="_blank" rel="noreferrer"><span><Linkedin size={17}/> LINKEDIN</span><strong>Connect with me <ArrowUpRight size={15}/></strong></a><a className="contact-item" href={profile.github} target="_blank" rel="noreferrer"><span><Github size={17}/> GITHUB</span><strong>Explore my work <ArrowUpRight size={15}/></strong></a><div className="contact-item"><span><Mail size={17}/> EMAIL</span><strong className="email-placeholder">Email address to be added</strong></div><div className="contact-item"><span><MapPin size={17}/> LOCATION</span><strong>Mumbai, Maharashtra, India</strong></div></div></section>
    </main>
    <footer className="footer"><div className="container footer-main"><a className="brand footer-brand" href="#home"><span className="brand-mark">AK</span><span className="brand-copy"><b>ATHARVA KANEKAR</b><small>AI &amp; SOFTWARE ENGINEERING</small></span></a><div className="footer-col"><b>QUICK LINKS</b><div><a href="#home">Home</a><a href="#about">About</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#learning">Learning</a></div></div><div className="footer-col"><b>EXPLORE</b><div><a href="#expertise">Expertise</a><a href="#contact">Contact</a></div></div><div className="footer-col footer-social"><b>FIND ME ONLINE</b><div><a href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a></div></div></div><div className="container footer-bottom"><span>© 2026 Atharva Kanekar.</span><span>Designed and developed with curiosity <Heart size={12}/></span></div></footer>
  </>;
}
