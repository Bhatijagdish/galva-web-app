import TRYNOWBUTTON from "./TRYNOWBUTTON";
import PropTypes from "prop-types";

const SolutionButton = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full ${className}`}
    >
      <TRYNOWBUTTON />
    </div>
  );
};

SolutionButton.propTypes = {
  className: PropTypes.string,
};

export default SolutionButton;
