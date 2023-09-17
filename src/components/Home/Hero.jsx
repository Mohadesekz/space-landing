"use client"; // This is a client component 👈🏽
import { useState, useEffect } from "react";
import Image from "next/image";
import Astro from "@/images/astro.webp";
import ScrollAnimationWrapper from "../ScrollAnimationWrapper";
import "./index.scss";
import { Typewriter } from "react-simple-typewriter";
export default function Hero() {
  const [canShow, setCanShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCanShow(true), 1500);
    return () => clearTimeout(timer);
  });

  return (
    <div className="flex w-full mb-20 home" id="home">
      <ScrollAnimationWrapper>
        <div className="flex w-full home flex-col-reverse md:flex-row items-center">
          <div className="space-y-5 md:w-1/2 flex justify-center items-center md:items-start flex-col mb-12">
            <div className="h-12">
              {canShow && (
                // <Typewriter
                //   text="پااداسپیس، جایی میان ابرها..."
                //   classes={
                //     "uppercase text-xl md:text-3xl lg:text-4xl text-gray-50"
                //   }
                //   speed={50}
                // />
                <p className="uppercase text-xl md:text-3xl lg:text-4xl text-gray-50">
                  <Typewriter
                    words={["پاداسپیس، جایی میان ابرها..."]}
                    loop={1}
                    cursor
                    cursorStyle=""
                    typeSpeed={50}
                    deleteSpeed={0}
                    delaySpeed={0}
                    onLoopDone={() => {
                      // console.log(`Done after 5 loops!`);
                    }}
                    onType={(count) => {
                      // console.log(count);
                    }}
                  />
                </p>
              )}
            </div>
            <p className="flickering-light-slow delay-3500 leading-6 text-xs md:text-sm	text-gray-50">
              لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و
              بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.
              طرارفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و
              وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی
              وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه
              گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به
              پایان برند.
            </p>

            <button className="flickering-light delay-4500 w-28 bg-white	relative h-8 font-medium text-xs rounded-sm">
              ورود به برنامه
            </button>
          </div>
          <div className="md:w-1/2 flex items-center  mb-12">
            <Image
              sizes="300"
              className="grayscale shadow-inner shadow-black"
              src={Astro}
              alt="astronuat face in the dark mode"
            />
          </div>
        </div>
      </ScrollAnimationWrapper>
    </div>
  );
}
