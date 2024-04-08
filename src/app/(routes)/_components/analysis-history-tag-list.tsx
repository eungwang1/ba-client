import { Tag } from "antd";
import React, { useEffect, useState } from "react";
import useBlogCategoryList from "../_lib/hooks/useBlogCategoryList";
import { LocalStorage } from "@/app/_lib/utils/localStorage";
import { BLOG_ANALYSIS_HISTORY_KEY } from "../_lib/constants/storageKey";
import { extractBlogId } from "../_lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface AnalysisHistoryTagListProps {}

const AnalysisHistoryTagList: React.FC<AnalysisHistoryTagListProps> = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const storage = new LocalStorage();
  const params = new URLSearchParams(searchParams.toString());
  const blogId = searchParams.get("b");
  const { data: categoryList } = useBlogCategoryList();
  const [analysisHistory, setAnalysisHistory] = useState<string[]>([]);
  const handleDeleteHistory = (blogId: string) => {
    const newHistory = analysisHistory.filter((history) => history !== blogId);
    setAnalysisHistory(newHistory);
    storage.set(BLOG_ANALYSIS_HISTORY_KEY, newHistory);
  };

  useEffect(() => {
    const history = storage.get(BLOG_ANALYSIS_HISTORY_KEY);
    if (history) {
      setAnalysisHistory(history);
    }
  }, []);

  useEffect(() => {
    if (categoryList?.ok) {
      const uniqueHistory = Array.from(
        new Set([extractBlogId(String(blogId)), ...analysisHistory])
      );
      setAnalysisHistory(uniqueHistory);
      storage.set(BLOG_ANALYSIS_HISTORY_KEY, uniqueHistory);
    }
  }, [categoryList]);

  return (
    <div className="mt-3">
      {analysisHistory.length > 0 &&
        analysisHistory.map((blogId, index) => (
          <Tag
            closable
            key={blogId}
            onClick={() => {
              params.set("b", blogId);
              router.push(`${pathname}?${params.toString()}`);
            }}
            onClose={() => handleDeleteHistory(blogId)}
            color={index === 0 ? "blue" : "default"}
          >
            {blogId}
          </Tag>
        ))}
    </div>
  );
};

export default AnalysisHistoryTagList;
