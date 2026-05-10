import PropTypes from "prop-types";

const RightArrow = ({ className }) => {
  return (
    <svg
      className={` ${className}`}
      width="11"
      height="20"
      viewBox="0 0 11 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 19L9.92929 10.0707C9.96834 10.0317 9.96834 9.96834 9.92929 9.92929L1 1"
        stroke="#AFC0C4"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

RightArrow.propTypes = {
  className: PropTypes.string,
};

export default RightArrow;
