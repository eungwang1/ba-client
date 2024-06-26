import React, { useMemo, useState } from "react";
import useSearchAvailability from "../_lib/hooks/useSearchAvailability";
import {
  CommentOutlined,
  HeartOutlined,
  PictureOutlined,
  EditOutlined,
} from "@ant-design/icons";
import PostRankBox from "./post-rank-box";
import { Table, theme } from "antd";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { postsColumns } from "../_lib/constants/table";
import useBlogCategoryList from "../_lib/hooks/useBlogCategoryList";
import PostAnalysisButton from "./post-analysis-button";

interface PostInfoTableProps {}

const PostInfoTable: React.FC<PostInfoTableProps> = () => {
  const { useToken } = theme;
  const { token } = useToken();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const { data: categoryList, isLoading: categoryListLoading } =
    useBlogCategoryList();
  const { data: posts, isLoading: searchAvailabilityLoading } =
    useSearchAvailability();
  const blogId = searchParams.get("b");
  const formattedPosts = useMemo(
    () =>
      posts.map((post) => ({
        ...post,
        analysis: (
          <PostAnalysisButton
            postId={String(post.logNo)}
            blogId={String(blogId)}
          />
        ),
        ["co/sy/th/tl"]: (
          <div
            style={{
              width: "100%",
              display: "flex",
              gap: "5px",
            }}
          >
            <div>
              <CommentOutlined /> {post.commentCnt}
            </div>
            <div>
              <HeartOutlined /> {post.sympathyCnt}
            </div>
            <div>
              <PictureOutlined /> {post.thumbnailCount}
            </div>
            <div>
              <EditOutlined /> {post.textLength}
            </div>
          </div>
        ),
        rank: <PostRankBox logNo={String(post.logNo)} />,
        titleWithInspectMessage: (
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline hover:underline"
          >
            {post.titleWithInspectMessage}
          </a>
        ),
        isSearchAvailability: post.isSearchAvailability ? (
          <div
            style={{
              color: token.green,
            }}
          >
            ●
          </div>
        ) : (
          <div
            style={{
              color: token.red,
            }}
          >
            ✖
          </div>
        ),
      })),
    [posts]
  );

  return (
    <>
      <Table
        className="mt-4 w-full"
        loading={{
          spinning: searchAvailabilityLoading || categoryListLoading,
        }}
        dataSource={formattedPosts}
        bordered
        scroll={{ x: true }}
        columns={postsColumns}
        pagination={{
          pageSize: 5,
          total: categoryList ? Number(categoryList.postCnt) : 0,
          onChange(page) {
            params.set("p", String(page));
            router.push(`${pathname}?${params.toString()}`);
          },
        }}
      />
    </>
  );
};

export default PostInfoTable;
