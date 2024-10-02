import NAVBAR from "./NAVBAR";
import TRYNOWBUTTON from "./TRYNOWBUTTON";
import PropTypes from "prop-types";

const LANDINGVID = ({ className = "" }) => {
  return (
    <section
      className={`relative self-stretch shadow-[0px_25px_100px_rgba(0,_0,_0,_0.35)] flex flex-col items-start justify-start pt-[0rem] px-[1.25rem] pb-[12.125rem] box-border gap-[9.312rem] max-w-full z-[1] text-left text-[3.375rem] text-white font-helvetica gap-[2.313rem] mq950:pb-[7.875rem] mq950:box-border mq450:pb-[5.125rem] mq450:box-border gap-[4.625rem] ${className}`}
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        preload="auto"
        loop
        muted
      >
        <source src="/landing_vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.8))] z-[-1]" />
      <NAVBAR />
      <div className="w-[61.063rem] flex flex-row items-start justify-center max-w-full">
        <div className="flex flex-col items-start justify-start gap-[2.625rem] max-w-full gap-[1.313rem]">
          <h2 className="m-0 h-[7.75rem] relative text-inherit tracking-[0.03em] font-bold font-[inherit] inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[3] mq950:text-[2.688rem] mq450:text-[2rem]">
            <p className="m-0">Welcome to GALVA.AI</p>
            <p className="m-0">The electroplating assistant</p>
          </h2>
          <b className="h-[9.25rem] relative text-[2rem] tracking-[0.03em] inline-block [text-shadow:5px_10px_15px_rgba(0,_0,_0,_0.5)] max-w-full z-[3] mq950:text-[1.625rem] mq450:text-[1.188rem]">
            <p className="m-0">A wealth of knowledge for electroplating,</p>
            <p className="m-0">comprehensive and easy to understand,</p>
            <p className="m-0">{`is conveniently available to each of `}</p>
            <p className="m-0">your employees.</p>
          </b>
          <TRYNOWBUTTON />
        </div>
      </div>
    </section>
  );
};

LANDINGVID.propTypes = {
  className: PropTypes.string,
};

export default LANDINGVID;
