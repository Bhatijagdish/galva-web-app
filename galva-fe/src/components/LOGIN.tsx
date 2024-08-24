import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./styles/LoginButton.css";

const LOGIN = ({ className = "" }) => {
  const navigate = useNavigate(); 

  const handleLoginClick = () => {
    navigate("/auth?mode=signin"); // Redirect to the sign-in container
  };

  return (
    <div
      className={`flex flex-row items-start justify-start text-left text-[1.938rem] text-white font-jura ${className}`}
    >
      <div
        className="rounded-3xs flex flex-row items-start justify-start py-[0rem] px-[0.375rem] relative login-button"
        onClick={handleLoginClick} // Add onClick event handler
      >
        <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] shadow-[0px_0px_7px_rgba(0,_0,_0,_0.5),_0px_4px_7px_2px_rgba(255,_255,_255,_0.5)_inset] rounded-3xs [background:linear-gradient(99.09deg,_#77aaff,_#c39fff)] mix-blend-normal shadow" />
        <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[5.438rem] whitespace-nowrap z-[1]">
          LOGIN
        </a>
      </div>
    </div>
  );
};

LOGIN.propTypes = {
  className: PropTypes.string,
};

export default LOGIN;
