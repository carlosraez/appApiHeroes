import React from 'react'
import { Route,Switch, Redirect } from "react-router-dom";
import { Navbar } from "../Components/ui/Navbar";
import { Marvel } from "../Components/marvel/Marvel";
import { HeroesScreen } from '../Components/heroesScreen/HeroesScreen'
import { DcScreen } from '../Components/dc/DcScreen';
import { SearchScreen } from '../Components/search/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar /> 
            <div className="container mt-2">
                <Switch>
                <Route exact path="/marvel" component={Marvel} />
                <Route exact path="/hero/:heroeId" component={HeroesScreen} />
                <Route exact path="/dc" component={DcScreen} />
                <Route exact path="/search" component={SearchScreen} />
                <Redirect to="/marvel" />
                </Switch>
            </div>         
        </>
    )
}
