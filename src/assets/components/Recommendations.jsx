import uniqid from "uniqid";
import data from "../data.json";

const recommendationsBlocks = data.recommendations.map(
  (recommendation, index) => {
    return (
      <li key={uniqid()} className="max-w-md">
        <div className="flex flex-row">
          <div className="w-4/12 max-w-118px">
            <a href={recommendation.link}>
              <img
                className=""
                src={recommendation.image}
                alt={recommendation.imageAlt}
              />
            </a>
          </div>
          <div className="w-9/12 pl-6 flex flex-col justify-between space-y-0.5">
            <p className="text-left text-3xl font-bold text-custom-light-blue leading-none">{`0${
              index + 1
            }`}</p>
            <div>
              <a href={recommendation.link}>
                <h4 className="text-left text-xl font-extrabold hover:text-red-orange">
                  {recommendation.title}
                </h4>
              </a>
            </div>
            <div>
              <a href={recommendation.link}>
                <p className="text-left hover:text-red-orange">
                  {recommendation.description}
                </p>
              </a>
            </div>
          </div>
        </div>
      </li>
    );
  }
);

export default function () {
  return (
    <section className="col-span-3">
      <ol className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-9">
        {recommendationsBlocks}
      </ol>
    </section>
  );
}
