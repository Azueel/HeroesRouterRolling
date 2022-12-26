import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {
	//useNavigate es un custom Hook personalizado de react-router-dom
	const navigate = useNavigate();

	const onLogin = () => {
		//Con navigate podemos redireccionar a una parte de la pagina mandando el path de la url "/marvel" en este caso
		navigate('/marvel', {
			replace: true,
		});
	};

	return (
		<div className="container mt-5">
			<h1>Login</h1>
			<hr />
			<button onClick={onLogin} className="btn btn-primary">
				Login
			</button>
		</div>
	);
};
