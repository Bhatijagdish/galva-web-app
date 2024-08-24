import PropTypes from "prop-types";

const ABOUTUS = ({ className = "" }) => {
  return (
    <div
      className={`h-[1.75rem] w-[7.375rem] relative text-justify text-[1.5rem] text-white font-jura ${className}`}
    >
      <a className="[text-decoration:none] absolute w-full top-[0%] left-[0%] text-[inherit] inline-block min-w-[7.375rem] whitespace-nowrap h-full">
        ABOUT US
      </a>
      <div className="absolute bottom-[-0.062rem] left-[calc(50%_-_0px)] border-white border-r-[1px] border-solid box-border w-[0.063rem] h-[0.063rem]" />
    </div>
  );
};

ABOUTUS.propTypes = {
  className: PropTypes.string,
};

export default ABOUTUS;
