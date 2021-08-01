import { heroes } from "../../data/heroes";


export const GetHeroesByPublisher = (publisher) => {

    const validPublisher = ['DC Comics','Marvel Comics' ]

    //lo negamos para utilice esta condicion sino lo encuentra
  
    if (!validPublisher.includes(publisher)) {
        throw new Error(`Ha habido un error, el ${publisher} no es correcto, los heroes correctos son ${validPublisher}`)
    }
    

    return heroes.filter( heroe => heroe.publisher === publisher )
}
