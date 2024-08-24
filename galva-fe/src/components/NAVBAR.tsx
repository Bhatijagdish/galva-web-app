import HOME from "./HOME";
import FEATURES from "./FEATURES";
import ABOUTUS from "./ABOUTUS";
import LOGIN from "./LOGIN";
import SIGNUP from "./SIGNUP";
import PropTypes from "prop-types";
import "./styles/Navbar.css"; // Make sure to import the CSS file

const NAVBAR = ({ className = "" }) => {
  return (
    <header
      className={`navbar-container self-stretch h-[5.625rem] sticky top-[0] z-[99] text-justify text-[1.5rem] text-white font-jura ${className}`}
    >
      <div className="navbar-brightness absolute h-[77.78%] w-full top-[22.22%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_10px_20px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(25px)] rounded-xl [background:linear-gradient(91.68deg,_rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.1)_50.43%,_rgba(255,_255,_255,_0.2))] border-gray-500 border-[2px] border-solid box-border z-[1]" />
      <img
        className="absolute h-[66.67%] w-[11.17%] top-[27.78%] right-[88.62%] bottom-[5.56%] left-[0.21%] rounded-mini max-w-full overflow-hidden max-h-full object-contain mix-blend-normal z-[2]"
        alt=""
        src="/navbar-logo@2x.png"
      />
      <div className="absolute h-[31.11%] w-[21.28%] top-[45.56%] right-[39.36%] bottom-[23.33%] left-[39.36%] flex flex-row items-start justify-between gap-[1.25rem] z-[2]">
        <HOME />
        <FEATURES />
        <ABOUTUS />
      </div>
      <div className="absolute h-[44.44%] w-[12.98%] top-[38.89%] right-[0.8%] bottom-[16.67%] left-[86.22%] flex flex-row items-start justify-start gap-[1.062rem] z-[2]">
        <LOGIN />
        <SIGNUP />
      </div>
    </header>
  );
};

NAVBAR.propTypes = {
  className: PropTypes.string,
};

export default NAVBAR;
