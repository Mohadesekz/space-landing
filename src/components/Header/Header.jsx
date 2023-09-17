"use client"; // This is a client component 👈🏽

import { useState, useEffect } from "react";
import { NavLink } from "@/components/NavLink";
import Logo from "@/images/logo.png";
import Image from "next/image";
import { Link as LinkScroll } from "react-scroll";
import "./index.scss";
export default function Header(props) {
  const [hamOpen, setHamOpen] = useState(false);

  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);

  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    props.setParentActiveLink(activeLink);
  }, [activeLink]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return (
    <div
      className={`w-screen items-center flex justify-between header 
      ${scrollDirection === "down" ? "-top-24" : "top-0"} 
      transition-all duration-500`}
    >
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center
         w-10 justify-center text-sm 
         text-gray-500 rounded-lg h-7
         md:hidden hover:bg-gray-100 
         dark:text-gray-400 dark:hover:bg-gray-700
         dark:focus:ring-gray-600 hover:bg-transparent focus:ring-0"
        aria-controls="navbar-default"
        aria-expanded="false"
        onClick={() => {
          setHamOpen(!hamOpen);
        }}
      >
        <div id="menu-btn" className={`${hamOpen ? "open" : ""}`}>
          <div id="menu-btn__burger"></div>
        </div>
      </button>

      <div className="hidden md:block" id="nav-menu">
        <LinkScroll
          activeClass="active"
          to="home"
          spy={true}
          smooth="easeInOutQuart"
          duration={1000}
          onClick={() => {
            setActiveLink("home");
            props.setParentActiveLink("home");
          }}
          className={
            "flickering-light ml-6 inline-block uppercase rounded-lg px-0 py-0 text-gray-400 hover:text-gray-300 mx-2 cursor-pointer animation-hover relative" +
            (activeLink === "home"
              ? " text-orange-500 animation-active "
              : " text-black-500 hover:text-orange-500 a")
          }
        >
          خانه
        </LinkScroll>
        <LinkScroll
          activeClass="active"
          to="about"
          spy={true}
          smooth="easeInOutQuart"
          duration={1000}
          onSetActive={() => {}}
          onClick={() => {
            setActiveLink("about");
            props.setParentActiveLink("about");
          }}
          className={
            "flickering-light second ml-6 inline-block uppercase rounded-lg px-0 py-0 text-gray-400 hover:text-gray-300 mx-2 cursor-pointer animation-hover relative" +
            (activeLink === "about"
              ? " text-orange-500 animation-active "
              : " text-black-500 hover:text-orange-500 a")
          }
        >
          دوم
        </LinkScroll>
        <LinkScroll
          activeClass="active"
          to="galleries"
          spy={true}
          smooth="easeInOutQuart"
          duration={1000}
          onClick={() => {
            console.log("shiiiiiiiiiiit");
            setActiveLink("galleries");
            props.setParentActiveLink("galleries");
          }}
          className={
            "flickering-light third ml-6 inline-block uppercase rounded-lg px-0 py-0 text-gray-400 hover:text-gray-300 mx-2 cursor-pointer animation-hover relative" +
            (activeLink === "galleries"
              ? " text-orange-500 animation-active "
              : " text-black-500 hover:text-orange-500 a")
          }
        >
          سوم
        </LinkScroll>
        <LinkScroll
          activeClass="active"
          to="history"
          spy={true}
          smooth="easeInOutQuart"
          duration={1000}
          onClick={() => {
            setActiveLink("history");
            props.setParentActiveLink("history");
          }}
          className={
            "flickering-light fourth ml-6 inline-block uppercase rounded-lg px-0 py-0 text-gray-400 hover:text-gray-300 mx-2 cursor-pointer animation-hover relative" +
            (activeLink === "history"
              ? " text-orange-500 animation-active "
              : " text-black-500 hover:text-orange-500 a")
          }
        >
          چهارم
        </LinkScroll>
        <LinkScroll
          activeClass="active"
          to="mission"
          spy={true}
          smooth="easeInOutQuart"
          duration={1000}
          onClick={() => {
            setActiveLink("mission");
            props.setParentActiveLink("mission");
          }}
          className={
            "flickering-light fifth ml-6 inline-block uppercase rounded-lg px-0 py-0 text-gray-400 hover:text-gray-300 mx-2 cursor-pointer animation-hover relative" +
            (activeLink === "mission"
              ? " text-orange-500 animation-active "
              : " text-black-500 hover:text-orange-500 a")
          }
        >
          پنجم
        </LinkScroll>
      </div>

      <div
        id="side-menu"
        className={`md:hidden fixed top-0 w-[240px] h-screen z-50 bg-gray-900 p-5
    flex flex-col space-y-5 text-white duration-300 ${
      hamOpen ? "menu--open" : ""
    }`}
      >
        <LinkScroll
          activeClass="active"
          to="home"
          spy={true}
          smooth="easeInOutQuart"
          duration={1000}
          onSetActive={() => {
            setActiveLink("home");
            setHamOpen(false);
          }}
          className={
            "ml-6 inline-block uppercase rounded-lg px-0 py-0 text-gray-400 hover:text-gray-300 mx-2 cursor-pointer animation-hover relative" +
            (activeLink === "home"
              ? " text-orange-500 animation-active "
              : " text-black-500 hover:text-orange-500 a")
          }
        >
          خانه
        </LinkScroll>
        <LinkScroll
          activeClass="active"
          to="about"
          spy={true}
          smooth="easeInOutQuart"
          duration={1000}
          onSetActive={() => {
            setActiveLink("about");
            setHamOpen(false);
          }}
          className={
            "ml-6 inline-block uppercase rounded-lg px-0 py-0 text-gray-400 hover:text-gray-300 mx-2 cursor-pointer animation-hover relative" +
            (activeLink === "about"
              ? " text-orange-500 animation-active "
              : " text-black-500 hover:text-orange-500 a")
          }
        >
          دوم
        </LinkScroll>
        <LinkScroll
          activeClass="active"
          to="galleries"
          spy={true}
          smooth="easeInOutQuart"
          duration={1000}
          onSetActive={() => {
            setActiveLink("galleries");
            setHamOpen(false);
          }}
          className={
            "ml-6 inline-block uppercase rounded-lg px-0 py-0 text-gray-400 hover:text-gray-300 mx-2 cursor-pointer animation-hover relative" +
            (activeLink === "galleries"
              ? " text-orange-500 animation-active "
              : " text-black-500 hover:text-orange-500 a")
          }
        >
          سوم
        </LinkScroll>
        <LinkScroll
          activeClass="active"
          to="history"
          spy={true}
          smooth="easeInOutQuart"
          duration={1000}
          onSetActive={() => {
            setActiveLink("history");
            setHamOpen(false);
          }}
          className={
            "ml-6 inline-block uppercase rounded-lg px-0 py-0 text-gray-400 hover:text-gray-300 mx-2 cursor-pointer animation-hover relative" +
            (activeLink === "history"
              ? " text-orange-500 animation-active "
              : " text-black-500 hover:text-orange-500 a")
          }
        >
          چهارم
        </LinkScroll>
        <LinkScroll
          activeClass="active"
          to="mission"
          spy={true}
          smooth="easeInOutQuart"
          duration={1000}
          onSetActive={() => {
            setActiveLink("mission");
            setHamOpen(false);
          }}
          className={
            "ml-6 inline-block uppercase rounded-lg px-0 py-0 text-gray-400 hover:text-gray-300 mx-2 cursor-pointer animation-hover relative" +
            (activeLink === "mission"
              ? " text-orange-500 animation-active "
              : " text-black-500 hover:text-orange-500 a")
          }
        >
          پنجم
        </LinkScroll>
      </div>

      <div className="w-36">
        <Image width={200} className="fill-white" src={Logo} alt="space logo" />
      </div>
    </div>
  );
}
