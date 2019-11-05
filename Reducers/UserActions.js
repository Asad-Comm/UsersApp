import { GET_USERS } from './Types';



export const fetch_data = (new_update) => {

    console.log('actionnn log', new_update)
  
  
    return {
      type:GET_USERS,
      data: new_update
    }
  
  }


  export const search_list = (text) => {
    //   console.log("knkn",text)
      
      return {
          type:'Search',
          text : text
      }
  }

  export const view_profile = (profile_data) => {
      return {
          type : 'Profile',
          profile : profile_data
      }
  }