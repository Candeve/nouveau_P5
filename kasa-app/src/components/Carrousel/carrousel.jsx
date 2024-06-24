import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './carrousel.scss';

import leftArrow from '../../assets/leftarrow.png';
import rightArrow from '../../assets/rightarrow.png';

const Carrousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const lastIndex = pictures.length - 1;
    const resetIndex = currentIndex === 0;
    const index = resetIndex ? lastIndex : currentIndex - 1;
    setCurrentIndex(index);
  };

  const handleNextClick = () => {
    const lastIndex = pictures.length - 1;
    const resetIndex = currentIndex === lastIndex;
    const index = resetIndex ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  if (pictures.length === 1) {
    return (
      <div className="carrousel">
        <img src={pictures[0]} alt="Logement" className="carrousel-image" />
      </div>
    );
  }

  return (
    <div className="carrousel">
      <img
        src={leftArrow}
        alt="Previous"
        className="arrow arrow-left"
        onClick={handlePrevClick}
      />
      <img
        src={pictures[currentIndex]}
        alt={`Logement ${currentIndex + 1}`}
        className="carrousel-image"
      />
      <img
        src={rightArrow}
        alt="Next"
        className="arrow arrow-right"
        onClick={handleNextClick}
      />
      <div className="image-counter">
        {currentIndex + 1}/{pictures.length}
      </div>
    </div>
  );
};

Carrousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carrousel;
