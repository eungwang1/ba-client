import React from "react";

interface PostSpecProps {}

const PostSpec: React.FC<PostSpecProps> = () => {
  return (
    <div className="flex-col gap-2">
      <div>글자수: 999999</div>
      <div>댓글수: 999999</div>
      <div>좋아요수: 999999</div>
    </div>
  );
};

export default PostSpec;
