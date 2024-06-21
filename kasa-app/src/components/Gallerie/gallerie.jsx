import React from 'react';
import annoncesdesLogements from '../../annonces/logements';
import Cards from '../../components/Cards/cards';
import './gallerie.scss';

function Gallerie() {
    return (
        <span className="gallery-wrapper">
        <div className="logementsPA">
            {annoncesdesLogements.map(({ id, cover, title }) => (
                <Cards key={id} cover={cover} title={title} />
            ))}
        </div>
        </span>
    );
}

export default Gallerie;
