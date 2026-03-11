import IntroSlide from "../pages/IntroSlide";
import ProjectSlide from "../pages/ProjectSlide";
import DetailsSlide from "../pages/DetailsSlide";


export type SlideItem = {
  id: number;
  title: string;
  component: React.ComponentType;
};

export const slides: SlideItem[] = [
  {
    id: 1,
    title: "Intro",
    component: IntroSlide,
  },
  {
    id: 2,
    title: "Project",
    component: ProjectSlide,
  },
  {
    id: 3,
    title: "Details",
    component: DetailsSlide,
  },
];