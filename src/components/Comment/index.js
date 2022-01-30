import { useState } from "react";
import { Button } from "antd";
import { HeartFilled } from "@ant-design/icons";
import styles from "./Comment.module.css";

const Comment = ({ author, text }) => {
  const [isLiked, setIsLiked] = useState(false);

  function toggleLiked() {
    setIsLiked(!isLiked);
  }

  return (
    <div className={styles.comment}>
      <h4 className={styles.author}>{author} says:</h4>
      <p className={styles.content}>{text}</p>
      <div className={styles.likesDisplay}>
        <Button
          className={styles.likeButton}
          onClick={toggleLiked}
          type={isLiked ? "primary" : "ghost"}
          shape="circle"
        >
          <HeartFilled />
        </Button>
      </div>
    </div>
  );
};

export default Comment;
