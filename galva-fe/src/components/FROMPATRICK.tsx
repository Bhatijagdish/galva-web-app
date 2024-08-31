import PropTypes from "prop-types";

const FROMPATRICK = ({ className = "" }) => {
  return (
    <div
      className={`w-full flex flex-row mq950:flex-col items-center justify-center p-4 mq950:p-6 box-border relative gap-4 max-w-full z-1 text-left font-inria-sans ${className}`}
    >
      <div className="w-full flex items-center justify-center relative mb-4 mq950:mb-0">
        <div className="h-full w-full absolute top-0 right-0 bottom-0 left-0 shadow-lg ounded-6xl  border-gray-400 box-border" />
        <img
          className="w-full mq950:w-[53.55rem] max-h-[50vh] object-cover mq950:max-w-[111%] z-1"
          loading="lazy"
          alt="Electroplating industry"
          src="/file-1@2x.png"
        />
      </div>
      <div className="w-full mq950:w-[48.5rem] flex flex-col items-start justify-end p-4 box-border min-w-0 max-w-full z-1">
        <div className="flex flex-col items-start justify-start gap-4 max-w-full">
          <b className=" text-21xl mq950:text-xl z-1">
            A decade of experience in the electroplating industry.
          </b>
          <div className="font-extralight font-inter z-1 text-1.5 mq950:text-base">
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
          <div className="flex flex-col items-start justify-start max-w-full z-1">
            <img
              className="w-[18.75rem] h-[5rem] object-cover"
              loading="lazy"
              alt="Patrick Boehm"
              src="/patrick-sign-1@2x.png"
            />
            <div className="text-base mq950:text-lgi mt-2">
              <p className="m-0">Patrick Boehm</p>
              <p className="m-0">Electroplating engineer and founder of GALVA.AI</p>
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