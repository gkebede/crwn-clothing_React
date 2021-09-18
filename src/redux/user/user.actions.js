 import {UserActionTypes} from './user.types'
 export const setUserAction = user => {
    return {

        type: UserActionTypes.SET_CURRENT_USER,
        payload:user
    }
}
