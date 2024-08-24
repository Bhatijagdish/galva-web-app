import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./styles/TryNowButton.css"; // Make sure to import the CSS file

const TRYNOWBUTTON = ({ className = "" }) => {
  const navigate = useNavigate(); // Initialize navigate

  const handleClick = () => {
    navigate("/chat"); // Redirect to /chat route
  };

  return (
    <button
      className={`trynow-button cursor-pointer border-none pt-[0.562rem] px-[1.25rem] pb-[0.937rem] bg-transparent w-[30.875rem] flex items-center justify-center box-border relative whitespace-nowrap max-w-full z-[3] ${className}`}
      onClick={handleClick} // Add onClick event handler
    >
      <div className="trynow-button-bg h-full w-full absolute top-0 right-0 bottom-0 left-0 shadow-[5px_10px_15px_rgba(0,0,0,0.3)] backdrop-blur-lg rounded-xl bg-gray-600 border-gray-500 border-2 border-solid" />
      <b className="trynow-button-text relative z-[1]">
        TRY NOW!
      </b>
    </button>
  );
};

TRYNOWBUTTON.propTypes = {
  className: PropTypes.string,
};

export default TRYNOWBUTTON;
