import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden flex flex-col justify-center items-center">
        <NavBar />
      <Hero />
      <About />
    </main>
  );
}

export default App;
