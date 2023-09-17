import ScrollAnimationWrapper from "../ScrollAnimationWrapper";
import Typewriter from "../TypeWriter";
import "./index.scss";
export default function About() {
  return (
    <div className="flex w-full min-h-screen mb-20 about" id="about">
      <ScrollAnimationWrapper>
        <div className="flex w-full h-full">
          <div className="space-y-5 w-1/2  flex justify-center flex-col">
            <h1 className="uppercase text-4xl tracking-widest text-gray-50">
              taking humans to space
            </h1>
            <Typewriter
              text="ورژن"
              classes={"uppercase text-xl md:text-3xl lg:text-4xl text-gray-50"}
              speed={50}
            />
            <p className="leading-6 text-sm	 tracking-widest text-gray-50">
              Embarking on a monumental voyage, humanity's quest to traverse the
              cosmos has ignited a fervent curiosity. Taking humans to space
              represents the pinnacle of scientific and engineering
              achievements, pushing the boundaries of our knowledge and
              capabilities. From the pioneering days of Yuri Gagarin's historic
              orbit to the International Space Station's continuous habitation.
            </p>
          </div>
          <div className="space-y-5 w-1/2  flex justify-center flex-col">
            <h1 className="uppercase text-4xl tracking-widest text-gray-50">
              taking humans to space
            </h1>
            <p className="leading-6 text-sm	 tracking-widest text-gray-50">
              Embarking on a monumental voyage, humanity's quest to traverse the
              cosmos has ignited a fervent curiosity. Taking humans to space
              represents the pinnacle of scientific and engineering
              achievements, pushing the boundaries of our knowledge and
              capabilities. From the pioneering days of Yuri Gagarin's historic
              orbit to the International Space Station's continuous habitation.
            </p>
          </div>{" "}
          <div className="space-y-5 w-1/2  flex justify-center flex-col">
            <h1 className="uppercase text-4xl tracking-widest text-gray-50">
              taking humans to space
            </h1>
            <p className="leading-6 text-sm	 tracking-widest text-gray-50">
              Embarking on a monumental voyage, humanity's quest to traverse the
              cosmos has ignited a fervent curiosity. Taking humans to space
              represents the pinnacle of scientific and engineering
              achievements, pushing the boundaries of our knowledge and
              capabilities. From the pioneering days of Yuri Gagarin's historic
              orbit to the International Space Station's continuous habitation.
            </p>
          </div>
        </div>
      </ScrollAnimationWrapper>
    </div>
  );
}
