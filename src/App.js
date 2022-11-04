/* eslint-disable import/newline-after-import */
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import Layout from './components/Layout';
import './App.css';

const Home = loadable(() =>
	import(/* webpackChunkName: "Home-componenet" */ './components/Home')
);
const About = loadable(() =>
	import(/* webpackChunkName: "About-componenet" */ './components/About')
);
const Dashboard = loadable(() =>
	import(
		/* webpackChunkName: "Dashboard-componenet" */ './components/Dashboard'
	)
);
const NoMatch = loadable(() =>
	import(/* webpackChunkName: "NoMatch-componenet" */ './components/NoMatch')
);

function App() {
	return (
		<div>
			<h1>Basic Example</h1>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route
						index
						element={
							<Suspense fallback={<div>Loading...</div>}>
								<Home />
							</Suspense>
						}
					/>
					<Route
						path="about"
						element={
							<Suspense fallback={<div>Loading...</div>}>
								<About />
							</Suspense>
						}
					/>
					<Route
						path="dashboard"
						element={
							<Suspense fallback={<div>Loading...</div>}>
								<Dashboard />
							</Suspense>
						}
					/>
					<Route
						path="*"
						element={
							<Suspense fallback={<div>Loading...</div>}>
								<NoMatch />
							</Suspense>
						}
					/>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
