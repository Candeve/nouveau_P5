import React from 'react';
import annoncesdesLogements from '../../annonces/logements';
import Cards from '../../components/Cards/cards';
import './gallerie.scss';

function Gallerie() {
    return (
        <div className="gallerie-container">
            <div className="gallery-wrapper">
                {annoncesdesLogements.map(({ id, cover, title }) => (
                    <Cards key={id} id={id} cover={cover} title={title} />
                ))}
            </div>
        </div>
    );
}

export default Gallerie;


