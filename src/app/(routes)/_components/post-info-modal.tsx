import {
  Collapse,
  Descriptions,
  DescriptionsProps,
  Modal,
  ModalProps,
  theme,
} from "antd";
import React from "react";
import PostInfoContent from "./post-info-content";

interface PostInfoModalProps extends Omit<ModalProps, "children"> {}

const PostInfoModal: React.FC<PostInfoModalProps> = (props) => {
  const { ...modalProps } = props;

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
      <PostInfoContent />
    </Modal>
  );
};
export default PostInfoModal;
