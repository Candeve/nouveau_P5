import React from 'react';
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

export default Cards;
