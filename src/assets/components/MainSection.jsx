import desktopImg from "../imgs/image-web-3-desktop.jpg";
import mobileImg from "../imgs/image-web-3-mobile.jpg";

export default function () {
  return (
    <section className="space-y-5">
      <img src={desktopImg} alt="picture of web 3" />
      <div className="space-y-3">
        <div>
          <h1 className="text-4xl font-extrabold leading-none">
            The Bright Future of Web 3.0?
          </h1>
        </div>
        <div className="space-y-6">
          <div>
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
          </div>
          <div>
            <button className="bg-custom-dark-orange text-custom-white tracking-widest font-bold text-sm py-3 px-8">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
