const INITIAL_STATE = {
    language: 'pt-br'
};

// Reducer
export default function translation(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CHANGE_LANGUAGE':
            return { ...state, language: action.payload.language};
            break;
        default:
            return state;
    }
}