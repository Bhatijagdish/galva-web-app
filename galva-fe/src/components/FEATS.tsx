import FEATDATA1 from "./FEATDATA1";
import FEATDATA from "./FEATDATA";
import PropTypes from "prop-types";

const FEATS = ({ className = "" }) => {
  return (
    <div
      className={`w-[103.188rem] flex flex-col items-start justify-start relative gap-[5.937rem] max-w-full z-[2] text-left text-[2.5rem] text-black font-jura gap-[2.938rem] gap-[1.5rem] ${className}`}
    >
      <div className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] shadow-[0px_0px_25px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(20px)] rounded-6xl [background:linear-gradient(108.21deg,_rgba(255,_255,_255,_0.2),_rgba(224,_224,_224,_0.2)_50.08%,_rgba(255,_255,_255,_0.2))] border-gray-400 border-[1px] border-solid box-border" />
      <div className="w-[142.563rem] h-[15.688rem] relative bg-gainsboro hidden max-w-full z-[1]" />
      <img
        className="w-[31.5rem] h-[26.313rem] absolute !m-[0] top-[0.875rem] left-[16.063rem] object-cover z-[3]"
        loading="lazy"
        alt=""
        src="/sm2x-1@2x.png"
      />
      <div className="w-[92.75rem] flex flex-row items-start justify-start gap-[5.625rem] max-w-full gap-[2.813rem] gap-[1.375rem] mq1425:flex-wrap">
        <div className="h-[26.625rem] flex-1 relative shadow-[0px_10px_25px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(25px)] rounded-6xl bg-gray-300 border-gray-400 border-[1px] border-solid box-border min-w-[31.688rem] max-w-full z-[2] mq950:min-w-full" />
        <div className="w-[38.375rem] flex flex-col items-start justify-start pt-[2.937rem] px-[0rem] pb-[0rem] box-border min-w-[38.375rem] max-w-full mq950:min-w-full mq450:pt-[1.938rem] mq450:box-border mq1425:flex-1">
          <FEATDATA1 />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[0.062rem] box-border max-w-full">
        <div className="w-[97.938rem] flex flex-row items-start justify-start gap-[10.812rem] max-w-full gap-[2.688rem] gap-[1.375rem] mq1425:flex-wrap gap-[5.375rem]">
          <div className="w-[38.375rem] flex flex-col items-start justify-start pt-[2rem] px-[0rem] pb-[0rem] box-border min-w-[38.375rem] max-w-full mq950:min-w-full mq1425:flex-1">
            <FEATDATA />
          </div>
          <div className="h-[26.625rem] flex-1 relative shadow-[0px_10px_25px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(25px)] rounded-6xl bg-gray-300 border-gray-400 border-[1px] border-solid box-border min-w-[31.688rem] max-w-full z-[1] mq950:min-w-full" />
        </div>
      </div>
    </div>
  );
};

FEATS.propTypes = {
  className: PropTypes.string,
};

export default FEATS;
