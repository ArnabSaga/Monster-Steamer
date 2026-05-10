import PropTypes from "prop-types";

const UpperTopArrow = ({ className }) => {
  return (
    <svg
      className={className}
      width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1H8.9C8.95523 1 9 1.04477 9 1.1V9" stroke="#5B757D" strokeLinecap="round" />
      <path d="M9 1L1 9" stroke="#5B757D" strokeLinecap="round" />
    </svg>
  );
};

UpperTopArrow.propTypes = {
  className: PropTypes.string,
};

export default UpperTopArrow;
