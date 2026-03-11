import type { SlideItem } from "../data/slides";
import Thumbnail from "./Thumbnail";

type SidebarProps = {
  slides: SlideItem[];
  currentSlide: number;
  onSelectSlide: (index: number) => void;
};

function Sidebar({
  slides,
  currentSlide,
  onSelectSlide,
}: SidebarProps) {
  return (
     <aside className="sidebar">
      <h2 className="sidebar-title">Portfolio</h2>

      <div className="thumbnail-list">
        {slides.map((slide, index) => (
          <Thumbnail
            key={slide.id}
            title={slide.title}
            number={index + 1}
            active={currentSlide === index}
            onClick={() => onSelectSlide(index)}
          />
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;