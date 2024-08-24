
import FEATS from "./FEATS";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] pb-[9.875rem] pl-[1.312rem] pr-[1.25rem] box-border max-w-full text-left text-[2.5rem] text-black font-jura mq950:pb-[4.188rem] mq950:box-border mq1425:pb-[6.438rem] mq1425:box-border ${className}`}
    >
      <FEATS />
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
