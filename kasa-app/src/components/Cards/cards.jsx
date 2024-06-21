
import React from 'react';
import './cards.scss';
import PropTypes from 'prop-types';

function Cards({ cover, title }) {
    return (
        
        <div className="fiche-logement">
            <figure className='fig-image'>
                <img src={cover} alt={title} className="image-card" />
                <figcaption className='titre-image'>{title}</figcaption>
            </figure>
        </div>
        
    );
}
Cards.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
export default Cards;
