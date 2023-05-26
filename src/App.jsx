import { useState, useEffect } from "react";

import Banner from "./komponents/Banner";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Skills from "./komponents/Skills";
import Layout from "./komponents/Layout";
import Projects from "./komponents/Projects";
import Kontakt from "./komponents/Kontakt";
import { getProjects } from "./utils/getProjects";
import Footer from "./komponents/Footer";
import Navbar from "./komponents/Navbar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BookIcon from "@mui/icons-material/Book";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
const navigation = {
  en: [
    {
      name: "Home",
      href: "#",
      current: true,
      icon: <HomeOutlinedIcon fontSize="large" style={{ color: "white" }} />,
    },
    {
      name: "Skills",
      href: "#skills",
      current: false,
      icon: <BookIcon fontSize="large" style={{ color: "white" }} />,
    },
    {
      name: "Projects",
      href: "#projects",
      current: false,
      icon: (
        <ContentPasteOutlinedIcon fontSize="large" style={{ color: "white" }} />
      ),
    },
    {
      name: "Contact",
      href: "#contact",
      current: false,
      icon: (
        <ContactPageOutlinedIcon fontSize="large" style={{ color: "white" }} />
      ),
    },
  ],
  se: [
    {
      name: "Hem",
      href: "#",
      current: true,
      icon: <HomeOutlinedIcon fontSize="large" style={{ color: "white" }} />,
    },
    {
      name: "Kompetens",
      href: "#skills",
      current: false,
      icon: <BookIcon fontSize="large" style={{ color: "white" }} />,
    },
    {
      name: "Projekt",
      href: "#projects",
      current: false,
      icon: (
        <ContentPasteOutlinedIcon fontSize="large" style={{ color: "white" }} />
      ),
    },
    {
      name: "Kontakta mig",
      href: "#contact",
      current: false,
      icon: (
        <ContactPageOutlinedIcon fontSize="large" style={{ color: "white" }} />
      ),
    },
  ],
};

function App() {
  const [currentNavigation, setCurrentNavigation] = useState([]);
  const [language, setLanguage] = useState("se");

  const [projectsData, setProjectsData] = useState();

  const fetchProjects = async () => {
    const projects = await getProjects();
    setProjectsData(projects.projectsSE);
  };

  useEffect(() => {
    setCurrentNavigation(navigation[language]);
    fetchProjects();
  }, []);
  return (
    <Layout>
      <div className="main-content-section">
        <Navbar navigation={currentNavigation} setLanguage={setLanguage} />
        <Banner />
        <Skills />
        <Projects projects={projectsData} />
        <Kontakt />
        <Footer />
      </div>
    </Layout>
  );
}
export default App;
