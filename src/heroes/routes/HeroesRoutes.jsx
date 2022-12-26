import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui/components/NavBar';
import { DcScreen } from '../pages/DcScreen';
import { MarvelScreen } from '../pages/MarvelScreen';
import { SearchScreen } from '../pages/SearchScreen';

export const HeroesRoutes = () => {
	return (
		<>
			{/* Este es el segundo Router que esta dedicado solamente para toda la Pagina quitando el login */}
			<Navbar />
			<div>
				<Routes>
					<Route path="/marvel" element={<MarvelScreen />} />
					<Route path="/dc" element={<DcScreen />} />
					<Route path="/search" element={<SearchScreen />} />
					<Route path="*" element={<MarvelScreen />} />
				</Routes>
			</div>
		</>
	);
};
