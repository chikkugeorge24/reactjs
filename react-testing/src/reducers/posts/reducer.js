import { types } from "../../actions/types";

const { GET_POSTS } = types;

const reducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS:
      return payload;
    default:
      return state;
  }
};

export default reducer;
