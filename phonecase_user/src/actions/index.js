
export const login = () => ({
    type: 'LOGIN'
});
export const signUp = () => ({
    type: 'SIGN_UP'
});
export const redirectHome = (status,user) => ({
    type:'REDIRECT_HOME',
    status:status,
    user:user
});
export const dispatchError = (message) => ({
    type:"SIGN_UP_FAILED",
    message:message,
});

export const logout = () => ({
    type: 'LOGOUT'
});
export const invalidUser = () => ({
    type: 'invalidUser'
});

export const pageNavigation = (type) => ({
    type,
});

