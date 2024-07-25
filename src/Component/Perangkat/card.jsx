import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaWhmcs } from "react-icons/fa";

const Card = ({ id, title, description, buttonLabel, highlighted, onButtonClick }) => {
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  return (
    <div className={`card p-4 bg-white border rounded shadow-md transition-transform transform hover:scale-105 duration-300 ease-in-out ${highlighted ? 'bg-white' : ''}`}>
      <div className="flex items-center mb-2">
        <FaWhmcs className="text-gray-500 mr-2 w-4 h-4" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <Link to={`/detail-perangkat/${id}`}
          onClick={handleButtonClick}
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 inline-block text-center" >
          {buttonLabel}
        </Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func,
  highlighted: PropTypes.bool,
};

export default Card;
