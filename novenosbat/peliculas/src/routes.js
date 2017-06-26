import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Detalle from './components/Detalle/Detalle';

const Routes = () => {
	return(
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route path="/movie/:id" component={Detalle}/>
		</Switch>
		);
}

export default Routes;