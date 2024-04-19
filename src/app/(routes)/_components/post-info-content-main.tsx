import React, { useState } from "react";

interface PostInfoContentMainProps {
  text: string;
}

const PostInfoContentMain: React.FC<PostInfoContentMainProps> = ({ text }) => {
  const [textViewLimit, setTextViewLimit] = useState<number | null>(100);
  return (
    <div className="break-all whitespace-pre-wrap">
      {textViewLimit ? text.slice(0, textViewLimit) + "..." : text}
      <button
        className="text-blue-500 underline"
        onClick={() => setTextViewLimit(textViewLimit ? null : 100)}
      >
        {textViewLimit ? "더보기" : "접기"}
      </button>
    </div>
  );
};

export default PostInfoContentMain;
