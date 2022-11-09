import logo from "../imgs/logo.svg";
import { useState, useEffect } from "react";

export default function () {
  const [isMobile, setIsMobile] = useState(!(window.innerWidth >= 700));
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 700) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  });

  function makeMenu() {
    if (isMobile) {
      return <span className="material-symbols-outlined text-4xl">menu</span>;
    }
    return (
      <>
        <button className="header-btn text-custom-primary-blue text-sm">
          Home
        </button>
        <button className="header-btn text-custom-primary-blue text-sm">
          New
        </button>
        <button className="header-btn text-custom-primary-blue text-sm">
          Popular
        </button>
        <button className="header-btn text-custom-primary-blue text-sm">
          Trending
        </button>
        <button className="header-btn text-custom-primary-blue text-sm">
          Categories
        </button>
      </>
    );
  }

  return (
    <header>
      <div className="flex flex-row justify-between">
        <div className="flex items-center">
          <img src={logo} alt="company logo, with a big W" className="w-9/12" />
        </div>
        <div className="flex items-center space-x-8">{makeMenu()}</div>
      </div>
    </header>
  );
}
