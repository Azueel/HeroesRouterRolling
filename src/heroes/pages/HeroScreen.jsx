import React from 'react';
import { useParams } from 'react-router-dom';
import { heroes } from '../data/heroes';

export const HeroScreen = () => {
	const { id } = useParams();
	const getHeroById = (id) => {
		return heroes.find((hero) => hero.id === id);
	};

	const heroe = getHeroById(id);

	return (
		<div className="row mt-5">
			<div className="col-4">
				<img src={heroe.url} alt={heroe.superhero} className="img-thumbnail" />
			</div>

			<div className="col-8">
				<h3>{heroe.superhero}</h3>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<b>Alter Ego:</b> {heroe.alter_ego}
					</li>
					<li className="list-group-item">
						<b>Publisher:</b> {heroe.publisher}
					</li>
					<li className="list-group-item">
						<b>First Appaearace:</b> {heroe.first_appearance}
					</li>
				</ul>

				<h5 className="mt-3">Characters</h5>
				<p>{heroe.characters}</p>

				<button className="btn btn-outline-primary">Regresar</button>
			</div>
		</div>
	);
};
