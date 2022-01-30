import { PlusCircleFilled } from "@ant-design/icons/lib/icons";
import { Button, Form, Input, Modal } from "antd";
import { useForm } from "antd/lib/form/Form";
import TextArea from "antd/lib/input/TextArea";
import { useState } from "react";

import styles from "./ArticleInput.module.css";

const PostInput = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [paragraphs, setParagraphs] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = useForm();

  function showModal() {
    setIsModalVisible(true);
  }

  function hideModal() {
    setIsModalVisible(false);
  }

  function handleSubmit() {
    if (title === "" || paragraphs === "") return form.submit();

    const newPost = {
      title,
      paragraphs,
      comments: [],
    };

    addPost(newPost);

    hideModal();
    form.resetFields();
    setTitle("");
    setParagraphs("");
  }

  return (
    <>
      <Button
        className={styles.addPostButton}
        icon={<PlusCircleFilled />}
        size="large"
        shape="round"
        type="primary"
        onClick={showModal}
      >
        Create Post
      </Button>
      <Modal
        width="50vw"
        title="New Post"
        visible={isModalVisible}
        onOk={handleSubmit}
        onCancel={hideModal}
        okText="Add Post"
        centered
      >
        <Form wrapperCol={{ span: 24 }} form={form}>
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please give your post a title!" }]}
          >
            <Input onChange={e => setTitle(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Content"
            name="paragraphs"
            rules={[{ required: true, message: "Post cannot be empty!" }]}
          >
            <TextArea
              rows={10}
              placeholder="Write a new post..."
              onChange={e => setParagraphs(e.target.value)}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default PostInput;
