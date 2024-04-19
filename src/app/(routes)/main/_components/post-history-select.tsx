import { Select } from "antd";
import React, { useEffect, useState } from "react";
import { LocalStorage } from "@/app/_lib/utils/localStorage";
import { POST_DETAIL_HISTORY_KEY } from "../_lib/constants/storageKey";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SelectLabelWithRemoveButton from "@/app/_components/select/select-label-with-remove-button";
import useBlogPostDetail from "../_lib/hooks/useBlogPostDetail";

interface PostDetailKey {
  // blogId@postId
  value: string | null;
  title: string;
}

interface PostHistorySelectProps {}

const PostHistorySelect: React.FC<PostHistorySelectProps> = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const storage = new LocalStorage();
  const params = new URLSearchParams(searchParams.toString());
  const blogId = searchParams.get("bid") || null;
  const postId = searchParams.get("pid") || null;
  const { data: getPostDetail } = useBlogPostDetail({
    blogId,
    postId,
  });
  const [postHistory, setPostHistory] = useState<PostDetailKey[]>([]);
  const postKey = ({
    blogId,
    postId,
  }: {
    blogId: string | null;
    postId: string | null;
  }) => (blogId && postId ? `${blogId}@${postId}` : null);

  const handleDeleteHistory = (value: string | null) => {
    if (
      value ===
      postKey({
        blogId,
        postId,
      })
    ) {
      params.delete("bid");
      params.delete("pid");
      router.push(`${pathname}?${params.toString()}`);
    }
    const newHistory = postHistory.filter((history) => history.value !== value);
    setPostHistory(newHistory);
    storage.set(POST_DETAIL_HISTORY_KEY, newHistory);
  };

  useEffect(() => {
    const history = storage.get(POST_DETAIL_HISTORY_KEY);
    if (history) {
      setPostHistory(history);
    }
  }, []);

  useEffect(() => {
    if (getPostDetail) {
      const isExist = postHistory.some(
        (history) =>
          history.value ===
          postKey({
            blogId,
            postId,
          })
      );
      if (isExist) return;
      const uniqueHistory = [
        {
          value: postKey({
            blogId,
            postId,
          }),
          title: getPostDetail.title,
        },
        ...postHistory,
      ];
      setPostHistory(uniqueHistory);
      storage.set(POST_DETAIL_HISTORY_KEY, uniqueHistory);
    }
  }, [getPostDetail]);

  return (
    <div className="mt-3 flex gap-2">
      <Select
        placeholder="검색기록"
        size="large"
        options={postHistory.map((post) => ({
          label: (
            <SelectLabelWithRemoveButton
              label={post.title}
              onRemove={() =>
                handleDeleteHistory(
                  postKey({
                    blogId: post.value?.split("@")[0] || null,
                    postId: post.value?.split("@")[1] || null,
                  })
                )
              }
            />
          ),
          value: postKey({
            blogId: post.value?.split("@")[0] || null,
            postId: post.value?.split("@")[1] || null,
          }),
        }))}
        value={postKey({
          blogId,
          postId,
        })}
        onSelect={(value) => {
          params.set("bid", value.split("@")[0]);
          params.set("pid", value.split("@")[1]);
          router.push(`${pathname}?${params.toString()}`);
        }}
        style={{
          minWidth: 200,
        }}
      />
    </div>
  );
};

export default PostHistorySelect;
