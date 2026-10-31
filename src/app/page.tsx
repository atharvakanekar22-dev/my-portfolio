import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import GitHubGraph from "@/components/GitHubGraph";
import ProjectCardVisual from "@/components/ProjectCardVisual";
import Reveal from "@/components/Reveal";
import { profile, projects, education, works } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* ============================================================
            1. HOME
            ============================================================ */}
        <section className="hero" id="home">
          <div className="hero-inner container">
            <Reveal className="hero-copy">
              <p className="hero-greeting">Hey, I&apos;m</p>
              <h1 className="hero-name">
                {profile.firstName}
                <span className="accent">{profile.lastName}.</span>
              </h1>
            </Reveal>

            <Reveal className="hero-portrait">
              <div className="hero-orbit" aria-hidden="true">
              </div>
              <div className="hero-portrait-circle">
                <img
                  src="/images/atharva-portrait.png"
                  alt="Portrait of Atharva Kanekar"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============================================================
            2. ABOUT ME
            ============================================================ */}
        <section className="about-section section-spacing" id="about">
          <div className="container">
            <Reveal className="about-content">
              <p className="section-label">About Me</p>
              <h2 className="section-title">About Me</h2>
              <p className="about-text">{profile.bio}</p>
            </Reveal>
          </div>
        </section>

        {/* ============================================================
            3. SELECTED PROJECTS
            ============================================================ */}
        <section className="projects-section section-spacing" id="projects">
          <div className="container">
            <Reveal className="section-header">
              <p className="section-label">Selected Projects</p>
              <h2 className="section-title">Selected Projects</h2>
            </Reveal>

            <div className="project-grid">
              {projects.map((project) => (
                <Reveal className="project-card" key={project.name}>
                  {/* Visual card header */}
                  <ProjectCardVisual
                    name={project.name}
                    image={project.image}
                    number={project.number}
                  />

                  <div className="project-info">
                    <span className="project-number">{project.number}</span>
                    <h3 className="project-name">{project.name}</h3>
                    <p className="project-desc">{project.description}</p>

                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span className="project-tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="project-links-row">
                      {project.href ? (
                        <a
                          className="project-link"
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          View Project <ArrowUpRight size={14} />
                        </a>
                      ) : project.repo ? (
                        <a
                          className="project-link"
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          View Repository <ArrowUpRight size={14} />
                        </a>
                      ) : (
                        <span className="project-link-placeholder">
                          In Development
                        </span>
                      )}

                      {project.repo && project.href ? (
                        <a
                          className="project-icon-link"
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.name} GitHub repository`}
                        >
                          <Github size={16} />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            4. EDUCATION
            ============================================================ */}
        <section
          className="education-section section-spacing"
          id="education"
          aria-labelledby="education-heading"
        >
          <div className="container">
            <Reveal className="section-header">
              <p className="section-label" id="education-heading">
                Education
              </p>
              <h2 className="section-title">Education</h2>
            </Reveal>

            <div className="education-grid">
              {education.map((edu) => (
                <Reveal className="education-card" key={edu.degree}>
                  <span className="education-status">{edu.status}</span>
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-institution">{edu.institution}</p>
                  {edu.cgpa && (
                    <p className="education-cgpa">CGPA: {edu.cgpa}</p>
                  )}
                  {edu.period && (
                    <p className="education-period">{edu.period}</p>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            5. GITHUB ACTIVITY
            ============================================================ */}
        <section className="github-section section-spacing" id="github">
          <div className="container">
            <div className="github-header">
              <Reveal className="github-header-text">
                <p className="section-label">GitHub Activity</p>
                <h2 className="section-title">Building Consistently.</h2>
              </Reveal>
              <a
                className="github-profile-link"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                @{profile.githubUsername} <ArrowUpRight size={14} />
              </a>
            </div>

            <GitHubGraph />
          </div>
        </section>

        {/* ============================================================
            6. MORE OF MY WORK
            ============================================================ */}
        <section className="works-section section-spacing" id="works">
          <div className="container">
            <Reveal className="section-header">
              <p className="section-label">More of My Work</p>
              <h2 className="section-title">More of My Work</h2>
            </Reveal>

            {works.length > 0 ? (
              <div className="works-grid">
                {works.map((work) => (
                  <a
                    className="works-card"
                    key={work.name}
                    href={work.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div>
                      <p className="works-card-name">{work.name}</p>
                      {work.description && (
                        <p className="works-card-desc">{work.description}</p>
                      )}
                    </div>
                    <ArrowUpRight size={16} />
                  </a>
                ))}
              </div>
            ) : (
              <p className="works-empty">
                Explore more on my{" "}
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "var(--color-accent)", fontWeight: 500 }}
                >
                  GitHub profile
                </a>
                .
              </p>
            )}
          </div>
        </section>

        {/* ============================================================
            7. CONNECT
            ============================================================ */}
        <section className="connect-section section-spacing" id="connect">
          <div className="container">
            <Reveal className="section-header">
              <p className="section-label">Let&apos;s Connect</p>
              <h2 className="connect-heading">
                Have an idea? Let&apos;s connect.
              </h2>
            </Reveal>

            <div className="connect-grid">
              {/* GitHub */}
              <a
                className="connect-card"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <div className="connect-card-icon">
                  <Github size={20} />
                </div>
                <div>
                  <p className="connect-card-label">GitHub</p>
                  <p className="connect-card-value">
                    @{profile.githubUsername}
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                className="connect-card"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <div className="connect-card-icon">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="connect-card-label">LinkedIn</p>
                  <p className="connect-card-value">Atharva Kanekar</p>
                </div>
              </a>

              {/* Email */}
              <a
                className="connect-card"
                href={`mailto:${profile.email}`}
              >
                <div className="connect-card-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="connect-card-label">Email</p>
                  <p className="connect-card-value">{profile.email}</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ============================================================
          FOOTER
          ============================================================ */}
      <footer className="site-footer">
        <div className="container footer-content">
          <span className="footer-text">© 2026 Atharva Kanekar.</span>
          <span className="footer-tagline">
            Designed and developed with curiosity.
          </span>
        </div>
      </footer>
    </>
  );
}
