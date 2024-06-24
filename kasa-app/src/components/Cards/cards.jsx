
import React from 'react';
import './cards.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Cards({ id, cover, title }) {
    return (
        
        <Link to={`/logements/${id}`} className="fiche-logement">
            <figure className='fig-image'>
                <img src={cover} alt={title} className="image-card" />
                <figcaption className='titre-image'>{title}</figcaption>
            </figure>
        </Link>
        
    );
}
Cards.propTypes = {
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
export default Cards;
