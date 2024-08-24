import FROMPATRICK from "./FROMPATRICK";
import SolutionButton from "./SolutionButton";
import FOOTER from "./FOOTER";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[1.5rem] text-black font-inria-sans ${className}`}
    >
      <div className="flex-1 flex flex-col items-end justify-start gap-[4.468rem] max-w-full gap-[2.25rem] gap-[1.125rem]">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pl-[1.312rem] pr-[1.25rem] box-border max-w-full">
          <FROMPATRICK />
        </div>
        <SolutionButton />
        <FOOTER />
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
