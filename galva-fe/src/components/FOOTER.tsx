import PropTypes from "prop-types";

const FOOTER = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-[2.312rem] px-[1.25rem] pb-[2.125rem] relative z-[1] text-left text-[1.25rem] text-darkslategray font-inria-sans ${className}`}
    >
      <footer className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] shadow-[0px_0px_25px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(20px)] rounded-6xl [background:linear-gradient(107.18deg,_rgba(80,_38,_148,_0.3),_rgba(26,_67,_135,_0.3))] border-mediumpurple border-[1px] border-solid box-border" />
      <div className="w-[13.706rem] flex flex-col items-end justify-start gap-[1rem] z-[1]">
        <img
          className="self-stretch h-[3.75rem] relative rounded-mini max-w-full overflow-hidden shrink-0 object-cover"
          alt=""
          src="/navbar-logo-2@2x.png"
        />
        <div className="w-[12.794rem] flex flex-col items-start justify-start gap-[0.875rem]">
          <div className="self-stretch relative tracking-[0.03em] font-light mq450:text-[1rem]">
            <p className="m-0">Contact:</p>
          </div>
          <div className="relative text-[1.5rem] tracking-[0.03em] font-light text-black mq450:text-[1.188rem]">
            <p className="m-0">Patrick Boehm</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              <a
                className="text-[inherit]"
                href="tel:+41775218015"
                target="_blank"
              >
                <span className="[text-decoration:underline]">
                  0041 77 521 80 15
                </span>
              </a>
            </p>
            <p className="m-0">
              <a
                className="text-[inherit]"
                href="mailto:patrick@galva.ai"
                target="_blank"
              >
                <span className="[text-decoration:underline]">
                  patrick@galva.ai
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

FOOTER.propTypes = {
  className: PropTypes.string,
};

export default FOOTER;
