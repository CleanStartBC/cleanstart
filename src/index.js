import React from 'react';
import ReactDOM from 'react-dom';
import PrismicApp from './PrismicApp';
import * as serviceWorker from './serviceWorker';
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render((
	<React.Fragment>
		<ParallaxProvider>
			<PrismicApp />
		</ParallaxProvider>
	</React.Fragment>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
