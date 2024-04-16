import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import useSearchAvailability from "../_lib/hooks/useSearchAvailability";
import useBlogCategoryList from "../_lib/hooks/useBlogCategoryList";
import { Input } from "antd";
import { extractBlogId } from "../_lib/utils";
import BlogInfoTable from "./blog-info-table";
import PostInfoTable from "./post-info-table";
import AnalysisHistorySelect from "./analysis-history-select";

interface BlogAnalysisTabProps {}
const BlogAnalysisTab: React.FC<BlogAnalysisTabProps> = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams.toString());
  const { isLoading: searchAvailabilityLoading } = useSearchAvailability();
  const { isLoading: categoryListLoading } = useBlogCategoryList();
  return (
    <div>
      <Input.Search
        placeholder="블로그 주소 또는 아이디를 입력해주세요."
        enterButton="분석"
        size="large"
        loading={searchAvailabilityLoading || categoryListLoading}
        onSearch={(value) => {
          params.set("b", extractBlogId(value));
          router.push(`${pathname}?${params.toString()}`);
        }}
      />
      <AnalysisHistorySelect />
      <BlogInfoTable />
      <PostInfoTable />
    </div>
  );
};

export default BlogAnalysisTab;
