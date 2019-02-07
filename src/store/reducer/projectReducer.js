const initState = {
    projects :[{
        id:1,title:'bla bla bla'

    },
   { id:2,title:'bla bla bla'}]
}

const projectReducer =  (state=initState,action) =>{

    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created',action.project)
            return state
        case 'CREATE_PROJECT_ERROR':
            console.log('created ERROR',action.err)
            return state
        default:
            return state

    }
   // return state

}
export default  projectReducer