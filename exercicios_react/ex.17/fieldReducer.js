const initial_state = {value: 'Opa'}

export default function(state = initial_state, action){
    switch(action.type){
        case 'VALUE_CHANGED':
            return{
                value:action.payload
            }
        default:
            return state
    }
}