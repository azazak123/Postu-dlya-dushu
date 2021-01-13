import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";

import firebase from "../firebase";

export default function PostLine() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    firebase
      .database()
      .ref("/posts")
      .orderByChild("date")
      .once("value")
      .then((snapshot) => {
        const postsId = snapshot.val();
        const posts = [];
        for (let i in postsId) {
          posts.push(postsId[i]);
        }
        setPosts(posts.reverse());
      });
  }, []);
  return (
    <Container className="my-3 justify-content-center text-center">
      {posts.map((post) => (
        <Container className="my-5 bg-light border p-5">
          <Row className="h4 justify-content-center text-center">
            {post.title}
          </Row>
          <Row className="justify-content-center text-center">{post.text}</Row>
          <Row className="justify-content-center text-center">{`Дата:${new Date(
            post.date
          )}`}</Row>
          <Row className="justify-content-center text-center">{`Автор:${post.author.displayName}`}</Row>
        </Container>
      ))}
    </Container>
  );
}
