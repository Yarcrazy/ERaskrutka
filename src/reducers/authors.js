import {AUTHORS_LOAD} from 'actions/authors';

// const dataBackend = {
//     '1': {
//         'name': 'King',
//         'books': [
//             {'title': 'A',},
//             {'title': 'B',},
//             {'title': 'C',},
//         ],
//     },
//     '2': {
//         'name': 'Smith',
//         'books': [
//             {'title': 'D',},
//             {'title': 'E',},
//         ],
//     },
//     '3': {
//         'name': 'Johnson',
//         'books': [
//             {'title': 'F',},
//         ],
//     },
// };

const initialState = {
    loading: false,
    entries: {},
};

export const authorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHORS_LOAD:
            return {
                ...state,
                entries: action.payload,
            };

        default:
            return state;
    }
}