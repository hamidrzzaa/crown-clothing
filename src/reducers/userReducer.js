import { setCurrentUser } from "../actions/actionTypes";
const initialState = { currentUser: null };
export default (preState = initialState, action) => {
  switch (action.type) {
    case setCurrentUser:
      return { ...preState, currentUser: action.payload };
    default:
      return preState;
  }
};
