import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import NoMatch from './components/NoMatch';

function App() {
	return (
		<div>
			<h1>Basic Example</h1>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="*" element={<NoMatch />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
