import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { heroes } from '../data/heroes';

export const SearchScreen = () => {
	const [inputSearch, setInputSearch] = useState('');
	const navigate = useNavigate();

	const onInputSearch = (e) => {
		setInputSearch(e.target.value);
	};

	const onSubmitSearch = (e) => {
		e.preventDefault();

		if (inputSearch.trim().length <= 1) {
			return;
		}

		navigate(`?q=${inputSearch}`);
	};

	const heroe = heroes.filter((hero) => hero.superhero.toLocaleLowerCase().includes(inputSearch));

	console.log(heroe);

	//pagina de buscar
	return (
		<div className="px-2">
			<h1>Search</h1>
			<div className="row">
				<div className="col-5">
					<h4>Buscando</h4>
					<form onSubmit={onSubmitSearch}>
						<input
							type="text"
							placeholder="buscar Heroe"
							className="form-control"
							name="searchText"
							value={inputSearch}
							onChange={onInputSearch}
						/>
						<button className="btn btn-outline-primary mt-3">Buscar</button>
					</form>
				</div>

				<div className="col-7">
					<h4>Resultados</h4>

					{heroe.length === 0 ? (
						<div className="alert alert-danger">No se encontraron Resultados</div>
					) : (
						<div className="row row-cols-1 row-cols-md-3 g-3">
							{heroe.map((hero) => {
								return (
									<div key={hero.id}>
										<div className="card">
											<div className="no-gutters">
												<img src={hero.url} alt={hero.superhero} height={240} />
											</div>
											<div className="card-body">
												<h5 className="card-title">{hero.superhero}</h5>
												<p className="card-text">{hero.alter_ego}</p>

												{hero.alter_ego !== hero.characters ? <p>{hero.characters}</p> : ''}

												<p>
													<small className="text-muted">{hero.first_appearance}</small>
												</p>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
