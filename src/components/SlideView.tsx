import type { SlideItem } from "../data/slides";

type SlideViewProps = {
  slide: SlideItem;
};

function SlideView({ slide }: SlideViewProps) {
  const SlideComponent = slide.component;

  return (
    <main className="slide-view">
      <div className="slide-container">
        <SlideComponent />
      </div>
    </main>
  );
}

export default SlideView;