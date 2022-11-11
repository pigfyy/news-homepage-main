import { useState } from "react";

import MobileMenu from "./assets/components/MobileMenu.jsx";
import Header from "./assets/components/Header.jsx";
import MainSection from "./assets/components/MainSection.jsx";
import News from "./assets/components/News.jsx";
import Recommendations from "./assets/components/Recommendations.jsx";
import "./App.css";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth > 768) {
      setMobileMenuOpen(false);
    }
  });

  function toggleMobileMenu() {
    setMobileMenuOpen((mobileMenuOpen) => !mobileMenuOpen);
  }

  return (
    <>
      <MobileMenu
        toggleMobileMenu={toggleMobileMenu}
        mobileMenuOpen={mobileMenuOpen}
      />

      <div className="flex">
        <div
          className={`bg-grey w-full h-full fixed top-0 transition-all ${
            !mobileMenuOpen ? "opacity-0 z-0" : "opacity-70 z-20"
          }`}
        ></div>

        <main
          className={`w-11/12 max-w-6xl mx-auto mb-20 pt-5 space-y-6 z-10 md:space-y-16 md:mt-20`}
        >
          <Header
            windowWidth={windowWidth}
            toggleMobileMenu={toggleMobileMenu}
          />
          <div className="space-y-16 md:space-y-0 md:grid md:grid-cols-3 md:gap-9">
            <MainSection windowWidth={windowWidth} />
            <News />
          </div>
          <div className="pt-12 md:pt-0">
            <Recommendations />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
