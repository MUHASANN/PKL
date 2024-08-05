import React from "react";
import PropTypes from "prop-types";

const Card = ({ image, title, description }) => {
  return (
    <div className="card p-4 bg-white border rounded shadow-md transition-transform transform hover:scale-105 duration-300 ease-in-out">
      <img src={image} alt={title} className="w-full h-[120px] object-cover rounded-lg mb-2" />
      <div className="flex items-center mb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
    </div>
  );
};

Card.propTypes = {
  guid_device: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
