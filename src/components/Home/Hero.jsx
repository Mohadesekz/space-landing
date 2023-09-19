"use client"; // This is a client component 👈🏽
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Astro from "@/images/astro.webp";
import ScrollAnimationWrapper from "../ScrollAnimationWrapper";
import "./index.scss";
import { Typewriter } from "react-simple-typewriter";
import useTypewriter from "@/hooks/useTypeWriterPro";
import { motion, useInView, useAnimationControls } from "framer-motion";

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const controls = useAnimationControls();

  const text = "پاداسپیس، جایی میان ابرها...";
  const displayText = useTypewriter(text, 100, inView, 1500);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView]);

  return (
    <div className="flex w-full mb-20 home" id="home">
      <ScrollAnimationWrapper>
        <div className="flex w-full home flex-col-reverse md:flex-row items-center">
          <div className="space-y-5 md:w-1/2 flex justify-center items-center md:items-start flex-col mb-12">
            <div className="h-12"></div>
            <motion.p
              ref={ref}
              className="uppercase text-xl md:text-3xl lg:text-4xl pb-6 text-gray-50"
            >
              {displayText}
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: [0, 0.5, 0, 0.5, 0, 0.5, 0, 0.2, 0.4, 0.7, 1],
                  y: 0,
                },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.8, delay: 5 }}
              className="inline-block leading-6 text-xs md:text-sm	text-gray-50"
            >
              لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و
              بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.
              طرارفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و
              وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی
              وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه
              گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به
              پایان برند.
            </motion.p>
            <motion.button
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: [0, 0.5, 0, 0.5, 0, 0.5, 0, 0.2, 0.4, 0.7, 1],
                  y: 0,
                },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 1, delay: 5.5 }}
              className="w-28 bg-white	relative h-8 font-medium text-xs rounded-sm"
            >
              ورود به برنامه
            </motion.button>
          </div>
          {/* <div className="md:w-1/2 flex items-center  mb-12">
            <Image
              sizes="300"
              className="grayscale shadow-inner shadow-black"
              src={Astro}
              alt="astronuat face in the dark mode"
            />
          </div> */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={controls}
            transition={{
              ease: [0.2, 0.6, 0.8, 1],
              delay: 1,
              duration: 5,
            }}
            className="relative top-0 left-0 md:w-1/2 flex items-center  mb-12"
          >
            {/* Black gradient overlay */}
            <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black opacity-95"></div>
            <Image
              sizes="300"
              className="w-full object-cover object-right grayscale shadow-inner shadow-black"
              src={Astro}
              alt="astronuat face in the dark mode"
            />
          </motion.div>
        </div>
      </ScrollAnimationWrapper>
    </div>
  );
}
