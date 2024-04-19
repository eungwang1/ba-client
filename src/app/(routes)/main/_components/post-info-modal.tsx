import { Modal, ModalProps } from "antd";
import React from "react";
import PostInfoContent from "./post-info-content";

interface PostInfoModalProps extends Omit<ModalProps, "children"> {
  postId: string;
  blogId: string;
}

const PostInfoModal: React.FC<PostInfoModalProps> = (props) => {
  const { postId, blogId, ...modalProps } = props;

  return (
    <Modal
      className="post-info-modal"
      {...modalProps}
      width="90vw"
      style={{
        maxWidth: "1280px",
      }}
      footer={null}
    >
      <PostInfoContent postId={postId} blogId={blogId} />
    </Modal>
  );
};
export default PostInfoModal;
