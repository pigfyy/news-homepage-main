import data from "../data.json";

export default function (props) {
  return (
    <div
      className={`w-8/12 fixed right-0 min-h-screen bg-white pt-5 z-30 transition-all ${
        !props.mobileMenuOpen ? "translate-x-full" : "translate-x-0"
      }`}
    >
      <button onClick={props.toggleMobileMenu} className="fixed right-5">
        <span className="material-symbols-outlined text-4xl-md">close</span>
      </button>

      <ul className="w-9/12 mx-auto mt-44 space-y-5">
        {data.headerButtons.map((s, index) => {
          return (
            <li key={index}>
              <a href={s.link}>
                <button className="text-2xl font-xl text-navy-blue hover:text-red-orange">
                  {s.text}
                </button>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
