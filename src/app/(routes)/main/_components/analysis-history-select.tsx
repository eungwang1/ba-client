import { Select } from "antd";
import React, { useEffect, useState } from "react";
import useBlogCategoryList from "../_lib/hooks/useBlogCategoryList";
import { LocalStorage } from "@/app/_lib/utils/localStorage";
import { BLOG_ANALYSIS_HISTORY_KEY } from "../_lib/constants/storageKey";
import { extractBlogId } from "../_lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SelectLabelWithRemoveButton from "@/app/_components/select/select-label-with-remove-button";

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
      params.delete("p");
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
            <SelectLabelWithRemoveButton
              label={blogId}
              onRemove={() => handleDeleteHistory(blogId)}
            />
          ),
          value: blogId,
        }))}
        value={blogId}
        onSelect={(value) => {
          params.set("b", value);
          params.delete("p");
          router.push(`${pathname}?${params.toString()}`);
        }}
        style={{
          minWidth: 200,
        }}
      />
    </div>
  );
};

export default AnalysisHistorySelect;
