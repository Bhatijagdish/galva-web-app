import PropTypes from "prop-types";

const FROMPATRICK = ({ className = "" }) => {
  return (
    <div
      className={`w-[103.188rem] flex flex-row items-end justify-start pt-[0.125rem] pb-[0.062rem] pl-[51.562rem] pr-[3.125rem] box-border relative gap-[0.575rem] max-w-full z-[1] text-left text-[1.5rem] text-black font-inria-sans mq950:flex-wrap mq950:pl-[12.875rem] mq950:box-border mq1900:flex-wrap mq450:flex-wrap mq450:pl-[1.25rem] mq450:box-border mq1425:flex-wrap mq1425:pl-[25.75rem] mq1425:pr-[1.563rem] mq1425:box-border ${className}`}
    >
      <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] shadow-[0px_0px_25px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(20px)] rounded-6xl [background:linear-gradient(107.18deg,_rgba(255,_255,_255,_0.3),_rgba(190,_190,_190,_0.3)_50.08%,_rgba(255,_255,_255,_0.3))] border-gray-400 border-[1px] border-solid box-border" />
      <img
        className="ml-[-54.125rem] w-[53.55rem] relative max-h-full object-cover max-w-[111%] shrink-0 z-[1] mq950:flex-1 mq1900:flex-1 mq450:flex-1 mq1425:flex-1"
        loading="lazy"
        alt=""
        src="/file-1@2x.png"
      />
      <div className="w-[48.5rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1.187rem] box-border min-w-[48.5rem] max-w-full shrink-0 mq950:flex-1 mq1900:flex-1 mq1900:min-w-full mq450:flex-1 mq1425:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.562rem] max-w-full">
          <b className="self-stretch relative text-[2.5rem] z-[1] mq950:text-[2rem] mq450:text-[1.5rem]">
            A decade of experience in the electroplating industry.
          </b>
          <div className="self-stretch relative font-extralight font-inter z-[1] mq450:text-[1.188rem]">
            <p className="m-0">
              With a decade of experience in electroplating, I experience the
              growing challenges and opportunities in the industry every day.
              Producing first-class surfaces requires precision and expertise.
              Unfortunately, the lack of qualified personnel has become a
              serious problem. This puts a burden on skilled workers with
              training and supervision costs.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Innovative solutions through digital means and AI technologies
              strengthen employee skills, increase efficiency and expand
              valuable knowledge. As an experienced EFZ electroplating engineer,
              I see GALVA.AI as a promising answer to our challenges.
            </p>
          </div>
          <div className="flex flex-col items-start justify-start max-w-full z-[1]">
            <img
              className="w-[18.75rem] h-[5rem] relative overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/patrick-sign-1@2x.png"
            />
            <div className="relative mq450:text-[1.188rem]">
              <p className="m-0">Patrick Boehm</p>
              <p className="m-0">
                Electroplating engineer and founder of GALVA.AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FROMPATRICK.propTypes = {
  className: PropTypes.string,
};

export default FROMPATRICK;
