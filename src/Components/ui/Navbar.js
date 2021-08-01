import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const Navbar = () => {

    const { user:{ name }, dispatch } = useContext( AuthContext )
    const history = useHistory()

    const handleLogout = () => {

        history.replace('/login')

        dispatch({
            type: types.logout,
            payload: {
                name:'Carlos Raez'
            }
        })
        
    }
    
    return (
    
        
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>
            <NavLink 
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        SearchScreen
                    </NavLink>

                    <p className="nav-item nav-link">
                       {name}
                    </p>
                    <button 
                        className="nav-item nav-link btn" 
                        onClick={handleLogout} 
                    >
                        Logout
                    </button>
        </nav>
    )
}