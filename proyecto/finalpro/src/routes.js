import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Detalle from './components/Detalle/Detalle';

const Routes = () => {
	return(
		<Switch>
			<Route exact path="/" component={Header}/>
			<Route path="/movie/:id" component={Detalle}/>
		</Switch>
		);
}

export default Routes;