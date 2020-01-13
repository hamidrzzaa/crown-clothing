import { setCurrentUser } from "./actionTypes";
export const setUser = user => {
  return {
    type: setCurrentUser,
    payload: user
  };
};
