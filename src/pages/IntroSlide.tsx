function IntroSlide() {
  return (
    <section className="slide about-slide">
      <p className="slide-label">ABOUT</p>

      <div className="about-top">
        <div className="about-main">
          <h1>Jay Chieng</h1>
          <h2>Web & Application Development Student</h2>

          <div className="tag-group">
            <span className="tag">React</span>
            <span className="tag">TypeScript</span>
            <span className="tag">Frontend Focused</span>
            <span className="tag">Open to Internship</span>
          </div>

          <p className="intro-text">
            I build responsive web and mobile applications with a focus on
            clean UI, practical functionality, and user-friendly experiences.
          </p>

          <div className="intro-actions">
            <a
              href="/Jay-Chieng-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Preview Resume
            </a>

            <a
              href="/Jay-Chieng-Resume.pdf"
              download
              className="project-link ghost-link"
            >
              Download Resume
            </a>

            <a
              href="https://github.com/JayChieng"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link ghost-link"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/jay-chieng-7a2882327"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link ghost-link"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-avatar">JC</div>

          <div className="hero-status">
            <span className="status-dot"></span>
            Available for internship
          </div>

          <div className="hero-mini-stats">
            <div className="mini-stat">
              <h3>2026</h3>
              <p>Expected Graduation</p>
            </div>

            <div className="mini-stat">
              <h3>Fanshawe</h3>
              <p>Web Development</p>
            </div>
          </div>
        </div>
      </div>

      <div className="details-grid">
        <div className="info-card">
          <h3>Technical Skills</h3>
          <p>
            HTML, CSS, JavaScript, TypeScript, React, React Native, Firebase,
            Responsive Design, Git, GitHub
          </p>
        </div>

        <div className="info-card">
          <h3>Education</h3>
          <p>Fanshawe College</p>
          <p>Internet Applications & Web Development Diploma</p>
        </div>

        <div className="info-card">
          <h3>Focus Areas</h3>
          <p>
            Frontend development, responsive interfaces, practical web and
            mobile applications, and clean user experiences.
          </p>
        </div>

        <div className="info-card">
          <h3>Contact</h3>
          <p>Email: jaychieng05@gmail.com</p>
          <p>Location: London, Ontario, Canada</p>
        </div>
      </div>
    </section>
  );
}

export default IntroSlide;