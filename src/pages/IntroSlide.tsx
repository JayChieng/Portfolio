function IntroSlide() {
  return (
    <section className="slide intro-slide">
      <p className="slide-label">INTRO</p>

      <div className="intro-hero">
        <div className="intro-left">
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

          <div className="contact-grid">
            <div className="contact-item">
              <span className="contact-label">Email</span>
              <p>jaychieng05@gmail.com</p>
            </div>

            <div className="contact-item">
              <span className="contact-label">Location</span>
              <p>London, Ontario, Canada</p>
            </div>

            <div className="contact-item">
              <span className="contact-label">GitHub</span>
              <a
                href="https://github.com/JayChieng"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/JayChieng
              </a>
            </div>

            <div className="contact-item">
              <span className="contact-label">LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/jay-chieng-7a2882327"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/Jay-chieng
              </a>
            </div>
          </div>

          <div className="intro-actions">
            <a 
              href="/Jay-Chieng-Resume.pdf" 
              download
              className="project-link"
            >
              Download Resume
            </a>

            <a
              href="/Jay-Chieng-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link ghost-link"
            >
              Preview Resume
            </a>
          </div>
        </div>

        <div className="intro-right">
          <div className="hero-card">
            <div className="hero-avatar">JC</div>

            <div className="hero-status">
              <span className="status-dot"></span>
              Available for internship
            </div>

            <div className="hero-mini-stats">
              <div className="mini-stat">
                <h3>1+</h3>
                <p>Featured Project</p>
              </div>
              <div className="mini-stat">
                <h3>4/2026</h3>
                <p>Expected Graduation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSlide;