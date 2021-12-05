import { createStore } from "redux";
import commentReducer from "./commentReducer";


const store = createStore(commentReducer);
export default store;
