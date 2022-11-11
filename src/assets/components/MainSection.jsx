import desktopImg from "../imgs/image-web-3-desktop.jpg";
import mobileImg from "../imgs/image-web-3-mobile.jpg";

export default function (props) {
  return (
    <section className="space-y-5 col-span-2 md:space-y-8 md:flex md:flex-col">
      <img
        src={props.windowWidth > 740 ? desktopImg : mobileImg}
        alt="picture of web 3"
      />
      <div className="space-y-3 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-9 md:h-full">
        <div className="md:flex md:items-center">
          <h1 className="text-4xl font-extrabold leading-none max-w-prose md:text-4xl-md">
            The Bright Future of Web 3.0?
          </h1>
        </div>
        <div className="space-y-6 md:flex md:flex-col md:justify-between">
          <div>
            <p className="max-w-prose">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
          </div>
          <div>
            <a
              href="https://www.forbes.com/sites/forbestechcouncil/2022/08/17/understanding-the-impact-of-web-30-on-the-future-of-business/"
              className="bg-custom-dark-orange text-custom-white tracking-widest font-bold text-sm py-3 px-8 hover:bg-navy-blue"
            >
              READ MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
