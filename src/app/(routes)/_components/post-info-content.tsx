import { Descriptions, DescriptionsProps, Skeleton, Tag } from "antd";
import {
  LinkOutlined,
  CommentOutlined,
  HeartOutlined,
  PictureOutlined,
  EditOutlined,
} from "@ant-design/icons";
import React from "react";
import "../_lib/styles/post-info-content.css";
import useBlogPostDetail from "../_lib/hooks/useBlogPostDetail";
import PostInfoContentMain from "./post-info-content-main";

interface PostInfoContentProps {
  postId: string;
  blogId: string;
}

const PostInfoContent: React.FC<PostInfoContentProps> = ({
  postId,
  blogId,
}) => {
  const { data, isLoading } = useBlogPostDetail({
    postId,
    blogId,
  });
  const isLoadingData = isLoading || !data;

  const items: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "등록일",
      children: data?.postAddDate,
      span: 1,
      style: {
        width: "110px",
      },
    },
    {
      key: "2",
      label: "댓글/공감/사진/글자",
      children: (
        <div
          style={{
            width: "100%",
            display: "flex",
            gap: "5px",
          }}
        >
          <div>
            <CommentOutlined /> {data?.commentCount || 0}
          </div>
          <div>
            <HeartOutlined /> {data?.likeCount || 0}
          </div>
          <div>
            <PictureOutlined /> {data?.imageCount || 0}
          </div>
          <div>
            <EditOutlined /> {data?.textLength || 0}
          </div>
        </div>
      ),
      span: 2,
      style: {
        width: "250px",
      },
    },
    {
      key: "3",
      label: "태그",
      children: data?.tagList.join(" "),
      span: 2,
    },
    {
      key: "4",
      label: "본문",
      children: <PostInfoContentMain text={data?.text || ""} />,
      span: 5,
      contentStyle: {
        overflow: "auto",
        maxHeight: "300px",
      },
      style: {
        overflow: "auto",
        maxHeight: "300px",
      },
    },
    {
      key: "5",
      label: "링크",
      children: (
        <ul>
          {data?.linkList.map((link, index) => (
            <li key={index} className="list-disc list-inside ">
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 underline hover:text-gray-600 hover:underline"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      ),
      span: 5,
    },
    {
      key: "6",
      label: "반복 키워드",
      children: (
        <div className="flex flex-wrap gap-2">
          {data?.uniqueMorphemeList.map((morpheme, index) => (
            <Tag
              color="geekblue"
              key={index}
              style={{
                fontSize: "14px",
              }}
            >
              {morpheme.word} - {morpheme.count}
            </Tag>
          ))}
        </div>
      ),
      span: 5,
    },
  ];

  return (
    <div className="mt-2">
      {isLoadingData ? (
        <Skeleton active paragraph={{ rows: 8 }} />
      ) : (
        <Descriptions
          bordered
          size="small"
          title={
            <div className="flex flex-col gap-1">
              <a
                href={`https://blog.naver.com/${blogId}/${postId}`}
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-lg font-bold break-all whitespace-pre-wrap text-gray-700 hover:underline">
                  {data?.title.trim()}
                </span>
                <span className="ml-2">
                  {!isLoadingData && <LinkOutlined />}
                </span>
              </a>
            </div>
          }
          items={items}
          layout="vertical"
          column={5}
        />
      )}
    </div>
  );
};

export default PostInfoContent;
