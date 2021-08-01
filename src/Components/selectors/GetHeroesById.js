import { heroes } from "../../data/heroes";


export const GetHeroesById = (id) => {

    return heroes.find( heroe => heroe.id === id )
    
}
