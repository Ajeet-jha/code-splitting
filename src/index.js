/* eslint-disable */
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import loadable from '@loadable/component';
const App = loadable(() =>
	import(/* webpackChunkName: "loadable-app" */ './App')
);
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Suspense fallback={<div>Loading </div>}>
			<App />
		</Suspense>
	</React.StrictMode>
);
