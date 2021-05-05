import React from "react";
import { connect} from "react-redux";
import { Window } from "@progress/kendo-react-dialogs";
import Button from "../Button";
import "./style.scss";
import {
  addBlogPost,
  putBlogPost,
} from "../../../redux/actions/BlogPostActions";

function Modal(props) {
  const {
    ID,
    labels,
    setLabels,
    visible,
    closeDialog,
    addBlogPost,
    putBlogPost,
  } = props;

  let categoryId = Math.floor(Math.random() * 3) + 1;

  const addBlogPostSubmit = () => {
    const payload = { ...labels, categoryId: categoryId };
    addBlogPost(payload);
    closeDialog();
  };

  const putBlogPostSubmit = (ID) => {
    const payload = { ...labels, id: ID, categoryId: categoryId }; // addBlogPost(payload);
    putBlogPost(payload);
    closeDialog();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ID ? putBlogPostSubmit(Number(ID)) : addBlogPostSubmit();
  };

  const handleChange = (e) => {
    setLabels({ ...labels, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {visible && (
        <Window
          className="ModalWindow"
          title={"Add/Edit blog post"}
          onClose={closeDialog}
          initialHeight={370}
        >
          <form onSubmit={handleSubmit} className="k-form">
            <fieldset>
              <label className="k-form-field">
                <span>Title</span>
                <input
                  name="title"
                  onChange={handleChange}
                  value={labels.title}
                  className="kk-textbox"
                  type="text"
                  required
                  placeholder="Title of the post"
                />
              </label>
              <label className="k-form-field">
                <span>Text</span>
                <textarea
                  name="text"
                  onChange={handleChange}
                  value={labels.text}
                  required
                  className="kk-textarea"
                  placeholder="Text of the post"
                ></textarea>
              </label>
            </fieldset>

            <div className="text-right">
              <Button type="submit" label="Post" />
              <Button label="Cancel" click={closeDialog} />
            </div>
          </form>
        </Window>
      )}
    </div>
  );
}

const MapDispatchToProps = (dispatch) => {
  return {
    addBlogPost: (payload) => {
      dispatch(addBlogPost(payload));
    },
    putBlogPost: (payload) => {
      dispatch(putBlogPost(payload));
    },
  };
};

export default connect(null, MapDispatchToProps)(Modal);
