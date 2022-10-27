import './App.css';
import Searcher from './components/Searcher';
import {Col} from "antd"
import PokemonCard from './components/PokemonCard';
import PokemonList from './components/PokemonList';
import { useEffect, useState } from 'react';
import { getPokemon, getPokemonDetailsByUrlApi } from './api';
import { useSelector,useDispatch } from 'react-redux';
import { setPokemons} from './actions';

function App() {
  const pokemons = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(pokemons)

  const [state,setState] =useState()
  const [mainState,setMaindate]=useState([])

  useEffect(() => {
    (async () => {
      await poke();
    })();
  }, []); 

  const poke =async() =>{
      try {
        const response = await getPokemon()

        setState(response)

        const poArray = []
        
        for await(const pokede of response){
            const detail =  await getPokemonDetailsByUrlApi(pokede.url)
            poArray.push({
              image:detail.sprites.front_default
            })
        }
       dispatch(setPokemons(poArray))  
      } catch (error) {
        console.log(error)
      }
  } 



  return (
    <div className="App">
        <Col span={9} offset={8} >
            <Searcher />
        </Col>
        
    </div>
  );
}

export default App