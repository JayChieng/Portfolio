import { useState } from "react";
import Sidebar from "./components/Sidebar";
import SlideView from "./components/SlideView";
import { slides } from "./data/slides";
import "./App.css";

function App() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  return (
    <div className="app">
      <Sidebar
        slides={slides}
        currentSlide={currentSlide}
        onSelectSlide={setCurrentSlide}
      />

      <SlideView slide={slides[currentSlide]} />
    </div>
  );
}

export default App;