import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import SkillsPage from "./pages/SkillsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <div>
        <div className="fixed h-150 w-full radial_bg rounded-full z-0" />
      </div>
      <NavBar />
      <HomePage />
      <ProjectPage />
      <SkillsPage />
      <AboutPage />
      <ContactPage />
    </>
  );
}

export default App;
