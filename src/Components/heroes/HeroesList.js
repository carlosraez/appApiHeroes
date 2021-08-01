import React, { useMemo } from 'react'
import { GetHeroesByPublisher } from '../selectors/GetHeroesByPublisher'
import { HeroesCard } from './HeroesCard'

export const HeroesList = ({ publisher }) => {

   const heroes = useMemo(() => GetHeroesByPublisher(publisher),[publisher])

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                heroes.map( ( heroe ) => {
                    return(
                        <HeroesCard
                         key={heroe.id}
                         {...heroe}
                         />
                      
                    )
                } )
            }
            
        </div>
    )
}
