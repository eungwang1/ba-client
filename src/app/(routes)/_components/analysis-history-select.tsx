import { Select } from "antd";
import {
  DeleteOutlined,
  ClearOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import useBlogCategoryList from "../_lib/hooks/useBlogCategoryList";
import { LocalStorage } from "@/app/_lib/utils/localStorage";
import { BLOG_ANALYSIS_HISTORY_KEY } from "../_lib/constants/storageKey";
import { extractBlogId } from "../_lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface AnalysisHistorySelectProps {}

const AnalysisHistorySelect: React.FC<AnalysisHistorySelectProps> = () => {
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

  return (
    <div className="mt-3 flex gap-2">
      <Select
        placeholder="검색기록"
        className="analysis-history-select"
        size="large"
        options={analysisHistory.map((blogId) => ({
          label: (
            <div className="flex justify-between">
              <div>{blogId}</div>
              <button
                className="select-remove-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteHistory(blogId);
                }}
              >
                <CloseOutlined />
              </button>
            </div>
          ),
          value: blogId,
        }))}
        value={blogId}
        onSelect={(value) => {
          params.set("b", value);
          router.push(`${pathname}?${params.toString()}`);
        }}
        style={{
          minWidth: 200,
        }}
        removeIcon={<div>hi</div>}
      />
    </div>
  );
};

export default AnalysisHistorySelect;
