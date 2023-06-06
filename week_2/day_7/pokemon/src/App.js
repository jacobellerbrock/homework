import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from "react";
import Table from "./components/Table";
import {Pokemon} from "./models/pokemon";

function App() {
    const [pokemonList, setPokemonList] = useState([]);

    const url = 'https://pokeapi.co/api/v2/pokemon';

    async function fetchPokemon() {
        // let pokemonList = [];
        for (let i = 0; i < 100; i++) {
            const res = await fetch(url + `/${i+1}/`);
            const data = await res.json();
            const newpokemon = (new Pokemon(data.abilities, data.base_experience, data.forms, data.game_indices, data.height, data.held_items, data.id, data.is_default, data.location_area_encounters, data.moves, data.name, data.order, data.past_types, data.species, data.sprites, data.stats, data.types, data.weight));
            pokemonList.push(newpokemon);
            setPokemonList(pokemonList);
            // console.log(pokemonList);
            console.log(`Loaded ${pokemonList[i]}, ID ${pokemonList[i].id}`);
        }
    }

  return (
    <div className={'text-center mt-5'}>
        <h1>Pokemon</h1>
        <button className={"btn btn-primary me-1"} onClick={fetchPokemon}>Fetch Pokemon</button>
        <Table pokemonList={pokemonList}></Table>
    </div>
  );
}

export default App;
