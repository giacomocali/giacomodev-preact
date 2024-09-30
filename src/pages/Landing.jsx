import Navbar from "../components/Navbar";

export default function Landing() {
  function socialLink({ href, icon }) {
    return (
      <a
        href={href}
        target="_blank"
        className="neumorphic rounded-full p-3 hover:scale-110 transition-transform"
      >
        <img src={icon} alt={icon} className="w-10" />
      </a>
    );
  }

  function scrollToBio() {
    var ele = document.querySelector("#bio");
    console.log("scrollToBio(); bio = " + ele);
    if (ele != null) {
      window.scrollTo(ele);
    }
  }

  function borderGlyphTop() {
    return (
      <div className="absolute top-0 left-0 grid grid-cols-2 grid-rows-2">
        <div className="p-16 rounded-full neumorphic-in"> </div>
        <div className="m-7 h-full rounded-full neumorphic-in"> </div>
        <div className="m-7 rounded-full neumorphic-in"> </div>
      </div>
    );
  }
  function borderGlyphBottom() {
    return (
      <div className="absolute bottom-0 right-0 grid grid-cols-2 grid-rows-2">
        <div></div>
        <div className="m-7 rounded-full neumorphic-in"> </div>
        <div className="m-7 h-full rounded-full neumorphic-in"> </div>
        <div className="p-16 rounded-full neumorphic-in"> </div>
      </div>
    );
  }

  return (
    <main className="bg-slate-200 w-screen h-full antipasto ">
      {borderGlyphTop()}
      {borderGlyphBottom()}
      {/* <img src="cube.gif" className="absolute opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" /> */}

      <Navbar />

      <article className="landing-container w-screen flex justify-center items-center">
        <div className="neumorphic w-fit h-fit p-5 rounded-full flex justify-between items-center relative">
          {/* <aside className="absolute bottom-0 right-2 flex gap-4 opacity-20">
            <img src="/icons/code.png" alt="" className="w-12 my-2 -rotate-12"/>
            <img src="/icons/terminal.png" alt="" className="w-12 h-12 rotate-12"/>
          </aside> */}

          <svg width="100" height="100" className="absolute -bottom-7 right-0">
            <circle
              cx="50"
              cy="50"
              r="20"
              stroke="black"
              stroke-width="5"
              fill="transparent"
            />
          </svg>

          <svg width="100" height="100" className="absolute -bottom-8 -right-4">
            <circle
              cx="50"
              cy="50"
              r="12"
              stroke="black"
              stroke-width="5"
              fill="transparent"
            />
          </svg>

          <div className="neumorphic rounded-full p-5">
            <img
              src="placeholder.jpg"
              alt=""
              className="rounded-full w-36 aspect-square"
            />
          </div>

          <div className="mx-8">
            <h3
              className="text-3xl font-light"
              data-aos="fade-in"
              data-aos-delay="100"
            >
              GIACOMO CALÌ
            </h3>
            <h1
              className="text-7xl text-gradient font-light pb-3"
              data-aos="fade-in"
              data-aos-delay="300"
            >
              | full stack engineer
            </h1>
          </div>
        </div>
      </article>

      <div className="w-screen flex justify-center gap-5 mb-14">
        {socialLink({
          href: "https://github.com/giacomocali",
          icon: "icons/github.png",
        })}
        {socialLink({
          href: "https://www.instagram.com/giacomodev_com/",
          icon: "icons/instagram.png",
        })}
        {socialLink({
          href: "https://www.linkedin.com/in/giacomo-cal%C3%AC-1ba556293/",
          icon: "icons/linkedin.png",
        })}
      </div>

      <div className="w-full flex justify-center mb-52">
        <button onClick={scrollToBio}>
          <p className="text-center text-2xl"> Bio </p>
          <img
            src="icons/arrow-down.gif"
            alt="freccia giù"
            className="mx-auto w-10"
          />
        </button>
      </div>

      <div className="w-screen py-20">
        <div
          id="bio"
          className="w-3/5 p-7 mb-20 mx-auto text-xl rounded-full text-center neumorphic"
        >
          <div className="mx-20" data-aos="fade-left" data-aos-once="true">
            <p className="text-5xl mb-1"> Ciao! </p>
            Sono Giacomo, un programmatore da Roma. Mi tengo sempre aggiornato
            sulle ultime novità del settore. Migliore bio in arrivo... Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
            <p className="mt-3 italic">
              Interessato al mio curriculum?&nbsp;
              <a
                href="/documents/giacomo-cali-cv-it.pdf"
                download="giacomo-cali-cv-it.pdf"
                className="hover:text-blue-500"
              >
                Clicca qui
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-transparent w-2 h-52"></div>
    </main>
  );
}

/*
<div className="p-20 rounded-full neumo-in absolute bottom-0 right-0"></div>
      <div className="p-8 rounded-full neumo-in absolute bottom-20 right-20"></div>

<div className="p-20 rounded-full neumo-in absolute top-0 left-0"> </div>
<div className="p-8 rounded-full neumo-in absolute top-20 left-20"> </div>

<img
  src="/images/border-glyph0.png"
  alt=""
  className="w-1/12 -z-0 fixed top-0 left-0"
/>

<img
  src="/images/border-glyph0.png"
  alt=""
  className="w-1/12 -z-0 fixed bottom-0 right-0 rotate-180"
/>
*/
