import { useRef } from "react";
import Blackbgbtn from "../components/btns/Blackbgbtn";
import Whitebgbtn from "../components/btns/Whitebgbtn";
import "./Home.css";
const Home = () => {
  // use ref
  // ^top text ref
  const topText2 = useRef(null);
  const topText3 = useRef(null);

  // ^ bottom text ref
  const bottomText2 = useRef(null);
  const bottomText3 = useRef(null);

  // ^ cursor code
  const mouseCursor = useRef(null);
  const moveCursor = useRef(null);

  return (
    <div className="h-full w-full">
      <div className="h-full w-full flex flex-col justify-center items-center px-[14vw]">
        <h3 className="capitalize text-2xl">
          👋,Hello my name is KannanBalakrishnan
        </h3>

        <div
          ref={mouseCursor}
          className="relative w-full h-full flex flex-col justify-center items-center "
          onMouseEnter={() => {
            moveCursor.current.style.display = "block";
          }}
          onMouseLeave={() => {
            moveCursor.current.style.display = "none";
          }}
          onMouseMove={(e) => {
            const rect = mouseCursor.current.getBoundingClientRect();

            const x = e.clientX - rect.left - 40;
            const y = e.clientY - rect.top - 40;

            moveCursor.current.style.transform = `translate(${x}px, ${y}px)`;
          }}
        >
          {/* cursor  */}

          <img
            ref={moveCursor}
            className="cursor-img absolute w-20 h-20 object-contain p-3 rounded-full bg-white bject-cover z-50 border-2 border-black hidden top-0 left-0"
            src="./src/assets/arrow.webp"
            alt=""
          />

          {/* main big text top */}
          <div className="relative text-grp h-full w-full ">
            <h2 className="big-text main-text-1 absolute left-[50%] top-[0%] -translate-x-1/2  z-0 text-[12vw]">
              Webdeveloper
            </h2>
            <h2
              ref={topText2}
              className="big-text main-text-2 absolute left-[50%] top-[0%] -translate-x-1/2  z-1 text-[12vw]"
            >
              Webdeveloper
            </h2>
            <h2
              ref={topText3}
              className="big-text main-text-3 absolute left-[50%] top-[0%] -translate-x-1/2  z-3 text-[12vw]"
            >
              Webdeveloper
            </h2>

            {/* bottom text */}
            <h2 className="big-text main-b-text-1 absolute left-[50%] top-[0%] -translate-x-1/2  z-0 text-[12vw] mt-[13vw]">
              Webdesigner
            </h2>

            <h2
              ref={bottomText2}
              className="big-text main-b-text-2 absolute left-[50%] top-[0%] -translate-x-1/2  z-1 text-[12vw] mt-[13vw]"
            >
              Webdesigner
            </h2>

            <h2
              onMouseEnter={() => {
                bottomText2.current.style.opacity = "1";
                bottomText3.current.style.opacity = "1";
                topText2.current.style.opacity = "0";
                topText3.current.style.opacity = "0";
              }}
              onMouseLeave={() => {
                bottomText2.current.style.opacity = "0";
                bottomText3.current.style.opacity = "0";
                topText2.current.style.opacity = "1";
                topText3.current.style.opacity = "1";
              }}
              ref={bottomText3}
              className="big-text main-b-text-3 absolute left-[50%] top-[0%] -translate-x-1/2  z-3 text-[12vw] mt-[13vw]"
            >
              Webdesigner
            </h2>
            {/* bottom text */}
          </div>
          {/* main big text top */}

          {/* img */}
          <img
            className="w-[30vw] absolute z-2 top-0"
            // src="../src/assets/img/pro.webp"
            alt=""
          />
          {/* img */}
        </div>

        {/* bottom btns */}
        <div className="flex justify-center gap-5 absolute bottom-10">
          <Blackbgbtn text={"you need a designer"} />
          <Whitebgbtn text={"You need a web developer"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
