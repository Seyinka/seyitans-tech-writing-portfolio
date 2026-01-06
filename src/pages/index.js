import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HeroSection() {
  return (
    <header className={clsx(styles.hero)}>
      <div className={styles.heroContent}>
        {/* Text Section */}
        <div className={styles.heroText}>
          <Heading as="h1" className={styles.heroTitle}>
            Hi, I’m <span>Seyitan Oluwaseitan</span> 👋
          </Heading>

          <p className={styles.heroSubtitle}>
            Technical Writer & DevOps Engineer crafting clear, scalable
            documentation for cloud platforms, APIs, AI tools, and emerging
            technologies.
          </p>

          <div className={styles.heroButtons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro"
            >
              View Portfolio
            </Link>

            <Link
              className="button button--secondary button--lg"
              to="/blog"
            >
              Read Articles (Coming Soon)
            </Link>
          </div>
        </div>

        {/* Avatar / Hero Image */}
        <div className={styles.heroImage}>
          <img
            src="/img/seyitan.jpg" // <-- Put your personal photo here
            alt="Seyitan Oluwaseitan"
          />
        </div>
      </div>
    </header>
  );
}

// Projects data
const projects = [
  {
    title: "Documentation Tooling & Static Site Generators",
    description: "How-to guide for setting up a docs-as-code workflow using Docusaurus",
    link: "/docs/documentation-tooling/intro",
  },
  {
    title: "API Documentation & OpenAPI",
    description: "Improved documentation for selected API endpoints",
    link: "/docs/api-documentation/intro",
  },
  {
    title: "Documentation Automation",
    description: "Automated checks using tools like Vale, Spectral, and GitHub Actions",
    link: "/docs/documentation-tooling/getting-started",
  },
  {
    title: "AI for Documentation",
    description: "Prompt-based documentation using AI tools",
    link: "/docs/ai-documentation/intro",
  },
  {
    title: "DevOps & Cloud Documentation",
    description: "Step-by-step guide for a DevOps/cloud tool or process",
    link: "/docs/devops-cloud-documentation/intro",
  },
  {
    title: "Technical Writing in Web3",
    description: "Whitepaper draft for a Web3 platform",
    link: "/docs/web3-documentation/intro",
  },
];

function ProjectsSection() {
  return (
    <section className={styles.projects}>
      <h2 className={styles.projectsTitle}>My Work</h2>
      <div className={styles.cardsGrid}>
        {projects.map((proj, idx) => (
          <div key={idx} className={styles.card}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <Link className="button button--primary" to={proj.link}>
              View Project
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}


export default function Home() {
  return (
    <Layout
      title="Technical Writing Portfolio"
      description="Technical writing, DevOps documentation, API and AI content by Seyitan Oluwaseitan"
    >
      <HeroSection />

      {/* Skills strip */}
      <section className={styles.skills}>
        <p>Cloud • DevOps • API Docs • AI • Web3 • Open Source</p>
      </section>

      {/* Projects / Portfolio */}
      <ProjectsSection />
    </Layout>
  );
}



