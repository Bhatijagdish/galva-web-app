import PropTypes from "prop-types";

const FEATDATA1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start py-[4.5rem] px-[0rem] box-border min-h-[20.75rem] max-w-full z-[2] text-left text-[2.5rem] text-black font-jura ${className}`}
    >
      <b className="self-stretch relative mq950:text-[2rem] mq450:text-[1.5rem]">
        Let our intelligent assistant, GALVA.AI, accompany you through everyday
        life in electroplating.
      </b>
      <div className="w-[37.563rem] h-[7.125rem] relative text-[2rem] font-light text-gray-200 text-justify inline-block max-w-full z-[1] mt-[-9.438rem] mq950:text-[1.625rem] mq450:text-[1.188rem]">
        It offers you real-time support to optimize the efficiency and precision
        of your galvanic processes.
      </div>
    </div>
  );
};

FEATDATA1.propTypes = {
  className: PropTypes.string,
};

export default FEATDATA1;
