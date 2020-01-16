import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
import directoryReducer from "./directoryReducer";
import shopDataReducer from "./shopDataReducer";
const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cart"]
};
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  sections: directoryReducer,
  shopData: shopDataReducer
});
export default persistReducer(persistConfig, rootReducer);
