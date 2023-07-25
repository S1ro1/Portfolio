import "@fontsource/fira-code";
import "./App.css";
import "./components/VerticalBlock/VerticalBlock";
import VerticalBlock from "./components/VerticalBlock/VerticalBlock";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <VerticalBlock
        title="About me"
        content={About()}
        img_path="/icons/person.png"
      />
      <VerticalBlock
        title="My Skills"
        content={Skills()}
        img_path="/icons/code.png"
        to_left={true}
      />
      <VerticalBlock
        title="Some projects"
        content={About()}
        img_path="/logo512.png"
      />
      <Footer />
    </div>
  );
}

export default App;
