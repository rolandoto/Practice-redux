import React from "react"
import PokemonCard from "./PokemonCard"

const PokemonList =({pokemons}) =>{
    console.log(pokemons)
    return (
        <div className="pokemonList" >
            {pokemons.map(index  =>( 
                <PokemonCard image={index.image} />
            ))}
        </div>  
    )
}

PokemonList.defaultProps ={
    pokemons:Array(10).fill("")
}

export default PokemonList