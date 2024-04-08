import React, { useEffect, useState } from "react";
import { BLOG_RANK_HISTORY_KEY } from "../_lib/constants/storageKey";
import { useQueryClient } from "@tanstack/react-query";
import { LocalStorage } from "@/app/_lib/utils/localStorage";
import { useRouter, useSearchParams } from "next/navigation";
import usePostSearchRank from "../_lib/hooks/usePostSearchRank";
import { uniqueId } from "lodash";
import { Input } from "antd";

interface RankHistory {
  keyword: string;
  naver: number;
  daum: number;
  id: string;
}

interface PostRankBoxProps {
  logNo: string;
}

const PostRankBox: React.FC<PostRankBoxProps> = ({ logNo }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const blogId = searchParams.get("b");
  const page = Number(searchParams.get("p"));
  const storage = new LocalStorage();
  const queryclient = useQueryClient();
  const [keyword, setKeyword] = useState<string>("");
  const [histories, setHistories] = useState<RankHistory[]>([]);
  const { data, isLoading } = usePostSearchRank(keyword);
  const saveRankHistory = ({ keyword, naver, daum, id }: RankHistory) => {
    if (!blogId) return;
    const histories = storage.get(BLOG_RANK_HISTORY_KEY);
    const newRankHistory = {
      [blogId]: {
        [logNo]: [
          {
            keyword,
            naver,
            daum,
            id,
          },
        ],
      },
    };
    if (!histories) {
      return storage.set(BLOG_RANK_HISTORY_KEY, newRankHistory);
    }
    const prevMyHistory = histories[blogId];
    if (!prevMyHistory) {
      return storage.set(BLOG_RANK_HISTORY_KEY, {
        ...histories,
        ...newRankHistory,
      });
    }
    const prevMyLogNo = Object.keys(prevMyHistory).includes(logNo);
    if (!prevMyLogNo) {
      return storage.set(BLOG_RANK_HISTORY_KEY, {
        ...histories,
        [blogId]: {
          ...prevMyHistory,
          [logNo]: [
            {
              keyword,
              naver,
              daum,
              id,
            },
          ],
        },
      });
    }
    return storage.set(BLOG_RANK_HISTORY_KEY, {
      ...histories,
      [blogId]: {
        ...prevMyHistory,
        [logNo]: [
          {
            keyword,
            naver,
            daum,
            id,
          },
          ...prevMyHistory[logNo],
        ],
      },
    });
  };
  const delelteRankHistory = (id: string, keyword: string) => {
    setHistories((prev) => prev.filter((history) => history.id !== id));
    const histories = storage.get(BLOG_RANK_HISTORY_KEY);
    if (!histories) return;
    if (!blogId) return;
    const myHistories = histories[blogId];
    if (!myHistories) return;
    const myLogNo = myHistories[logNo];
    if (!myLogNo) return;
    const newHistories = myLogNo.filter(
      (history: RankHistory) => history.id !== id
    );
    storage.set(BLOG_RANK_HISTORY_KEY, {
      ...histories,
      [blogId]: {
        ...myHistories,
        [logNo]: newHistories,
      },
    });
    setKeyword("");
    queryclient.removeQueries({ queryKey: ["searchRank", blogId, keyword] });
  };

  useEffect(() => {
    if (data) {
      const id = uniqueId("history-");
      setHistories((prev) => [
        {
          keyword,
          naver: data.naverBlogSearchRank || 0,
          daum: data.daumBlogSearchRank || 0,
          id,
        },
        ...prev,
      ]);
      saveRankHistory({
        keyword,
        naver: data.naverBlogSearchRank || 0,
        daum: data.daumBlogSearchRank || 0,
        id,
      });
    }
  }, [data]);

  useEffect(() => {
    setHistories([]);
    setKeyword("");
    const histories = storage.get(BLOG_RANK_HISTORY_KEY);
    if (!histories) return;
    if (!blogId) return;
    const myHistories = histories[blogId];
    if (!myHistories) return;
    const myLogNo = myHistories[logNo];
    if (!myLogNo) return;
    setHistories(myLogNo);
  }, [page, blogId]);

  return (
    <div>
      <Input.Search
        key={page + (blogId || "")}
        placeholder="키워드"
        enterButton="검색"
        loading={isLoading}
        onSearch={(value) => {
          setKeyword(value);
        }}
      />
      <div className="mt-3 flex gap-2 flex-col">
        {histories.map((history) => (
          <div
            className="flex justify-between w-full pr-2 border-b border-b-gray-100"
            key={history.id}
          >
            <div>
              <div>{history.keyword}</div>
              <div>{`네이버: ${history.naver || "x"} / 다음: ${
                history.daum || "x"
              }`}</div>
            </div>
            <button
              onClick={() => {
                delelteRankHistory(history.id, history.keyword);
              }}
            >
              ✖
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostRankBox;
