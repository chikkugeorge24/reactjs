import axios from "axios";
import { types } from "./types";

const { GET_POSTS } = types;

export const fetchPosts = () => {
  return (dispatch) => {
    return axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((response) => {
        const { data } = response;
        if (data) {
          dispatch({
            type: GET_POSTS,
            payload: data,
          });
        }
      })
      .catch((err) => {
        throw Error(err);
      });
  };
};
