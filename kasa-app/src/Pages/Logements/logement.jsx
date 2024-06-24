import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import annoncesdesLogements from '../../annonces/logements';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import Collapse from '../../components/Collapse/collapse';
import Carrousel from '../../components/Carrousel/carrousel';
import './logement.scss'

import fullStar from '../../assets/full_star.png';
import emptyStar from '../../assets/empty_star.png';

function Logement() {
    const { id } = useParams();
    const navigate = useNavigate();
    const logement = annoncesdesLogements.find((logement) => logement.id === id);

    useEffect(() => {
        if (!logement) {
            navigate('/error404');
        }
    }, [logement, navigate]);

    if (!logement) {
        return null;
    }

    return (
        <div>
            <Header />
            <div className="logement-detail">
                <Carrousel pictures={logement.pictures} />
                <h1>{logement.title}</h1>
                <p className="location">{logement.location}</p>
                <div className="tags">
                    {logement.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
                <div className="host-info">
                    <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
                    <p>{logement.host.name}</p>
                </div>
                <div className="rating">
                    {[...Array(5)].map((star, index) => {
                        const ratingValue = index + 1;
                        return (
                            <img
                                key={index}
                                src={ratingValue <= logement.rating ? fullStar : emptyStar}
                                alt={`${ratingValue} star`}
                                className="star"
                            />
                        );
                    })}
                </div>
                <div className="description">
                    <Collapse title="Description">
                        <p>{logement.description}</p>
                    </Collapse>
                </div>
                <div className="equipments">
                    <Collapse title="Équipements">
                        <ul>
                            {logement.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    </Collapse>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Logement;