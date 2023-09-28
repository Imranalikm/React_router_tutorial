import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./routes/Home"
import About from "./routes/About";
import Stories from "./routes/Stories";
import StoryList from "./routes/StoryList";

function App() {
  return (
    <div className="bg-slate-100 min-h-screen max-w-screen-lg mx-auto flex flex-col">
      <Header />
      <main className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={ <About/>} />
          <Route path="stories" element={<Stories/>}>
                 <Route  index  element={<StoryList/>} />                            
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
