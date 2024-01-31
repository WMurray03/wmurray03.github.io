import anime from "animejs";
import { useEffect, useRef, useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";

import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

function App() {
  let nameRef = useRef(null);
  const stickyRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.removeEventListener("scroll", () => handleScroll);
  });

  useEffect(() => {
    anime({
      targets: ".name",
      scale: [
        {
          value: 2,
          duration: 100,
          elasticity: 100,
        },
        {
          value: 1,
          duration: 200,
          elasticity: 100,
        },
      ],
      duration: 2000,
      easing: "easeInOutQuad",
    });
  });

  const handleScroll = () => {
    window.pageYOffset > stickyRef.current.getBoundingClientRect().bottom
      ? setIsSticky(true)
      : setIsSticky(false);
  };

  const arrowClick = () => {
    const anime2 = anime({
      targets: ".arrow",
      rotateZ: [90],
      duration: 1000,
      complete: arrowScrollToTarget,
    });

    anime2.play();
  };

  const arrowScrollToTarget = () => {
    let targetElement = document.getElementById("projects");
    targetElement.scrollIntoView({ behavior: "smooth" });
    anime({
      delay: 1000,
      complete: resetRotation,
    });
  };

  const navScroll = (e) => {
    let target = e.target.id;
    let updatedTarget = target.split("nav")[1];
    let targetElement = document.getElementById(updatedTarget);
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  const resetRotation = () => {
    const initialRotation = {
      rotateZ: [0],
    };

    anime({ targets: ".arrow", ...initialRotation });
  };

  // const debounce = (func, wait = 20, immediate = true) => {
  //   let timeOut;
  //   return () => {
  //     let context = this,
  //       args = arguments;
  //     const later = () => {
  //       timeOut = null;
  //       if (!immediate) func.apply(context, args);
  //     };
  //     const callNow = immediate && !timeOut;
  //     clearTimeout(timeOut);
  //     timeOut = setTimeout(later, wait);
  //     if (callNow) func.apply(context, args);
  //   };
  // };

  window.addEventListener("scroll", handleScroll);

  return (
    <div>
      <div
        id="home"
        className="flex w-full justify-center items-center h-screen overflow-hidden
      "
      >
        <div
          className="flex name overflow-hidden justify-center items-center"
          ref={nameRef}
        >
          <div
            id="left"
            className="flex items-center relative z-10 w-12 h-14 text-gray-900 font-sans font-bold text-5xl transition-width duration-500 delay-75 ease-in-out hover:w-24 select-none overflow-hidden"
          >
            <span className="font-josefin">W</span>
            <span className="left-12 font-josefin">ill</span>
          </div>

          <div
            id="right"
            className="flex items-center relative z-10 w-11 h-14 text-gray-900 font-sans font-bold text-5xl transition-width duration-500 delay-75 ease-in-out hover:w-44 select-none overflow-hidden"
          >
            <span className="font-josefin">M</span>
            <span className="font-josefin left-11 w-10">urray</span>
          </div>
        </div>
        <div
          className="arrow flex justify-center items-center w-12 h-12"
          onClick={arrowClick}
        >
          <i
            id="arrow"
            className="flex justify-center items-start animate-bounce cursor-pointer w-14 h-14"
          >
            <KeyboardArrowRightIcon
              className="text-gray-900"
              sx={{ width: 48, height: 48 }}
            />
          </i>
        </div>
      </div>

      <div
        id="projects"
        ref={stickyRef}
        className="flex flex-col w-full justify-top h-screen overflow-hidden bg-gray-900 text-white
      "
      >
        <div
          id="header"
          className={
            isSticky
              ? "flex flex-row justify-center fixed top-0 h-fit w-full p-8 font-josefin text-xl text-white backdrop-filter backdrop-blur-sm bg-gray-900/80"
              : "absolute flex flex-row justify-center h-fit w-full p-8 font-josefin text-xl text-white"
          }
        >
          <div
            className="hover:text-gray-400 ml-6 mr-6 cursor-pointer"
            id="navhome"
            onClick={(e) => navScroll(e)}
          >
            <h2 className="flex justify-end text-base pointer-events-none">
              #01
            </h2>
            <h1 className="leading-4 pointer-events-none">// home</h1>
          </div>

          <div
            className="hover:text-gray-400 ml-6 mr-6 cursor-pointer"
            id="navprojects"
            onClick={(e) => navScroll(e)}
          >
            <h2 className="flex justify-end text-base pointer-events-none">
              #02
            </h2>
            <h1 className="leading-4 pointer-events-none">// projects</h1>
          </div>

          <div
            className="hover:text-gray-400 ml-6 mr-6 cursor-pointer"
            id="navexperience"
            onClick={(e) => navScroll(e)}
          >
            <h2 className="flex justify-end text-base pointer-events-none">
              #03
            </h2>
            <h1 className="leading-4 pointer-events-none">// experience</h1>
          </div>

          <div
            className="hover:text-gray-400 ml-6 mr-6 cursor-pointer"
            id="navskills"
            onClick={(e) => navScroll(e)}
          >
            <h2 className="flex justify-end text-base pointer-events-none">
              #04
            </h2>
            <h1 className="leading-4 pointer-events-none">// skills</h1>
          </div>

          <div
            className="hover:text-gray-400 ml-6 mr-6 cursor-pointer"
            id="navcontact"
            onClick={(e) => navScroll(e)}
          >
            <h2 className="flex justify-end text-base pointer-events-none">
              #05
            </h2>
            <h1 className="leading-4 pointer-events-none">// contact</h1>
          </div>

          {/* <div className="hover:text-gray-400 ml-8 mr-8 cursor-pointer">
            <h2 className="flex justify-end text-base">#03</h2>
            <h1 className="leading-4	">// curriculum vitae</h1>
          </div>

          <div className="hover:text-gray-400 ml-8 mr-8 cursor-pointer">
            <h2 className="flex justify-end text-base">#04</h2>
            <h1 className="leading-4	">// contact</h1>
          </div> */}
        </div>
        <div id="topper" className="h-28 w-full"></div>
      </div>

      <div
        className="flex flex-col w-full items-center h-screen overflow-hidden bg-gray-900 text-white
      "
        id="experience"
      >
        <div id="topper" className="h-28 w-full"></div>
      </div>

      <div
        className="flex flex-col w-full items-center h-screen overflow-hidden bg-gray-900 text-white
      "
        id="skills"
      >
        <div id="topper" className="h-28 w-full"></div>
      </div>

      <div
        className="flex flex-col w-full items-center h-screen overflow-hidden bg-gray-900 text-white
      "
        id="contact"
      >
        <div id="topper" className="h-28 w-full"></div>
      </div>
    </div>
  );
}

export default App;
