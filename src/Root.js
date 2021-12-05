import { Provider } from "react-redux";
import { createStore } from "redux";
import commentReducer from "./store/commentReducer";

const Root = ({ children, initialState }) => {
  return (
    <Provider store={createStore(commentReducer, initialState)}>
      {children}
    </Provider>
  );
};

export default Root;
