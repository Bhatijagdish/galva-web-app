import PropTypes from "prop-types";
import "./styles/Login2.css";

interface Login2Props {
  className?: string;
  onClick?: () => void;
}

const LOGIN2: React.FC<Login2Props> = ({ className = "", onClick }) => {
  return (
    <div className={`${className}`}>
      <button
        type="submit"
        onClick={onClick}
        className="w-[280px] h-[40px] rounded-3xs flex flex-row items-center justify-center py-[0rem] px-[0.375rem] relative login-button my-16 text-left text-[1.938rem] text-white font-jura"
      >
        <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] shadow-[0px_0px_7px_rgba(0,_0,_0,_0.5),_0px_4px_7px_2px_rgba(255,_255,_255,_0.5)_inset] rounded-3xs [background:linear-gradient(99.09deg,_#77aaff,_#c39fff)] mix-blend-normal shadow" />
        <span className="relative text-inherit inline-block min-w-[5.438rem] whitespace-nowrap z-[1]">
          Sign In
        </span>
      </button>
    </div>
  );
};

LOGIN2.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default LOGIN2;
