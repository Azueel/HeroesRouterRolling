import React from 'react';
import { NavLink } from 'react-router-dom';
import { heroesBypublisher } from '../helpers/heroesByPublisher';

export const HeroList = ({ publisher }) => {
	//llama a la funcion del helpers manadndo el publisher que lo recibo de los pages de DC o MarvelScreen
	const heroes = heroesBypublisher(publisher);

	//una vez que heroesByPublisher recibe un resultado lo guarda en heroes y me lo guardara en un arreglo donde con el map imprimrie todos los resultados en el HTML

	return (
		<div className="p-5 row row-cols-1 row-cols-3 g-3">
			{heroes.map((hero) => {
				return (
					<div key={hero.id}>
						<div className="col">
							<div className="card">
								<div className="row no-gutters">
									<div className="col-6">
										<img src={hero.url} className="card-img" alt={hero.superhero} height={240} />
									</div>
									<div className="col-6">
										<div className="card-body">
											<h5 className="card-title">{hero.superhero}</h5>
											<p className="card-text"> {hero.alter_ego}</p>

											{hero.characters !== hero.alter_ego ? <p>{hero.characters}</p> : ''}

											<p className="card-text">
												<small>{hero.first_appearance}</small>
											</p>

											<NavLink to={`/hero/${hero.id}`}>Mas...</NavLink>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
