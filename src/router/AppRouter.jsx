import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../auth/pages/LoginScreen';

import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';

export const AppRouter = () => {
	return (
		//Router principal
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<LoginScreen />} />

				{/* Llama al segundo Router  */}
				<Route path="/*" element={<HeroesRoutes />} />
			</Routes>
		</BrowserRouter>
	);
};
