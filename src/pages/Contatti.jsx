import Navbar from "../components/Navbar";

export default function Contatti() {
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

  function contact({ src, link }) {
    return (
      <a href={link} className="neumorphic rounded-3xl w-52 aspect-square p-4">
        <div className="w-full h-full justify-center items-center flex">
          <img src={src} className="aspect-square w-52" alt="" />
        </div>
      </a>
    );
  }

  return (
    <main className="bg-slate-200 w-screen h-screen antipasto">
      <Navbar />

      {borderGlyphTop()}
      {borderGlyphBottom()}

      <h1 className="text-6xl w-full text-center mt-10"> Contatti </h1>

      <section className="w-full flex justify-center items-center gap-40 mt-10">
        {contact({
          src: "/icons/github.png",
          link: "https://github.com/giacomocali",
        })}
        {contact({
          src: "/icons/linkedin.png",
          link: "https://www.linkedin.com/in/giacomo-cal%C3%AC-1ba556293/",
        })}
        {contact({
          src: "/icons/instagram.png",
          link: "https://github.com/giacomocali",
        })}
      </section>
    </main>
  );
}
