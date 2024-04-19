import { Input, message } from "antd";
import React from "react";
import useBlogPostDetail from "../_lib/hooks/useBlogPostDetail";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { extractBlogIdAndPostId } from "../_lib/utils";
import PostInfoContent from "./post-info-content";

interface PostAnalysisTabProps {}

const PostAnalysisTab: React.FC<PostAnalysisTabProps> = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const params = new URLSearchParams(searchParams.toString());
  const blogId = searchParams.get("bid") || null;
  const postId = searchParams.get("pid") || null;
  const { isLoading } = useBlogPostDetail({
    blogId,
    postId,
  });
  return (
    <div>
      <Input.Search
        placeholder="포스트 주소를 입력해주세요."
        enterButton="분석"
        size="large"
        loading={isLoading}
        onSearch={(value) => {
          const result = extractBlogIdAndPostId(value);
          if (!result) {
            return message.warning(
              "올바른 블로그 주소 또는 아이디를 입력해주세요."
            );
          }
          const { blogId, postId } = result;
          params.set("bid", blogId);
          params.set("pid", postId);
          router.push(`${pathname}?${params.toString()}`);
        }}
      />
      {blogId && postId && (
        <div className="mt-6">
          <PostInfoContent blogId={blogId} postId={postId} />
        </div>
      )}
    </div>
  );
};

export default PostAnalysisTab;
