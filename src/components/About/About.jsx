"use client"; // This is a client component 👈🏽
import React, { useRef, useEffect } from "react";
import reactSVG from "../../../public/images/react.svg";
import Image from "next/image";
import useTypewriter from "@/hooks/useTypeWriterPro";
import { motion, useInView, useAnimationControls } from "framer-motion";
import "./index.scss";
export default function About(props) {
  const { activeLink } = props;
  const imageRef = useRef(null);
  const inViewImage = useInView(imageRef);

  const titleRef1 = useRef(null);
  const inView1 = useInView(titleRef1);
  const title1 = "درباره ما";
  const displayText1 = useTypewriter(title1, 100, inView1, 1000);

  const titleRef2 = useRef(null);
  const inView2 = useInView(titleRef2, { once: true });
  const title2 = "درباره آنها";
  const displayText2 = useTypewriter(title2, 100, inView2, 3500);

  const controls = useAnimationControls();
  const controlsImage = useAnimationControls();

  useEffect(() => {
    if (inView2) {
      controls.start("visible");
      controlsImage.start("visible");
    }
  }, [inView2]);

  useEffect(() => {
    if (inView1) {
      controlsImage.start("visible");
    } else {
      controlsImage.start("hidden");
    }
  }, [inView1]);

  // useEffect(() => {
  //   if (activeLink == "about") {
  //     controlsImage.start("visible");
  //     console.log("fuck");
  //   } else {
  //     controlsImage.start("hidden");
  //     console.log("stop");
  //   }
  // }, [activeLink]);

  return (
    <div className="flex w-full min-h-screen mb-20 about relative" id="about">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div
          ref={imageRef}
          className="logo"
          variants={{
            hidden: { scale: 1, y: "50vh", rotate: "360deg", opacity: 0 },
            visible: { scale: 1.2, y: "0vh", rotate: 0, opacity: 1 },
          }}
          initial="hidden"
          animate={controlsImage}
          transition={{
            ease: [0.075, 0.82, 0.165, 1],
            duration: 2,
            delay: 0,
            scale: {
              duration: 7,
            },
            // rotate: {
            //   repeat: Infinity,
            //   duration: 11, // custom duration for opacity property only
            // },
          }}
        >
          <Image
            sizes="500"
            style={{ height: "16em" }}
            src={reactSVG}
            alt="react"
          />
        </motion.div>
      </div>
      <div className=" grid grid-cols-3 grid-rows-2 gap-4 m-auto">
        {/* Row 1, Column 1 */}
        <div className="p-4 h-full">
          <motion.p
            ref={titleRef1}
            className="text-xl md:text-3xl lg:text-4xl pb-6 text-gray-50"
          >
            {displayText1}
          </motion.p>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: [0, 1, 0, 1, 0, 1],
                y: 0,
              },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 2.5 }}
            className="leading-6 text-sm text-gray-50 text-gray-50"
          >
            از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر
            متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد
            آنها با استفاده از محتویات ساختگی
          </motion.p>
        </div>

        {/* Row 1, Column 2 */}
        <div className=" p-4 h-full"></div>

        {/* Row 1, Column 3 */}
        <div className=" p-4 h-full"></div>

        {/* Row 2, Column 1 */}
        <div className=" p-4 h-full"></div>

        {/* Row 2, Column 2 */}
        <div className=" p-4 h-full"></div>

        {/* Row 2, Column 3 */}
        <div className=" p-4 h-full">
          <h3
            className="text-xl md:text-3xl lg:text-4xl pb-6 text-gray-50"
            ref={titleRef2}
          >
            {displayText2}
          </h3>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: {
                opacity: [0, 1, 0, 1, 0, 1],
                y: 0,
              },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 4.5 }}
            className="leading-6 text-sm text-gray-50 text-gray-50"
          >
            از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر
            متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد
            آنها با استفاده از محتویات ساختگی
          </motion.p>
        </div>
      </div>
    </div>
  );
}
