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

  const handleDeleteHistory = (id: string) => {
    if (id === extractBlogId(String(blogId))) {
      params.delete("b");
      router.push(`${pathname}?${params.toString()}`);
    }
    const newHistory = analysisHistory.filter((history) => history !== id);
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

  const onClickTag = (blogId: string) => {
    params.set("b", blogId);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mt-3 flex gap-2">
      {analysisHistory.length > 0 &&
        analysisHistory.map((blogId, index) => (
          <Tag
            closable
            key={blogId}
            onClick={() => onClickTag(blogId)}
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
