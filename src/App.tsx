import React, {useEffect, useLayoutEffect, useState} from 'react';
import './App.css';
import {ButtonGroup} from './components/button-group/ButtonGroup';
import {PokemonCard} from './components/pokemon-card/PokemonCard';
import {Box} from './components/Box/Box';

let counter = 0;

function App() {
  const [id, setId] = useState(1);
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  console.log('render', ++counter);

  useEffect(() => {
    const handleFetchPokemon = async () => {
      // setPokemon(null);
      setIsLoading(true);

      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const json = await res.json();
      setPokemon(json);
      setIsLoading(false);
    };

    handleFetchPokemon();
  }, [id]);

  const onClick = () => {
    const handleFetchPokemon = async () => {
      // setPokemon(null);
      setIsLoading(true);

      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/13`);
      const json = await res.json();
      setPokemon(json);
      setIsLoading(false);
    };

    handleFetchPokemon();
  };

  return (
    <div className="App">
      <Box>
        <PokemonCard
          isLoading={isLoading}
          data={pokemon}
        />
        <ButtonGroup handleSetId={setId} />
        <button onClick={onClick}>FETCH N 13</button>
      </Box>
    </div>
  );
}

export default App;
