export default function Landing() {
  return (
    <main className="bg-slate-200 w-screen h-full antipasto-regular">
      {borderGlyphTop()}
      {borderGlyphBottom()}
      <nav className="w-full flex justify-center h-24">
        <div className="neumo-in py-5 px-8 mt-4 gap-5 rounded-full flex justify-center items-center">
          {smallnavlink({ text: "Progetti", href: "#" })}
          <a href="#">
            <img
              src="power-button.png"
              alt="home"
              className="w-10 brightness-0 transition-all hover:brightness-50 hover:rotate-45"
            />
          </a>
          {smallnavlink({ text: "Contatti", href: "#" })}
        </div>
      </nav>

      <article className="landing-container w-screen flex justify-center items-center">
        <div className="neumo w-fit h-fit p-5 rounded-full flex justify-between items-center">
          <div className="neumo rounded-full p-5">
            <img
              src="https://picsum.photos/150/150"
              alt=""
              className="rounded-full"
            />
          </div>

          <h1 className="text-3xl mx-8">
            GIACOMO CALÌ
            <p className="text-7xl"> // full stack developer </p>
          </h1>
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

      <div className="w-full flex justify-center mb-72">
        <button onClick={scrollToBio()}>
          <p className="text-center text-2xl"> Bio </p>
          <img
            src="icons/arrow-down.gif"
            alt="freccia giù"
            className="mx-auto w-10"
          />
        </button>
      </div>

      <div
        id="bio"
        className="w-2/3 p-7 mb-20 mx-auto text-xl neumo rounded-full text-center"
      >
        <p className="text-5xl mb-1"> Ciao! </p>
        Sono Giacomo, un appassionato sviluppatore web da Roma. Mi tengo sempre
        aggiornato sulle ultime novità del settore, e come hobby creo
        videogiochi usando Unity Engine e C#.
        <br />
        Interessato al mio curriculum?&nbsp;
        <a href="power-button.png" download="giacomo-calì-cv" className="scale-100 hover:scale-110 hover:text-blue-600">
          Clicca qui
        </a>
      </div>
      
      <div className="bg-black w-2 h-52">
        
      </div>

    </main>
  );
}






function smallnavlink({ text, href }) {
  return (
    <a href={href} class="text-lg transition-transform hover:scale-110 hover:text-blue-700">
      {text}
    </a>
  );
}

function socialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      className="neumo rounded-full p-3 hover:scale-110 transition-transform"
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
    <img
      src="/images/border-glyph0.png"
      alt=""
      className="w-1/12 -z-0 fixed top-0 left-0"
    />
  );
}
function borderGlyphBottom() {
  return (
    <img
      src="/images/border-glyph0.png"
      alt=""
      className="w-1/12 -z-0 fixed bottom-0 right-0 rotate-180"
    />
  );
}
