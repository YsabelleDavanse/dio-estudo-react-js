import { useEffect, useState } from 'react';

import Filme from '../Filme/Filme';

function ListaFilmes() {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/films')
            .then(function (response) {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(function (responseJson) {
                console.log(responseJson.results);
                setFilms(responseJson.results);
            });
    }, []);

    return (
        <div className='filmes'>
            {films.map((item) =>
                <Filme key={item.episode_id} episodio={item} />
            )}
        </div>
    );
}

export default ListaFilmes;