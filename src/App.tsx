import NavBar from "./Components/NavBar";
import HeaderSection from "./Sections/HeaderSection";
import AboutMeSection from "./Sections/AboutMeSection";
import ExperienceSection from "./Sections/ExperienceSection";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import ProjectsSection from "./Sections/ProjectsSection";
import ContactMeSection from "./Sections/ContactMeSection";

interface SectionProps {
  isVertical?: boolean;
  id?: string;
  children: React.ReactNode;
}

function AppSection(props: SectionProps): React.JSX.Element {
  const [section, sectionThreshold] = useIntersectionObserver({
    threshold: 0.35,
    root: null,
    rootMargin: "80px",
  });

  return (
    <section
      id={props.id}
      ref={section}
      className={`flex ${props.isVertical ? "flex-col" : null}
        ${sectionThreshold?.isIntersecting ? "opacity-100" : "opacity-0"}
         min-h-screen items-center justify-center overflow-hidden transition-opacity 
         delay-200 duration-[1500ms]`}
    >
      {props.children}
    </section>
  );
}

function App() {
  return (
    <div className="App bg-background">
      <NavBar />
      <div className="container">
        <AppSection id="HeaderSection">
          <HeaderSection />
        </AppSection>

        <AppSection id="AboutMeSection" isVertical={true}>
          <AboutMeSection />
        </AppSection>

        <AppSection id="ExperienceSection" isVertical={true}>
          <ExperienceSection />
        </AppSection>

        <ProjectsSection id="ProjectsSection" />

        <AppSection id="ContactMeSection" isVertical={true}>
          <ContactMeSection />
        </AppSection>
      </div>
    </div>
  );
}

export default App;
