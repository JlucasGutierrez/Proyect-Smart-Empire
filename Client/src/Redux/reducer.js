import {
    GET_ALL_PHONES,
} from "./actions";

const initialState ={
    phone: [],
    phonesCopy: [],
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_PHONES:
            return {...state, phonesCopy: action.payload, phones: action.payload};
    }
};

export default rootReducer;