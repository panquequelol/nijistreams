import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Streams from './pages/Streams';

function App() {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/streams' element={<Streams />} />
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
