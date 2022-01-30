import "antd/dist/antd.css";
import { useState } from "react";
import { Button, Row, Col } from "antd";
import { LikeFilled, DislikeFilled, DeleteFilled } from "@ant-design/icons";
import CommentSection from "../CommentSection";

import styles from "./Article.module.css";
import Modal from "antd/lib/modal/Modal";

const Article = ({ title, text, defaultComments, deletePost, index }) => {
  const [comments, setComments] = useState(defaultComments);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  function addComment(newComment) {
    setComments([...comments, newComment]);
  }

  function toggleLiked() {
    setIsLiked(!isLiked);
  }

  function showModal() {
    setIsModalVisible(true);
  }

  function hideModal() {
    setIsModalVisible(false);
  }

  function handleOk() {
    hideModal();
    deletePost(index);
  }

  return (
    <Row className={styles.article}>
      <Col span={14}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.body}>{text}</p>
        <Button
          className={styles.likeButton}
          onClick={toggleLiked}
          type={isLiked ? "danger" : "primary"}
          shape="round"
        >
          {isLiked ? <DislikeFilled /> : <LikeFilled />}
        </Button>
      </Col>
      <Col span={10}>
        <Button
          className={styles.deleteButton}
          type="danger"
          shape="circle"
          icon={<DeleteFilled />}
          onClick={showModal}
        />
        <CommentSection comments={comments} addComment={addComment} />
      </Col>
      <Modal
        title="Delete Post"
        visible={isModalVisible}
        okText="Yes, I'm sure!"
        okButtonProps={{ type: "danger" }}
        onOk={handleOk}
        onCancel={hideModal}
        centered
      >
        <p>Are you sure you want to delete this post?</p>
      </Modal>
    </Row>
  );
};

export default Article;
