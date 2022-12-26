import { heroes } from '../data/heroes';

export const heroesBypublisher = (publisher) => {
	//Los Helpers son simplementes funciones que ejecutan alguna funcion en espesifico las separamos cuando queremos para no tener tantas lineas de codigo en nuestros componentes
	return heroes.filter((heroe) => heroe.publisher === publisher);
};
