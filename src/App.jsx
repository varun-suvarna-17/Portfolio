import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import SkillsPage from "./pages/SkillsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import UpGradient from "./components/UpGradient";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <UpGradient />
      <NavBar />
      <HomePage />
      <ProjectPage />
      <SkillsPage />
      <AboutPage />
      <ContactPage />
      <Footer/>
    </>
  );
}

export default App;
