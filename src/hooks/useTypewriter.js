"use client"; // This is a client component 👈🏽

import { useState, useEffect } from "react";

export const useTypewriter = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(
          (prevText) => prevText + (i === 0 ? text.charAt(i) : text.charAt(i))
        );
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
};
