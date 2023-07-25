import "@fontsource/fira-code";
import "./App.css";
import "./components/VerticalBlock/VerticalBlock";
import VerticalBlock from "./components/VerticalBlock/VerticalBlock";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <h1>Welcome to my app</h1>
      <VerticalBlock
        title="About me"
        content={About()}
        img_path="/logo512.png"
      />
      <VerticalBlock
        title="My Skills"
        content={Skills()}
        img_path="/logo512.png"
        to_left={true}
      />
      <VerticalBlock
        title="My title 3"
        content={About()}
        img_path="/logo512.png"
      />
      <Footer />
    </div>
  );
}

export default App;
