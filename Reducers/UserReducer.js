import { GET_USERS } from './Types';


INITIAL_STATE = {
    users_list: null,
    searchText: '',
    user_profile: {
        profile : 'as'
    },
    item : []

}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case GET_USERS:
            console.log('Reducers data:', action.data)

            return ({ ...state, users_list: action.data })

        case 'Search':
            console.log('rdr', action.text)
            const newData = state.users_list.filter(item => {
                const name = item.login
                if( name.includes(action.text) ){
                    console.log('ive got it' , item)
                    return({...state , item : [...state.item,  item]})
                    
                }
                
            })
            return({...state , users_list : newData})
            

        case 'Profile':
            
            console.log('my profile', action.profile)

            return({...state , user_profile : action.profile})
            




        default:
            return { ...state };
    }
}