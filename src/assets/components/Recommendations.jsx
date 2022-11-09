import uniqid from "uniqid";

const recommendations = [
  {
    link: "https://www.google.com/",
    image: "image-retro-pcs.jpg",
    imageAlt: "picture of retro pcs",
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
  },
  {
    link: "https://www.google.com/",
    image: "image-top-laptops.jpg",
    imageAlt: "picture of keyboards on modern laptops",
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets",
  },
  {
    link: "https://www.google.com/",
    image: "image-gaming-growth.jpg",
    imageAlt: "picture of a video game controller floating above mans hand",
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities",
  },
];

const recommendationsBlock = recommendations.map((recommendation, index) => {
  return (
    <li key={uniqid()} className="max-w-md">
      <a href="https://www.google.com/">
        <button className="">
          <div className="flex flex-row">
            <div className="w-4/12 max-w-118px">
              <img
                className=""
                src={recommendation.image}
                alt={recommendation.imageAlt}
              />
            </div>
            <div className="w-8/12 pl-6 flex flex-col justify-between space-y-0.5">
              <p className="text-left text-3xl font-bold text-custom-light-blue leading-none">{`0${
                index + 1
              }`}</p>
              <h4 className="text-left text-xl font-extrabold">
                {recommendation.title}
              </h4>
              <p className="text-left">{recommendation.description}</p>
            </div>
          </div>
        </button>
      </a>
    </li>
  );
});

export default function () {
  return (
    <section className="">
      <ol className="space-y-6">{recommendationsBlock}</ol>
    </section>
  );
}
