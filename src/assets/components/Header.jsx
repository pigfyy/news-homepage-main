import logo from "../imgs/logo.svg";

export default function (props) {
  function makeMenu() {
    if (props.windowWidth < 768) {
      return <span className="material-symbols-outlined text-4xl">menu</span>;
    }
    return (
      <>
        <button className="header-btn text-custom-primary-blue text-xl">
          Home
        </button>
        <button className="header-btn text-custom-primary-blue text-xl">
          New
        </button>
        <button className="header-btn text-custom-primary-blue text-xl">
          Popular
        </button>
        <button className="header-btn text-custom-primary-blue text-xl">
          Trending
        </button>
        <button className="header-btn text-custom-primary-blue text-xl">
          Categories
        </button>
      </>
    );
  }

  return (
    <header>
      <div className="flex flex-row justify-between">
        <div className="flex items-center">
          <img
            src={logo}
            alt="company logo, with a big W"
            className="w-9/12 md:w-20"
          />
        </div>
        <div className="flex items-center space-x-8">{makeMenu()}</div>
      </div>
    </header>
  );
}
