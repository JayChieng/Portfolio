import { useState } from "react";
import IntroSlide from "./pages/IntroSlide";
import ProjectSlide from "./pages/ProjectSlide";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState<"about" | "project">("about");

  return (
    <div className="app-shell">
      <header className="top-nav">
        <button
          className={`nav-button ${activePage === "about" ? "active" : ""}`}
          onClick={() => setActivePage("about")}
          type="button"
        >
          About
        </button>

        <button
          className={`nav-button ${activePage === "project" ? "active" : ""}`}
          onClick={() => setActivePage("project")}
          type="button"
        >
          Project
        </button>
      </header>

      <main className="page-wrapper">
        {activePage === "about" ? <IntroSlide /> : <ProjectSlide />}
      </main>
    </div>
  );
}

export default App;