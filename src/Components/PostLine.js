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
  console.log(posts[2]?.text);
  return (
    <Container className="my-3">
      {posts.map((post, i) => (
        <Container key={i} className="my-5 bg-light border p-5">
          <Row className="h4 justify-content-center text-center">
            {post.title}
          </Row>
          <p />
          <Row className="justify-content-left text-left">{post.text}</Row>
          <p />
          <Row className="justify-content-end text-right">{`Дата:${Intl.DateTimeFormat(
            "ru"
          ).format(new Date(post.date))}`}</Row>
          <Row className="justify-content-end text-right">{`Автор:${post.author.displayName}`}</Row>
        </Container>
      ))}
    </Container>
  );
}
