import ScrollAnimationWrapper from "../ScrollAnimationWrapper";
import Typewriter from "../TypeWriter";
import "./index.scss";
export default function History() {
  return (
    <div className="w-full min-h-screen mb-20 history" id="history">
      <ScrollAnimationWrapper>
        <div className="flex w-full h-full flex-col items-center justify-center">
          <div className="space-y-5 w-1/2  flex justify-center flex-col">
            <Typewriter
              text="ورژن"
              classes={"uppercase text-xl md:text-3xl lg:text-4xl text-gray-50"}
              speed={50}
            />
            <p className="leading-6 text-sm	 tracking-widest text-gray-50">
              125
            </p>
          </div>
          <div className="space-y-5 w-1/2 flex justify-center flex-col">
            <h1 className="uppercase text-4xl tracking-widest text-gray-50">
              taking humans to space
            </h1>
            <p className="leading-6 text-sm	 tracking-widest text-gray-50">
              589
            </p>
          </div>{" "}
          <div className="space-y-5 w-1/2  flex justify-center flex-col">
            <h1 className="uppercase text-4xl tracking-widest text-gray-50">
              taking humans to space
            </h1>
            <p className="leading-6 text-sm	 tracking-widest text-gray-50">
              456
            </p>
          </div>
        </div>
      </ScrollAnimationWrapper>
    </div>
  );
}
