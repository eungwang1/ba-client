import React, { useEffect, useState } from "react";
import { BLOG_RANK_HISTORY_KEY } from "../_lib/constants/storageKey";
import { useQueryClient } from "@tanstack/react-query";
import { LocalStorage } from "@/app/_lib/utils/localStorage";
import { useSearchParams } from "next/navigation";
import usePostSearchRank from "../_lib/hooks/usePostSearchRank";
import { uniqueId } from "lodash";
import { Input, Modal, message } from "antd";

interface RankHistory {
  keyword: string;
  blogRank: number;
  smartRank: number;
  smartTitle: string;
  id: string;
}

interface PostRankBoxProps {
  logNo: string;
}

const PostRankBox: React.FC<PostRankBoxProps> = ({ logNo }) => {
  const searchParams = useSearchParams();
  const blogId = searchParams.get("b");
  const page = Number(searchParams.get("p"));
  const storage = new LocalStorage();
  const queryclient = useQueryClient();
  const [keyword, setKeyword] = useState<string>("");
  const [histories, setHistories] = useState<RankHistory[]>([]);
  const { data, isLoading } = usePostSearchRank(keyword);
  const blogRankText = (blogRank: number) => `블로그탭: ${blogRank || "x"}`;
  const smartRankText = (smartRank: number, smartTitle: string) =>
    smartRank ? `스마트탭:  ${smartRank || "x"}(${smartTitle})` : "스마트탭: x";
  const saveRankHistory = ({
    keyword,
    blogRank,
    smartRank,
    smartTitle,
    id,
  }: RankHistory) => {
    if (!blogId) return;
    const histories = storage.get(BLOG_RANK_HISTORY_KEY);
    const newRankHistory = {
      [blogId]: {
        [logNo]: [
          {
            keyword,
            blogRank,
            smartRank,
            smartTitle,
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
              blogRank,
              smartRank,
              smartTitle,
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
            blogRank,
            smartRank,
            smartTitle,
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
          blogRank: data.naverBlogSearchRank || 0,
          smartRank: data.naverSmartSearchRank || 0,
          smartTitle: data.naverSmartSearchTitle || "",
          id,
        },
        ...prev,
      ]);
      saveRankHistory({
        keyword,
        blogRank: data.naverBlogSearchRank || 0,
        smartRank: data.naverSmartSearchRank || 0,
        smartTitle: data.naverSmartSearchTitle || "",
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
        className="mt-4"
        key={page + (blogId || "")}
        placeholder="키워드"
        enterButton="검색"
        loading={isLoading}
        onSearch={(value) => {
          if (histories.flatMap((el) => el.keyword).includes(value)) {
            message.warning("이미 검색한 키워드입니다.");
          }
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
              <div>{blogRankText(history.blogRank)}</div>
              <div>{smartRankText(history.smartRank, history.smartTitle)}</div>
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
