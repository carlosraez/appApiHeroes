import React from 'react'
import { HeroesList } from '../heroes/HeroesList'

export const Marvel = () => {
    return (
        <div>
            <h1>Marvel</h1>
            <hr></hr>
            <HeroesList publisher="Marvel Comics" />
        </div>
    )
}
