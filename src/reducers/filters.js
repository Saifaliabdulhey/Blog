

const filterReducerDefaultState = { 
    text: ""
};

const filterReducers = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text 
            }
            default:{
                return state
            }
    }
}

export default filterReducers