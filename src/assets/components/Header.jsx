import logo from "../imgs/logo.svg";
import data from "../data.json";

export default function (props) {
  function makeMenu() {
    if (props.windowWidth < 768) {
      return (
        <button onClick={props.toggleMobileMenu}>
          <span className="material-symbols-outlined text-4xl">menu</span>
        </button>
      );
    }
    return (
      <ul className="flex flex-row space-x-8">
        {data.headerButtons.map((s, index) => {
          return (
            <li key={index}>
              <a href={s.link}>
                <button className="text-2xl font-xl text-custom-primary-blue hover:text-red-orange">
                  {s.text}
                </button>
              </a>
            </li>
          );
        })}
      </ul>
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
