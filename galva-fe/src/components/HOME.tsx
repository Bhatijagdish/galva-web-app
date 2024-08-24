import PropTypes from "prop-types";

const HOME = ({ className = "" }) => {
  return (
    <div
      className={`h-[1.75rem] w-[4.188rem] relative overflow-hidden shrink-0 text-justify text-[1.5rem] text-white font-jura ${className}`}
    >
      <a className="[text-decoration:none] absolute w-full top-[0%] left-[0%] text-[inherit] inline-block min-w-[4.188rem] h-full">
        HOME
      </a>
      <div className="absolute bottom-[-0.062rem] left-[calc(50%_-_0.5px)] border-white border-r-[1px] border-solid box-border w-[0.063rem] h-[0.063rem]" />
    </div>
  );
};

HOME.propTypes = {
  className: PropTypes.string,
};

export default HOME;
