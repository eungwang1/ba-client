import React, { useState } from "react";
import PostInfoModal from "./post-info-modal";
import { Button } from "antd";

interface PostAnalysisButtonProps {
  postId: string;
  blogId: string;
}

const PostAnalysisButton: React.FC<PostAnalysisButtonProps> = ({
  postId,
  blogId,
}) => {
  console.log(postId, blogId);
  const [postInfoModalOpen, setPostInfoModalOpen] = useState(false);
  return (
    <div>
      <Button
        onClick={() => {
          setPostInfoModalOpen(true);
        }}
      >
        분석하기
      </Button>
      {postInfoModalOpen && (
        <PostInfoModal
          postId={postId}
          blogId={blogId}
          open={postInfoModalOpen}
          onCancel={() => setPostInfoModalOpen(false)}
        />
      )}
    </div>
  );
};

export default PostAnalysisButton;
