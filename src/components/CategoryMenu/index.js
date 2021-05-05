import React from "react";
import "./style.scss";
import { connect } from "react-redux";
import { getBlogPostListByCategory } from "../../redux/actions/BlogPostActions";


function CategoryMenu(props) {
  const { getBlogPostListByCategory } = props;
 
  
  return (
    <div className="CategoryMenu">
      <h3>Blog categories</h3>
      <div className="category_box">
        <p onClick={() => getBlogPostListByCategory(1)}>Category 1</p>
        <p onClick={() => getBlogPostListByCategory(2)}>Category 2</p>
        <p onClick={() => getBlogPostListByCategory(3)}>Category 3</p>
      </div>
    </div>
  );
}

const MapDispatchToProps = (dispatch) => {
  return {
    getBlogPostListByCategory: (payload) => {
      dispatch(getBlogPostListByCategory(payload));
    },
  };
};

export default connect(null, MapDispatchToProps)(CategoryMenu);
