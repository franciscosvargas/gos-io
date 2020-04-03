const INITIAL_STATE = {
	menu: false
};

// Reducer
export default function login(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'MENU_STATUS':
            return { ...state, menu: !state.menu };
            break;
        default:
            return state;
    }
}