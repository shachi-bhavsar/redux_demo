
let nextItemId = 0
export const addInList = (desc) => {
    return {
        type : 'ADD_IN_LIST',
        id : nextItemId++,
        desc : desc,  
        OutOfStock : false 
    }
}
export const changeStatus = (id) => {
    return {
        type : 'CHANGE_STATUS',
        id : id
    }
}
export const setAvailibilityFilter = (filter) => {
    return {
        type : 'SET_AVAILIBILITY_FILTER',
        filter : filter
    }
}

