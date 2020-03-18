import { CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, DELETE_STREAM, EDIT_STREAM } from '../actions/types';
import _ from 'lodash';

const initialState = {
    "streams": [
        {
            "title": "Coding",
            "description": "Live coding channedl",
            "id": 1
        },
        {
            "title": "Latest youtube",
            "description": "A great youtube video",
            "id": 2
        },
        {
            "title": "The Future",
            "description": "This is an stream about my future goals and ambitions.",
            "userId": "106020900133971725356",
            "id": 3
        },
        {
            "title": "Refactoring test",
            "description": "Testing after the refactor of StreamCreate",
            "userId": "106020900133971725356",
            "id": 5
        },
        {
            "title": "My great stream",
            "description": "test stream",
            "userId": "118400355051207975323",
            "id": 6
        },
        {
            "title": "My second great stream",
            "description": "streaming cards",
            "userId": "118400355051207975323",
            "id": 7
        }
        ]
}

export default (state=initialState, action) => {
    switch(action.type) {
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id')};
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}