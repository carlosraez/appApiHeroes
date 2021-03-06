import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { GetHeroesById } from '../selectors/GetHeroesById'
import { heroImages } from '../../helpers/heroImages'

//import batman from '../../assets/heroes/dc-batman.jpg'



export const HeroesScreen = ({ history }) => {

   const { heroeId } = useParams()
   
  const hero = useMemo(() => GetHeroesById(heroeId), [heroeId])
   
   if(!hero) {
       return <Redirect  to="/" />
   }

   const  {
    superhero, 
    alter_ego,
    first_appearance,
    characters,
    publisher,
   } = hero

   const handleReturn = () => {
       if (history.length <= 2) {
           history.push('/')   
       } else {
         history.goBack()
       }
       
   }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img  
               // src={`../assets/heroes/${heroeId}.jpg`} desde public /asstes
                //src={batman} import 
                src={heroImages(`./${heroeId}.jpg`).default}
                alt={superhero} 
                className="img-thumbnail"
                />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b> {alter_ego} </li>
                    <li className="list-group-item"><b>Publisher:</b> {publisher} </li>
                    <li className="list-group-item"><b>First Appearance:</b> {first_appearance} </li>
                </ul>
                <h5>Characters</h5>
                <p>{characters}</p>
                <button
                className="btn btn-outline-info"
                onClick={handleReturn}
                >
                    Return
                </button>
            </div>
        </div>
    )
}