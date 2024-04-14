import { Collapse, Table } from "antd";
import React, { useMemo } from "react";
import useBlogCategoryList from "../_lib/hooks/useBlogCategoryList";
import useBlogInfo from "../_lib/hooks/useBlogInfo";
import { blogInfoColumns } from "../_lib/constants/table";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface BlogInfoTableProps {}

const BlogInfoTable: React.FC<BlogInfoTableProps> = () => {
  const searchParams = useSearchParams();
  const { data: categoryList, isLoading: categoryListLoading } =
    useBlogCategoryList();
  const blogId = searchParams.get("b");
  const { data: blogInfo, isLoading: blogInfoLoading } = useBlogInfo();
  const formattedBlogInfo = useMemo(
    () =>
      blogInfo?.blogInfo?.blogName
        ? [
            {
              blogName: (
                <a
                  href={`https://blog.naver.com/${blogId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black underline hover:underline"
                >
                  {blogInfo.blogInfo.blogName}
                </a>
              ),
              totalVisitorCount:
                blogInfo.blogInfo.totalVisitorCount.toLocaleString(),
              blogDirectoryName: blogInfo.blogInfo.blogDirectoryName,
              subscriber: blogInfo.blogInfo.subscriberCount.toLocaleString(),
              visitorCnt:
                blogInfo.blogInfo.blogVisitor?.reduce(
                  (acc, cur) =>
                    acc + (acc ? "/" : "") + cur.visitor.toLocaleString(),
                  ""
                ) || "",
              postCnt: categoryList?.postCnt
                ? categoryList.postCnt.toLocaleString()
                : 0,
              categoryList: (
                <Collapse
                  size="small"
                  items={[
                    {
                      key: "categoryList",
                      label: "카테고리별 포스트",
                      children: categoryList?.categories
                        ?.filter((el) => el.categoryName !== "구분선")
                        .map((category) => (
                          <div key={category.categoryName}>
                            {category.categoryName}:{" "}
                            {category.postCnt.toLocaleString()}
                          </div>
                        )),
                    },
                  ]}
                />
              ),
            },
          ]
        : [],
    [categoryList, blogInfo]
  );
  return (
    <Table
      className="mt-4 w-full"
      loading={{
        spinning: categoryListLoading || blogInfoLoading,
      }}
      dataSource={formattedBlogInfo}
      bordered
      scroll={{ x: true }}
      columns={blogInfoColumns}
      pagination={false}
    />
  );
};

export default BlogInfoTable;
