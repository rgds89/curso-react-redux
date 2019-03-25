export function inc(){
    return {type: 'INC'}
}

export function dec(){
    return {type: 'DEC'}
}

export function mult(){
    return {type:'MULT'}
}

export function div(){
    return {type:'DIV'}
}

export function stepChanged(e){
    return{
        type:'STEP_CHANGED',
        payload: e.target.value
    }
}