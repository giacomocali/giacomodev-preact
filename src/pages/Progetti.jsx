import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Navbar from "../components/Navbar";

export default function Progetti() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    swipeToSlide: true,
    autoplay: true,
    adaptiveHeight: true,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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

  function ProjectElement({ project }) {
    const francescafotografie = {
      link: "https://francescafotografie.com/",
      github: "https://github.com/giacomocali/francescafotografie",
      title: <h3 className="text-2xl"> francescafotografie.com </h3>,
      imgSource: "/images/fotografie.webp",
    };
    const belvedere = {
      link: "https://belvederecollemattia.it/",
      github: "https://github.com/giacomocali/belvederecollemattia",
      title: <h3 className="text-2xl"> belvederecollemattia.it </h3>,
      imgSource: "/images/belvedere.webp",
    };
    const railsnext = {
      link: null,
      github: "https://github.com/giacomocali/catalogo-Rails-Next.js",
      title: <h3 className="text-2xl"> Catalogo con Rails e Next.js </h3>,
      imgSource: "/images/a.webp",
    }

    var props;
    switch (project) {
      case "ff":
        props = francescafotografie;
        break;
      case "belvedere":
        props = belvedere;
        break;
      case "railsnext":
        props = railsnext;
        break;
      default:
        console.error("incorrect argument passed to ProjectElement");
        break;
    }

    function siteLink({ href }) {
      return (
        <a
          href={props.link}
          target="_blank"
          className="neumorphic rounded-full p-3 px-5 text-md"
        >
          Link sito
        </a>
      );
    }

    return (
      <div className="neumorphic rounded-3xl mb-14 mt-10 py-5 px-10">
        <p className="flex justify-center items-center text-center w-full font-medium">
          {props.title}
        </p>
        <div className="w-full flex justify-center items-center mt-5">
          <img
            src={props.imgSource}
            alt="screenshot sito"
            className="w-full h-56 rounded-3xl"
          />
        </div>

        <div className="w-full flex justify-evenly items-center p-2 mt-5">
          {props.link ? siteLink(props.link) : null}
          <a
            href={props.github}
            target="_blank"
            className="neumorphic rounded-full p-3 px-5 text-md"
          >
            Github
          </a>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-slate-200 w-screen h-screen antipasto">
      {borderGlyphTop()}
      {borderGlyphBottom()}
      <Navbar />
      <h1 className="text-2xl md:text-6xl w-full text-center mt-10"> Progetti </h1>

      <Slider {...settings}>
        {ProjectElement({ project: "ff" })}
        {ProjectElement({ project: "belvedere" })}
        {ProjectElement({ project: "railsnext" })}
      </Slider>
    </main>
  );
}
