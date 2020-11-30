const initialState = {
    name:'',
    token: '123456',
    id: '',
    email: '',
    avatar: ''
}

export default (state = initialState, action)=>{

    switch(action.type){
        case 'SET_NAME':
            return {...state,name:action.payload.name}
        break
    }

    return state
}