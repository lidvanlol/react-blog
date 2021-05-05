import {
  GET_BLOG_POST_LIST,
  GET_BLOG_POST_LIST_BY_CATEGORY,
  ADD_BLOG_POST,
} from "./types";
import axios from "axios";
import url from "../../components/Http/index";

export const addBlogPost = (payload) => (dispatch) => {
  let messages_container = document.querySelector(".top_box p");
  axios
    .post(url, payload)
    .then((res) => {
      if (res.status !== 201) return;
      dispatch({
        type: ADD_BLOG_POST,
        payload: res.data,
      });
    })
    .then(() => dispatch(getBlogPostList()))
    .then(
      () =>
        (messages_container.innerHTML = `A blog post with title: <b>${payload.title}</b> has been added.`)
    )
    .catch((err) => console.log(err));
};

export const getBlogPostList = () => (dispatch) => {
  axios
    .get(url)
    .then((res) => {
      if (res.status !== 200) return;
      dispatch({
        type: GET_BLOG_POST_LIST,
        payload: res.data.resultData,
      });
    })
    .catch((err) => console.log(err));
};

export const getBlogPostListByCategory = (categoryId) => (dispatch) => {
  let messages_container = document.querySelector(".top_box p");
  axios
    .get(`${url}/GetPostByCategory?categoryId=${categoryId}`)
    .then((res) => {
      dispatch({
        type: GET_BLOG_POST_LIST_BY_CATEGORY,
        payload: res.data.resultData,
      });
    })
    .then(
      () =>
        (messages_container.innerHTML = `You have listed all the posts with: <b>${categoryId}</b> categoryId`)
    )
    .catch((err) => console.log(err));
};

export const deleteBlogPost = (id) => (dispatch) => {
  let messages_container = document.querySelector(".top_box p");
  axios({
    method: "delete",
    url: `${url}/${id}`,
  })
    .then((res) => {
      if (res.status !== 204) return;
      dispatch(getBlogPostList());
    })
    .then(
      () =>
        (messages_container.innerHTML = `A blog post with id: <b>${id}</b> has been deleted.`)
    )
    .catch((err) => console.log(err));
};

export const putBlogPost = (payload) => (dispatch) => {
  let messages_container = document.querySelector(".top_box p");
  axios({
    method: "put",
    url: `${url}/${payload.id}`,
    data: payload,
  })
    .then((res) => {
      if (res.status !== 204) return;
      dispatch(getBlogPostList());
    })
    .then(
      () =>
        (messages_container.innerHTML = `A blog post with title: <b>${payload.title}</b> has been updated.`)
    )
    .catch((err) => console.log(err));
};
