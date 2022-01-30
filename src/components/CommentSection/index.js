import { Form, Input } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useAuth0 } from "@auth0/auth0-react";

import Comment from "../Comment";
import styles from "./CommentSection.module.css";

const CommentSection = ({ comments, addComment }) => {
  const { user } = useAuth0();

  const [commentForm] = useForm();

  function handleSubmit(values) {
    const newComment = {
      name: user.name.split(" ")[0],
      text: values.comment,
    };

    addComment(newComment);

    commentForm.resetFields();
  }

  return (
    <section className={styles.commentSection}>
      <h3 className={styles.title}>Comments</h3>
      <ul className={styles.comments}>
        {comments.map(({ name, text }, index) => (
          <Comment key={index} author={name} text={text} />
        ))}
      </ul>

      <Form className={styles.commentForm} form={commentForm} onFinish={handleSubmit}>
        <Form.Item name="comment" rules={[{ required: true, message: "Comments can't be empty!" }]}>
          <Input size="large" placeholder="Write a comment..." />
        </Form.Item>
      </Form>
    </section>
  );
};

export default CommentSection;
