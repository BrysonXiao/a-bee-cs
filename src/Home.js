import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App.js";
import Theater from "./Theater.js";

function Home (props){
    return (
        <HashRouter basename='/'>
            <Switch>
                <Route path='/' exact component={App}/>
                <Route path='/theater/:beenum' exact component={Theater}/>
                <Route path='/' render={() => <div>404</div>}/>
            </Switch>
        </HashRouter>
    );
}

export default Home;