"use client"; // This is a client component 👈🏽
import { useState, useEffect } from "react";
import ScrollAnimationWrapper from "../ScrollAnimationWrapper";
import { Typewriter } from "react-simple-typewriter";
// import Typewriter from "../TypeWriter";
import "./index.scss";

const versionsCount = 85;
const secondsCount = 108;
const coffeesCount = 125;
export default function Galleries(props) {
  const { activeLink } = props;
  const [versionsCounter, setVersionsCount] = useState(0);
  const [secondsCounter, setSecondCount] = useState(0);
  const [coffeesCounter, setCoffeesCount] = useState(0);
  const [canShow, setCanShow] = useState(false);
  useEffect(() => {
    if (activeLink === "galleries") {
      setCanShow(true);
    }
  }, [activeLink]);

  // useEffect(() => {
  //   let versionsTimeInterval;
  //   if (activeLink === "galleries") {
  //     versionsTimeInterval = setInterval(() => {
  //       if (versionsCounter < versionsCount) {
  //         setVersionsCount(versionsCounter + 1);
  //       }
  //       if (secondsCounter < secondsCount) {
  //         setSecondCount(secondsCounter + 1);
  //       }
  //       if (coffeesCounter < coffeesCount) {
  //         setCoffeesCount(coffeesCounter + 1);
  //       }
  //     }, 10);
  //   }
  //   return () => clearInterval(versionsTimeInterval);
  // });

  return (
    <div
      className="flex w-full min-h-screen mb-20 galleries p-14"
      id="galleries"
    >
      <ScrollAnimationWrapper className="w-full">
        <div className="flex w-full h-full flex-col items-center justify-around">
          <div className="space-y-5 w-1/2  flex justify-center items-center flex-col">
            <p className="uppercase text-4xl tracking-widest text-gray-50">
              {versionsCount}
            </p>
            {canShow && (
              <p className="leading-6 text-base text-gray-50">
                <Typewriter
                  words={["ورژن"]}
                  loop={1}
                  cursor
                  cursorStyle=""
                  typeSpeed={80}
                  deleteSpeed={10}
                  delaySpeed={10}
                  onLoopDone={() => {}}
                  onType={(count) => {}}
                />
              </p>
            )}
          </div>

          <div className="border-l border-gray-800	border-solid h-12"></div>

          <div className="space-y-5 w-1/2  flex justify-center items-center flex-col">
            <p className="uppercase text-4xl tracking-widest text-gray-50">
              {secondsCount}
            </p>
            <p className="leading-6 text-base text-gray-50">نسخه</p>
          </div>

          <div className="border-l	border-gray-800	border-solid h-12"></div>

          <div className="space-y-5 w-1/2  flex justify-center items-center flex-col">
            <p className="uppercase text-4xl tracking-widest text-gray-50">
              {coffeesCount}
            </p>
            <p className="leading-6 text-base text-gray-50">فنجان قهوه</p>
          </div>
        </div>
      </ScrollAnimationWrapper>
    </div>
  );
}
