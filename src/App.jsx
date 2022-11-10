import { useState } from "react";

import Header from "./assets/components/Header.jsx";
import MainSection from "./assets/components/MainSection.jsx";
import News from "./assets/components/News.jsx";
import Recommendations from "./assets/components/Recommendations.jsx";
import "./App.css";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <main className="w-11/12 max-w-6xl mx-auto mb-20 mt-5 space-y-6 md:space-y-16 md:mt-20">
      <Header windowWidth={windowWidth} />
      <div className="space-y-16 md:space-y-0 md:grid md:grid-cols-3 md:gap-9">
        <MainSection windowWidth={windowWidth} />
        <News />
      </div>
      <div className="pt-12 md:pt-0">
        <Recommendations />
      </div>
    </main>
  );
}

export default App;
