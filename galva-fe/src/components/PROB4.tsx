import PropTypes from "prop-types";

const PROB4 = ({ className = "" }) => {
  return (
    <div
      className={`transition duration-300 hover:bg-[rgba(255,255,255,0.8)] hover:rounded-[25px] hover:border-[1px_rgba(255,255,255,0.8)] hover:shadow-[0px_5px_25px_0px_rgba(0,0,0,0.25)] rounded-6xl  h-[17.188rem] w-[30rem] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[1.875rem] pb-[2.812rem] pl-[1.25rem] pr-[0.75rem] box-border relative gap-[2.625rem] max-w-full text-left text-[2rem] text-black font-jura gap-[1.313rem] ${className}`}
    >
      <div className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-6xl bg-gray-300 border-gray-400 border-[1px] border-solid box-border" />
      <div className="self-stretch flex flex-row items-center justify-center py-[0rem] pl-[0rem] pr-[0rem] box-border max-w-full shrink-0 mq950:pl-[3.438rem] mq950:box-border mq450:pl-[1.25rem] mq450:box-border">
        <div className="relative inline-block max-w-[100%] shrink-0 z-[1] mq950:text-[1.625rem] mq450:text-[1.188rem]">
          Shortage of skilled personnel
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start max-w-full shrink-0 z-[1] text-justify text-[1.25rem]">
        <div className="flex-1 relative inline-block max-w-full mq450:text-[1rem]">
          The shortage of skilled workers is a serious industry problem. The
          demand for skilled workers exceeds the supply. GALVA.AI can teach
          employees the basics of electroplating technology in their native
          language and promote their qualifications.
        </div>
      </div>
    </div>
  );
};

PROB4.propTypes = {
  className: PropTypes.string,
};

export default PROB4;
