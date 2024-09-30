export default function Navbar() {
  return (
    <nav className="w-full flex justify-center h-24">
      <div className="neumorphic-in py-5 px-8 mt-4 gap-5 rounded-full flex justify-center items-center">
        <a
          href="/progetti"
          className="text-lg transition-all hover:scale-110 hover:text-blue-700"
        >
          Progetti
        </a>

        <a href="/">
          <img
            src="/icons/power-button.png"
            alt="home"
            className="w-10 brightness-0 transition-all hover:brightness-50 hover:rotate-45"
          />
        </a>

        <a
          href="/contatti"
          className="text-lg transition-transform hover:scale-110 hover:text-blue-700"
        >
          Contatti
        </a>
      </div>
    </nav>
  );
}
/*
export function Navbar2() {
  return (
    <nav className="w-full flex justify-center items-center gap-5 h-24 text-xl">
      <a
        href="#"
        className="neumo-in px-5 py-2 rounded-full transition-transform hover:scale-110"
      >
        {" "}
        Progetti{" "}
      </a>

      <a
        href="#"
        className="transition-transform hover:rotate-45 brightness-0 hover:brightness-50 w-12"
      >
        <img src="/icons/power-button.png" alt="home" />
      </a>

      <a
        href="#"
        className="neumo-in px-5 py-2 rounded-full transition-transform hover:scale-110"
      >
        {" "}
        Contatti{" "}
      </a>
    </nav>
  );
}*/
