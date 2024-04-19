import { Select } from "antd";
import React, { useEffect, useState } from "react";
import { LocalStorage } from "@/app/_lib/utils/localStorage";
import { SEARCH_KEYWORD_HISTORY_KEY } from "../_lib/constants/storageKey";
import { extractBlogId } from "../_lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SelectLabelWithRemoveButton from "@/app/_components/select/select-label-with-remove-button";
import useNaverKeywordSearch from "../_lib/hooks/useKeywordSearchCount";

interface KeywordHistorySelectProps {}

const KeywordHistorySelect: React.FC<KeywordHistorySelectProps> = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const storage = new LocalStorage();
  const params = new URLSearchParams(searchParams.toString());
  const keyword = searchParams.get("q");
  const { data: searchedKeywordList } = useNaverKeywordSearch();
  const [keywordHistory, setKeywordHistory] = useState<string[]>([]);

  const handleDeleteHistory = (value: string) => {
    if (value === keyword) {
      params.delete("q");
      router.push(`${pathname}?${params.toString()}`);
    }
    const newHistory = keywordHistory.filter((history) => history !== value);
    setKeywordHistory(newHistory);
    storage.set(SEARCH_KEYWORD_HISTORY_KEY, newHistory);
  };

  useEffect(() => {
    const history = storage.get(SEARCH_KEYWORD_HISTORY_KEY);
    if (history) {
      setKeywordHistory(history);
    }
  }, []);

  useEffect(() => {
    if (searchedKeywordList.length > 0) {
      const uniqueHistory = Array.from(
        new Set([String(keyword), ...keywordHistory])
      );
      setKeywordHistory(uniqueHistory);
      storage.set(SEARCH_KEYWORD_HISTORY_KEY, uniqueHistory);
    }
  }, [searchedKeywordList]);

  return (
    <div className="mt-3 flex gap-2">
      <Select
        placeholder="검색기록"
        size="large"
        options={keywordHistory.map((keyword) => ({
          label: (
            <SelectLabelWithRemoveButton
              label={keyword}
              onRemove={() => handleDeleteHistory(keyword)}
            />
          ),
          value: keyword,
        }))}
        value={keyword}
        onSelect={(value) => {
          params.set("q", value);
          router.push(`${pathname}?${params.toString()}`);
        }}
        style={{
          minWidth: 200,
        }}
      />
    </div>
  );
};

export default KeywordHistorySelect;
