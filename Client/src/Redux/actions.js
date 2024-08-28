import axios from "axios";

export const GET_ALL_PHONES = 'GET_ALL_PHONES';

export const get_all_phones = () => {
    return async (dispatch) => {
        const apiData = await axios.get("http://localhost:3001/phone");

        const phones = apiData.data;
        dispatch({type: GET_ALL_PHONES, payload: phones})
    };
};
