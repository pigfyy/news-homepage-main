import React from "react";
import uniqid from "uniqid";

const news = [
  {
    title: "Hydrogen VS Electric Cars",
    description: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    description:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    description:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

const newsBlocks = news.map((s, index) => {
  return (
    <React.Fragment key={uniqid()}>
      <li>
        <a href="https://www.google.com/">
          <button className="space-y-1.5">
            <h3 className="text-2xl font-bold text-custom-white text-left">
              {s.title}
            </h3>
            <p className="text-custom-light-blue text-left">{s.description}</p>
          </button>
        </a>
      </li>
      {index < news.length - 1 && <hr className="text-custom-primary-blue" />}
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
