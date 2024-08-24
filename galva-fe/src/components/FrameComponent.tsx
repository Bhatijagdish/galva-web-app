import PROB5 from "./PROB5";
import PROB4 from "./PROB4";
import PROB3 from "./PROB3";
import PROB2 from "./PROB2";
import PROB1 from "./PROB1";
import PROB from "./PROB";
import PropTypes from "prop-types";


const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-[0rem] pl-[1.312rem] pr-[1.25rem] box-border max-w-full text-left text-[3rem] text-black font-yaldevi-colombo-extralight ${className}`}
    >
      <div className="w-[103.188rem] flex flex-col items-start justify-start gap-[1rem] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
        <div className="flex items-center justify-center">
  <h3 className="m-0 h-[4rem] w-[38.063rem] relative text-inherit font-normal font-[inherit] inline-block max-w-full z-[2] mq950:text-[2.375rem] mq450:text-[1.813rem]">
    WE KNOW THE PROBLEM
  </h3>
</div>
        </div>
        <div className="shadow-[5px_10px_50px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(50px)] rounded-31xl bg-gray-100 border-white border-[1px] border-solid box-border flex flex-row items-start justify-start max-w-full z-[2] text-[2rem] font-jura">
          <div className="self-stretch w-[103.125rem] relative shadow-[5px_10px_50px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(50px)] rounded-31xl bg-gray-100 border-white border-[1px] border-solid box-border hidden max-w-full" />
          <div className="w-[103.125rem] flex flex-row flex-wrap items-center justify-center py-[6.25rem] px-[3.437rem] box-border gap-x-[2.5rem] gap-y-[3rem] min-h-[50rem] max-w-full z-[3] gap-[2.5m] mq950:pt-[4.063rem] mq950:pb-[4.063rem] mq950:box-border mq1425:pl-[1.688rem] mq1425:pr-[1.688rem] mq1425:box-border">
            <PROB5 />
            <PROB4 />
            <PROB3 />
            <PROB2 />
            <PROB1 />
            <PROB />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
