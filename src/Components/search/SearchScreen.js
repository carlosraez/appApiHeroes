import React, { useMemo } from 'react'
import queryString from 'query-string'

import { GetHeroesByName } from '../selectors/GetHeroesByName';
import { HeroesCard } from '../heroes/HeroesCard';
import { useForm } from '../../Hooks/useForm';
import { useLocation } from 'react-router';

export const SearchScreen = ({ history }) => {

    const location = useLocation()
    const { q = '' } = queryString.parse(location.search);
    
    const [ formValues, handleInputChange ] = useForm({
        searchText:q,
    })

    const { searchText  } = formValues

    const  heroesFiltered = useMemo(() => GetHeroesByName(q), [q])
  
    const handleSearch = (e) => {
        e.preventDefault()
        history.push(`?q=${searchText}`)
        
    }

    return (
        <div>
           <h1>SearchScreen</h1> 
           <hr />
           <div className="row">
               <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            name="searchText"
                            placeholder="Find your hero"
                            className="form-control"
                            autoComplete="off"
                            onChange={handleInputChange}
                            value={searchText}
                        />
                        <button 
                            type="submit"
                            className="btn m-1 btn-block bnt-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
               </div>
               <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {       (q === '') 
                            && 
                            <div className="alert alert-info">
                             Search a Hero
                            </div>
                    }
                    {       (q !== '' && heroesFiltered.length === 0) 
                            && 
                            <div className="alert alert-danger">
                             There is not a Hero with { q }
                            </div>
                    }
                    {
                    
                        heroesFiltered.map( ( hero ) => (
                             <HeroesCard 
                             key={hero.id}
                            { ...hero } />
                         ))
                    }
               </div>
           </div>
        </div>
    )
}
