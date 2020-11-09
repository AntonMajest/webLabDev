import React, {Component} from 'react';
import {BrowserRouter, NavLink, Switch, Redirect, Route } from "react-router-dom";
import './Navigation.css'
import Home from "../Main/Home/Home";
import Header from "../Header/Header";
import {aboutData, homeData, interestData, universityData, professionData} from "../../mock-data/data";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

class Navigation extends Component {
    render() {
        return (

                <BrowserRouter>
                        <Header/>
                    <Switch>
                        <Route path={'/aboutme'} component={Main}>
                            <Main data={aboutData}/>
                        </Route>
                        <Route path={'/university'} component={Main}>
                            <Main data={universityData}/>
                        </Route>
                        <Route path={'/interest'} component={Main}>
                            <Main data={interestData}/>
                        </Route>
                        <Route path={'/profession'} component={Main}>
                            <Main data={professionData}/>
                        </Route>
                        <Redirect exact from={'/'} to={'/home'} />
                        <Route path={'/home'} component={Home}>
                            <Home data={homeData}/>
                        </Route>
                    </Switch>
                    <Footer/>
                </BrowserRouter>

        );
    }
}

export default Navigation;