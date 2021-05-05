import React from "react";
import Placeholder80 from "../images/Placeholder80";
import Placeholder100 from "../images/Placeholder100";
import Button from "../SharedComponents/Button";
import moment from "moment";
import {
  deleteBlogPost,
  putBlogPost,
} from "../../redux/actions/BlogPostActions";
import { connect } from "react-redux";
function BlogPost(props) {
  const { id, label, text, createdAt, openDialog, deletePost } = props;

  const date = moment(createdAt).format("YYYY-MM-DD");
  const time = moment(createdAt).format("HH:MM");

  return (
    <section className="BlogPost">
      <div className="top">
        <Placeholder80 />
        <div className="top_top">
          <h2>{label}</h2>
          <h6>
            Posted date:{date} at {time} by Some person {id}
          </h6>
        </div>
        <div className="break"></div>
        <div className="top_midle">{text}</div>
        <div className="top_right">
          <Button click={() => openDialog(id)} label="Edit" />
          <Button click={deletePost} label="Delete" />
        </div>
      </div>
      <div className="bottom">
        <Placeholder100 />
        <Placeholder100 />
        <Placeholder100 />
      </div>
    </section>
  );
}

const MapDispatchToProps = (dispatch) => {
  return {
    deleteBlogPost: (id) => {
      dispatch(deleteBlogPost(id));
    },
    putBlogPost: (payload) => {
      dispatch(putBlogPost(payload));
    },
  };
};

export default connect(null, MapDispatchToProps)(BlogPost);
