import React, { useState } from 'react';
import axios from 'axios';

const Main = () => {
    let [pokelist, setPokelist] = useState([])
    const fetchPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0").then(response => {
            setPokelist(response.data.results)
        }).catch(err => {
            console.log(err);
        })
    };

    console.log(pokelist)
    return (
        <div>
            <div>
                <button onClick={fetchPokemon}>Fetch Pokemon</button>
            </div>
            <div>
                <ul>
                    {pokelist.map((pokemon) => {
                        return (
                            <li>{pokemon.name}</li>)
                    })}
                </ul>
            </div>
        </div>
    )
};

export default Main;