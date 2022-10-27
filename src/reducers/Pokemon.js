import { SET_POKEMONS } from "../actions/types"

const  initialState ={
    cart:[]
}

export  const pokemonsReducers =(state =initialState,action) =>{
    switch (action.type){
        case SET_POKEMONS:
            return { ...state,
                cart:action.action 
             };
    default:
        return state
    }
}