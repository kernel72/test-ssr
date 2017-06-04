/**
 * Created by kernel-72 on 04.06.17.
 */

import {combineReducers} from 'redux'

function page(state={isLoading:false, data:null, url: null}, action){
    switch (action.type){
        case "LOAD":
            return {
                isLoading: true,
                url: action.url
            };
            break;
        case "LOAD_COMPLETE":
            return {
                isLoading: false,
                url: action.url,
                data: action.data
            };
        default:
            return state;
    }
}

export default combineReducers({
    page
})
