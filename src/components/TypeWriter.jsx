"use client"; // This is a client component 👈🏽

import { useTypewriter } from "../hooks/useTypewriter";

const Typewriter = ({ text, speed, classes }) => {
  const displayText = useTypewriter(text, speed);

  return <p className={classes}>{displayText}</p>;
};

export default Typewriter;
