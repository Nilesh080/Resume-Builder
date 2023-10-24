import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route }
from 'react-router-dom';
import App1 from "./components/Explore/App1";
import Recc from "./components/Recc/Rec";
import Home from "./pages/index";
import About from './pages/about';
import Create from './pages/create';
import SignUp from './pages/signup';
import Contact from './components/Contact/contact';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import CollapsibleExample from './components/Navbar';
import Analyze from './components/Analysis/Analyze';
// import Footer from './components/Footer/Footer';

function App() {
	return (
			<Router>
			<CollapsibleExample />
			<Routes>
				<Route  path='/' exact element={<Home />} />
				<Route  path='/index' exact element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/create' element={<Create />} />
				<Route path='/analyze' element={<Analyze />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/reccomendation' element={<Recc />} />
				<Route path='/explore' element={<App1 />} />
			</Routes>
		</Router>
	);
}

export default App;