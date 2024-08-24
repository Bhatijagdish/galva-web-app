import PropTypes from "prop-types";

const FEATDATA = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start py-[5.437rem] px-[0rem] box-border min-h-[19.688rem] max-w-full z-[1] text-left text-[2.5rem] text-black font-jura ${className}`}
    >
      <b className="self-stretch relative mq950:text-[2rem] mq450:text-[1.5rem]">
        Exclusively equipped with specialist knowledge in electroplating
        technology.
      </b>
      <div className="w-[37.563rem] h-[7.125rem] relative text-[2rem] font-light text-gray-200 text-justify inline-block max-w-full z-[1] mt-[-7.938rem] mq950:text-[1.625rem] mq450:text-[1.188rem]">
        Their specialization makes them almost immune to adulteration and
        guarantees accurate and reliable results.
      </div>
    </div>
  );
};

FEATDATA.propTypes = {
  className: PropTypes.string,
};

export default FEATDATA;
