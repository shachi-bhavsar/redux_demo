import { combineReducers } from 'redux'

const list = (state = [], action) => {
    switch (action.type) {
        case 'ADD_IN_LIST':
            return [
                ...state,
                { 
                    id : action.id, 
                    desc : action.desc, 
                    OutOfStock : false
                }
            ];
        case 'CHANGE_STATUS':
            return state.map (
                (list.id === action.id) 
                ? {...list, OutOfStock : ! list.OutOfStock}
                : list
            )
        case 'SET_AVAILIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}
export default list