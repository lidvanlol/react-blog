import React, { useState, useEffect } from "react";
import "./style.scss";
import Navbar from "../Navbar";
import CategoryMenu from "../CategoryMenu";
import Top from "../Top";
import { connect } from "react-redux";
import {
  getBlogPostList,
  deleteBlogPost,
} from "../../redux/actions/BlogPostActions";
import BlogPost from "./BlogPost";
import Modal from "../SharedComponents/Modal";

function Blog(props) {
  const [visible, setVisible] = useState(false);
  const [ID, setID] = useState("");
  const [labels, setLabels] = useState({
    title: "",
    text: "",
  });
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const { blogPosts, getBlogPostList, deleteBlogPost } = props;

  useEffect(() => {
    getBlogPostList();
  }, []);

  const deleteData = (id) => {
    deleteBlogPost(id);
  };

  const openDialog = (id) => {
    setID(id);
    setVisible(true);
  };

  const closeDialog = () => {
    setLabels({
      title: "",
      text: "",
    });
    setID("");
    setVisible(false);
  };

  const searchInputHandler = (input) => {
    setSearchInput(input);
  };

  useEffect(() => {
    const res = blogPosts.filter((post) => post.title.includes(searchInput));
    setSearchResult(res);
  }, [searchInput]);

  return (
    <div className="Blog">
      <Navbar
        searchInput={searchInput}
        searchInputHandler={searchInputHandler}
      />
      <main>
        <div className="container-fluid">
          <Top click={() => openDialog()} />
          <div className="main_content">
            <CategoryMenu />
            <div className="post_box">
              {(searchResult.length ? searchResult : blogPosts).map((post) => {
                return (
                  <BlogPost
                    key={post.id}
                    label={post.title}
                    deletePost={() => deleteData(post.id)}
                    createdAt={post.createdAt}
                    text={post.text}
                    id={post.id}
                    openDialog={openDialog}
                    closeDialog={closeDialog}
                  />
                );
              })}
            </div>
          </div>
          <Modal
            ID={ID}
            labels={labels}
            setLabels={setLabels}
            visible={visible}
            closeDialog={closeDialog}
          />
        </div>
      </main>
    </div>
  );
}

const MapStateToProps = (state) => {
  return {
    blogPosts: state.blogPosts.resultData,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    getBlogPostList: (payload) => {
      dispatch(getBlogPostList(payload));
    },
    deleteBlogPost: (id) => {
      dispatch(deleteBlogPost(id));
    },
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(Blog);
