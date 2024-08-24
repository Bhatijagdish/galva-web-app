import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./styles/SignupButton.css"; // Make sure to import the CSS file

const SIGNUP = ({ className = "" }) => {
  const navigate = useNavigate(); // Initialize navigate

  const handleSignUpClick = () => {
    navigate("/auth?mode=signup"); // Redirect to the sign-up container
  };

  return (
    <div
      className={`signup-button flex flex-row items-start justify-start pt-[0rem] px-[0.25rem] pb-[0.187rem] relative whitespace-nowrap text-left text-[1.938rem] text-white font-jura ${className}`}
      onClick={handleSignUpClick} // Add onClick event handler
    >
      <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] shadow-[0px_0px_7px_rgba(0,_0,_0,_0.5),_0px_4px_5px_rgba(255,_255,_255,_0.5)_inset rounded-3xs [background:linear-gradient(90deg,_#c39fff,_#77aaff)] shadow" />
      <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[7.375rem] whitespace-nowrap z-[1]">
        SIGN UP
      </a>
    </div>
  );
};

SIGNUP.propTypes = {
  className: PropTypes.string,
};

export default SIGNUP;
