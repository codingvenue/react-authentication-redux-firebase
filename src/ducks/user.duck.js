export const SHOW_CURRENT_USER_REQUEST = 'app/user/SHOW_CURRENT_USER_REQUEST';
export const SHOW_CURRENT_USER_SUCCESS = 'app/user/SHOW_CURRENT_USER_SUCCESS';

const initialState = {
    currentUser: null
};

export default function userReducer(state = initialState, action = {}) {
    const { type, payload } = action;
    switch (type) {
        case SHOW_CURRENT_USER_REQUEST:
            return state;
        case SHOW_CURRENT_USER_SUCCESS:
            return { ...state, currentUser: payload };
        default:
            return state;
    }
};

export const showCurrentUserRequest = () => ({ type: SHOW_CURRENT_USER_REQUEST });
export const showCurrentUserSuccess = user => ({ type: SHOW_CURRENT_USER_SUCCESS, payload: user });

export const fetchCurrentUser = () => (dispatch, getState, firebase) => {
    dispatch(showCurrentUserRequest());
    const { isAuthenticated } = getState().auth;

    if (!isAuthenticated) {
        dispatch(showCurrentUserSuccess(null));
        return Promise.resolve({});
    }

    const currentUser = firebase.auth().currentUser;
    return Promise.resolve(dispatch(showCurrentUserSuccess(currentUser)));
};