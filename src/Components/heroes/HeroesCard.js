import React from 'react'
import { Link } from 'react-router-dom'

const heroImages = require.context('../../assets/heroes', true)

export const HeroesCard = ({
    id,
    superhero, 
    alter_ego,
    first_appearance,
    characters,
}) => {
 
    return (
        <div className="card ms-3" style={ { maxWidth: 540 } }>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img 
                    //src={`../assets/heroes/${id}.jpg`} 
                    src={heroImages(`./${id}.jpg`).default}
                    alt={superhero} 
                    className="card-img"
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        {
                            (alter_ego !== characters)
                            && <p className="card-text">{characters}</p>
                        }
                        <p className="card-text">
                            <small className="text-muted">{ first_appearance }</small>
                        </p>
                        <Link to={`./hero/${id}`}>Mas...</Link>
                    </div>
                </div>
            </div>
      </div>
    )
}

