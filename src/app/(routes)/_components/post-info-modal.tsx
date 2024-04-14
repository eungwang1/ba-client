import { Collapse, Modal, ModalProps, theme } from "antd";
import React from "react";
import PostSpec from "./post-spec";

interface PostInfoModalProps extends Omit<ModalProps, "children"> {
  url: string;
}

const PostInfoModal: React.FC<PostInfoModalProps> = (props) => {
  const { url, ...modalProps } = props;
  return (
    <Modal
      className="post-info-modal"
      {...modalProps}
      width="100vw"
      style={{
        height: "100vh",
      }}
      footer={null}
    >
      <div className="w-full h-full relative ">
        <iframe src={url} className="w-full h-full" />
        <div
          className="absolute bottom-0 right-0  bg-white
             shadow-md rounded-lg z-50 shadow-[rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;]
        "
        >
          <Collapse
            size="small"
            defaultActiveKey={["postInfo"]}
            items={[
              {
                key: "postInfo",
                label: "포스트 정보",
                children: <PostSpec />,
              },
            ]}
          />
        </div>
      </div>
    </Modal>
  );
};
export default PostInfoModal;
