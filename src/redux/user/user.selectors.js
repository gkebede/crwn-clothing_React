import { createSelector } from "reselect";

// 3 from the bottom up  3,2,1
const selectUser = state => state.user;

// 2
export const  selectCurrentUser = createSelector(
    [selectUser], 
    (user) => user.currentUser
)

 