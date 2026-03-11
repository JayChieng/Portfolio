function DetailsSlide() {
  return (
    <section className="slide">
      <p className="slide-label">DETAILS</p>
      <h1>Technical Profile</h1>
      <h2>Skills, education, and development tools</h2>

      <div className="details-grid">
        <div className="info-card accent-card">
          <h3>Technical Skills</h3>
          <p>
            HTML5, CSS3, JavaScript, TypeScript, React, React Native,
            Responsive Design, DOM Manipulation, JSON, Firebase
          </p>
        </div>

        <div className="info-card">
          <h3>Tools</h3>
          <p>
            Git, GitHub, VS Code, Expo, Vercel, Chrome DevTools, Figma
          </p>
        </div>

        <div className="info-card">
          <h3>Education</h3>
          <p>Fanshawe College, London, ON</p>
          <p>Internet Applications & Web Development Diploma</p>
          <p>Expected Graduation: April 2026</p>
        </div>

        <div className="info-card">
          <h3>Strengths</h3>
          <p>
            Clean UI thinking, practical problem solving, teamwork, and
            continuous learning through real academic projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DetailsSlide;