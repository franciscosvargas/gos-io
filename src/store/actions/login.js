export const loginRequest = (username, password) => ({
    type: 'LOGIN_REQUEST',
    payload: {
        username,
        password
    }
})

export const loginSuccess = (userId, name, token) => ({
    type: 'LOGIN_SUCCESS',
    payload: {
        userId, 
        name, 
        token
    }
})

export const loginFailure = () => ({
    type: 'LOGIN_FAILURE',
})

export const logout = () => ({
    type: 'LOGOUT',
})