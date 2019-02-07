const initState = {
    authError: null
}

const authReducer =  (state=initState,action) =>{
    switch(action.type){
        case 'LOGIN_ERROR':
        console.log('failed')
        return {...state,
        authError:'Login failed'}
        case 'LOGIN_SUCCESS':
            console.log('success')
            return {...state,
                authError:null}
        case 'SIGNED_OUT':
            console.log('signed out')
            return state
        case 'SIGNUP_SUCCESS':
            console.log('signed up')
            return {...state,
                authError:null}
        case 'SIGNUP_ERROR':
            console.log('signup failed')
            return {...state,
            authError: action.err.message}
                        
        default:
             return state

    }
    

}
export default  authReducer