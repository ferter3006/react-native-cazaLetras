const initialState = {
    username: '',
    actualStage: 1,
}

export default function UserReducer(state = initialState, action) {
    switch (action.type) {
        case 'STAGE_INCREMENT':
            return {
                ...state,
                actualStage: state.actualStage + 1,
            };

        case 'SET_NICKNAME':
            return {
                ...state,
                username: action.payload
            }

        default:
            return state;
    }
}