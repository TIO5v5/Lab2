import Header from "./components/Header";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Education />
        <Experience />
        <Skills />
      </main>

      <Footer />
    </>
  );
}

export default App;