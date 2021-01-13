import { Redirect } from "@reach/router";
import { Alert, Modal } from "react-bootstrap";
import { useState } from "react";

import { useSelector } from "react-redux";

import firebase from "../firebase";

export default function PostCreator() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [send, setSend] = useState(false);
  const [show, setShow] = useState(false);
  const user = useSelector((state) => state.user);

  const sendPost = () => {
    if (!title || !text) {
      setShow(true);
      return;
    }
    const post = {
      title: title,
      text: text,
      author: user,
      likeCount: 0,
      date: Date.now(),
    };
    const newPostKey = firebase.database().ref().child("posts").push().key;
    firebase
      .database()
      .ref("posts/" + newPostKey)
      .set(post);
    setSend(true);
  };

  return (
    <div className="m-4 p-4 bg-light border">
      {send ? <Redirect to="/profile" noThrow={true} /> : ""}
      {!user ? <Redirect to="/login" noThrow={true} /> : ""}
      <Modal show={show} animation={false} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Введіть усі неодхідні дані</Modal.Title>
        </Modal.Header>{" "}
      </Modal>
      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg mb-3 h4"
          placeholder="Введіть назву..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="form-control mb-3"
          rows="20"
          placeholder="Введіть текст..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn btn-primary btn-block btn-lg" onClick={sendPost}>
          Опублікувати
        </button>
      </div>
    </div>
  );
}
