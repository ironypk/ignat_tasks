import React from 'react'
import Error404 from './pages/Error404';
import {Switch, Route, Redirect} from 'react-router-dom'
import PreJunior from './pages/PreJunior';
import {Junior} from './pages/Junior';
import {Junior_Plus} from './pages/Junior_Plus';

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus'
}

function Routes() {
    return (
        <div>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
                <Route path={PATH.JUNIOR} render={() => <Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} render={() => <Junior_Plus/>}/>

                <Route render={() => <Error404/>}/>
            </Switch>
        </div>
    )
}

export default Routes
