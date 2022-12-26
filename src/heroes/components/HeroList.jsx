import React from 'react';
import { heroesBypublisher } from '../helpers/heroesByPublisher';

export const HeroList = ({ publisher }) => {
	//llama a la funcion del helpers manadndo el publisher que lo recibo de los pages de DC o MarvelScreen
	const heroes = heroesBypublisher(publisher);

	//una vez que heroesByPublisher recibe un resultado lo guarda en heroes y me lo guardara en un arreglo donde con el map imprimrie todos los resultados en el HTML
	return (
		<div className="row row-cols-1 row-cols-3 g-3">
			{heroes.map((hero) => {
				return (
					<div>
						<h2>{hero.superhero}</h2>
					</div>
				);
			})}
		</div>
	);
};
