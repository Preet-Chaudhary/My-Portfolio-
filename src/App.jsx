import About from "./components/about";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <div className="fixed left-0 top-0 -z-10 h-full w-full"><div className="relative min-h-screen w-full bg-neutral-900"><div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div></div></div>
    
    <div> <Navbar />
    <Hero />
    <About />
    
    </div>
    </>
    
   
);
}

export default App;
