import React from "react";
import Whitebgbtn from "../components/btns/Whitebgbtn";
import "./Design.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

// gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import DesignPageText from "../components/design-text-component/DesignPageText";
import Footer from "../components/footer/Footer";

gsap.registerPlugin(ScrollTrigger);

const Design = () => {
  // gsap
  useGSAP(() => {
    gsap.to(".top-text", {
      x: -500, // left move
      ease: "none",
      scrollTrigger: {
        trigger: ".top-text",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    gsap.to(".bottom-text", {
      x: 500, // right move
      ease: "none",
      scrollTrigger: {
        trigger: ".bottom-text",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });
  });

  return (
    <div className="h-full w-full">
      {/* section 1  */}
      <div className="flex flex-col justify-center items-center gap-5 h-[80vh]">
        <h3 className="text-yellow-500 text-xl">
          Graphiste, Webdesigner & expert webflow
        </h3>
        {/* big heading */}
        <h2 className="text-center text-[6vw] font-[maintext] leading-[6vw]">
          Direction artistique et sites Webflow<br></br>
          de qualité pour les créatifs.
        </h2>
        {/* button */}
        <Whitebgbtn text={"Démarrons un projet ensemble"} />

        {/* marquee */}
        <div className="overflow-hidden w-1/2  h-20">
          <div className="marquee flex gap-5">
            <img
              src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/645bb63c6228f1b593b10bf8_Jamel.webp"
              alt=""
            />
            <img
              src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/61f28d9c2ac9c24bddc048a0_Ballantines.webp"
              alt=""
            />
            <img
              src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/645bb6514df11f2e6b081671_RES.webp"
              alt=""
            />
            <img
              src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/645bb651fa6ce94c14bb8895_Timsit.webp"
              alt=""
            />
            <img
              src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/645bb651d80446ec420cedc7_MHD.webp"
              alt=""
            />
            <img
              src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/645bb651d3ac4de0721dc62c_Swile_black-p-500.webp"
              alt=""
            />
            <img
              src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/645bb651603a6c2d7c52c6f9_Supermood.webp"
              alt=""
            />

            <img
              src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/645bb63c6228f1b593b10bf8_Jamel.webp"
              alt=""
            />
            <img
              src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/61f28d9c2ac9c24bddc048a0_Ballantines.webp"
              alt=""
            />
            <img
              src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/645bb6514df11f2e6b081671_RES.webp"
              alt=""
            />
            <img
              src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/645bb651fa6ce94c14bb8895_Timsit.webp"
              alt=""
            />
            <img
              src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/645bb651d80446ec420cedc7_MHD.webp"
              alt=""
            />
            <img
              src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/645bb651d3ac4de0721dc62c_Swile_black-p-500.webp"
              alt=""
            />
            <img
              src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/645bb651603a6c2d7c52c6f9_Supermood.webp"
              alt=""
            />
          </div>
        </div>
        {/* marquee */}
      </div>
      {/* section 1  */}

      {/* section 2 */}
      <div className="flex w- h-[60vh] gap-5 overflow-hidden">
        <div className="w-1/7 h-[45vh] -ml-16 rounded-2xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/65d3631eefc29b915264e8f4_Webdesign%20-%2001.webp"
            alt=""
          />
        </div>

        <div className="w-1/7 h-[45vh] rounded-2xl overflow-hidden mt-5">
          <img
            className="w-full h-full object-cover"
            src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/65d36262efc29b9152646ff6_Webdesign%20-%2002.webp"
            alt=""
          />
        </div>

        <div className="w-1/7 h-[45vh] rounded-2xl overflow-hidden mt-10">
          <img
            className="w-full h-full object-cover"
            src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/65d3626233ad01505949ebc1_Webdesign%20-%2003.webp"
            alt=""
          />
        </div>

        <div className="w-1/7 h-[45vh] rounded-2xl overflow-hidden mt-15">
          <img
            className="w-full h-full object-cover"
            src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/65d36262e8cd2028b4a438d0_Webdesign%20-%2004.webp"
            alt=""
          />
        </div>

        <div className="w-1/7 h-[45vh]  rounded-2xl overflow-hidden mt-15">
          <img
            className="w-full h-full object-cover"
            src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/65d3631eefc29b915264e8f4_Webdesign%20-%2001.webp"
            alt=""
          />
        </div>

        <div className="w-1/7 h-[45vh] rounded-2xl overflow-hidden mt-5">
          <img
            className="w-full h-full object-cover"
            src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/65d36262efc29b9152646ff6_Webdesign%20-%2002.webp"
            alt=""
          />
        </div>

        <div className="w-1/7 h-[45vh] -mr-16 rounded-2xl overflow-hidden ">
          <img
            className="w-full h-full object-cover"
            src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/65d3626233ad01505949ebc1_Webdesign%20-%2003.webp"
            alt=""
          />
        </div>
      </div>
      {/* section 2 */}

      {/* section 3 */}
      <div className="px-[25vw] pt-[10vh] pb-[25vh]">
        <h3 className="text-4xl font-[maintext]">
          Vous avec besoin d’un site.
        </h3>

        <p className="text-xl font-light mt-5">
          C’est ce mot qui fera la différence entre une simple visite sur votre
          site et une vente.<br></br>
          <br></br>
          Designer et expert Webflow, je vous aide à résoudre vos enjeux de
          visibilité en ligne et générer plus de ventes par la conception de
          sites sur-mesure,
          <span className="font-semibold">
            {" "}
            de direction artistique dédiée à votre marque et de stratégies
            digitales adaptées.
          </span>
        </p>
      </div>
      {/* section 3 */}

      {/* section 4 carousel */}
      <div className="relative w-full bg-black h-[130vh] pb-[15vw] pt-[2vw] px-[3vw]">
        <h2 className="text-white text-5xl mb-[2vw] font-[maintext]">
          Derniers projets
        </h2>
        <button className="custom-prev absolute left-20 top-1/2 -translate-y-1/2 z-10 text-white">
          ←
        </button>

        <button className="custom-next absolute right-20 top-1/2 -translate-y-1/2 z-10 text-white">
          →
        </button>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://cdn.prod.website-files.com/61dd9ddd76c6a0f7537a4c75/645a77eed4bf421824a5ab23_Card%20-%20ALR.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.prod.website-files.com/61dd9ddd76c6a0f7537a4c75/65d3937e284e0238a6c774b4_Card%20-%20VHS%20Entertainment.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.prod.website-files.com/61dd9ddd76c6a0f7537a4c75/65dde5465fc2146bc3c858dc_Card%20-%20Kolecto.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.prod.website-files.com/61dd9ddd76c6a0f7537a4c75/626b07eefb5f8babbbc1e275_Card%20-%20Musilac.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.prod.website-files.com/61dd9ddd76c6a0f7537a4c75/645b612ce21090b39269c23d_Card%20-%20Zeb.webp"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* section 4 carousel */}

      {/* section 5 scroll haedng  */}
      <div className="overflow-hidden bg-white text-black py-30">
        <div className="top-text flex whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <h1
              key={i}
              className="top-t-b text-[8vw] font-bold mr-10 shrink-0 uppercase font-[maintext]"
            >
              Show me what you got ! -
            </h1>
          ))}
        </div>

        <div className="bottom-text flex whitespace-nowrap -mt-5">
          {[...Array(10)].map((_, i) => (
            <h1
              key={i}
              className="text-[8vw] font-bold mr-10 shrink-0 uppercase font-[maintext]"
            >
              - Webflow - Webdesign - Graphis
            </h1>
          ))}
        </div>
      </div>
      {/* section 5 scroll haedng  */}

      {/* section 6 text */}
      <div className="flex w-full px-[10vw] gap-50 justify-between">
        {/* left text */}
        <div className="w-[45%]">
          <DesignPageText
            subHead={"Branding"}
            head={"Votre identité graphique au coeur de ma démarche"}
            text={
              "Une gestion à 360° de votre projet ! Conception d’identité graphique, édition d’un brand book, création de maquettes et développement du site : j’assure la continuité de votre identité et vous accompagne sur chaque étape clé de votre projet."
            }
          />
        </div>

        {/* right images */}
        <div className="w-[50%] pb-10">
          <div className="relative w-full flex justify-end pt-10 pr-10 pb-10">
            <img
              className="w-[75%] z-1 rounded-xl"
              src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/65c5e5f9dea4e13c5c71efe5_Logo_VHS.webp"
              alt=""
            />

            <img
              className="absolute z-2 right-0 top-0 w-[30%] rounded-xl shadow-2xl"
              src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/65c5e5faf9571789bee76401_Logo_Estaly-p-500.webp"
              alt=""
            />

            <img
              className="absolute left-0 top-0 w-[30%] rounded-xl"
              src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/65c5e5fa878952603e3d3e80_Logo_opsis-p-500.webp"
              alt=""
            />

            <img
              className="absolute z-2 left-0 bottom-0 w-[30%] rounded-xl shadow-2xl"
              src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/6450c895433987119e34fb65_Logo%20-%20MOM.webp"
              alt=""
            />

            <img
              className="absolute -right-10 -bottom-10 w-[25%] rounded-xl"
              src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/6450c8966aae145ca545732c_Logo%20-%20Vacarme.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* section 6 text */}

      {/* section 7 text */}
      <div className="flex w-full px-[10vw] gap-50 justify-between mt-[10vw] items-center">
        {/* left text */}
        <div className="w-[50%]">
          <video
            autoPlay
            loop
            muted
            className="rounded-xl"
            src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/61dd9ddd76c6a0e00f7a4cb6_Webdesign%20-%20Frecerid_Bau-transcode.mp4"
          ></video>
        </div>

        {/* right images */}

        <div className="w-[45%]">
          <DesignPageText
            subHead={"Webdesign"}
            head={"Un site sur mesure, performant et facile à administre"}
            text={
              "Aucun template ! En tant qu’expert Webflow, je crée vos sites sur-mesure pour accroître votre expérience de marque et vous faire gagner en productivité. Facile d’accès, optimisé pour la SEO et libre de toute maintenance après la mise en ligne : Webflow vous permettra d’avoir un site à la hauteur de vos objectifs."
            }
          />
        </div>
      </div>
      {/* section 7 text */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};

export default Design;
