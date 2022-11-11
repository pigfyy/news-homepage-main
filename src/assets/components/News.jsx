import React from "react";
import uniqid from "uniqid";
import data from "../data.json";

const newsBlocks = data.news.map((s, index) => {
  return (
    <React.Fragment key={uniqid()}>
      <li className="space-y-1.5">
        <div>
          <a href={s.link}>
            <h3 className="text-2xl font-bold text-custom-white text-left hover:text-yellow-orange">
              {s.title}
            </h3>
          </a>
        </div>
        <div>
          <a href={s.link}>
            <p className="text-custom-light-blue text-left hover:text-yellow-orange">
              {s.description}
            </p>
          </a>
        </div>
      </li>
      {index < data.news.length - 1 && (
        <hr className="text-custom-primary-blue" />
      )}
    </React.Fragment>
  );
});

export default function () {
  return (
    <section className="bg-custom-dark-blue">
      <div className="w-10/12 mx-auto py-4 space-y-4">
        <h2 className="text-3xl font-bold text-custom-lighter-orange md:text-3xl-md">
          New
        </h2>
        <ul className="space-y-7">{newsBlocks}</ul>
      </div>
    </section>
  );
}
