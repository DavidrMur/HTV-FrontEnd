import * as actionTypes from '../actions/actionTypes';

const initialState = {
    location: '',
    parkingOptions: [],
    address: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;    
    }
}

export default reducer;