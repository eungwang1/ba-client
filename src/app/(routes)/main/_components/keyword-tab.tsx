import React from "react";
import { Input, Table } from "antd";
import useNaverKeywordSearch from "../_lib/hooks/useKeywordSearchCount";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import KeywordHistorySelect from "./keyword-history-select";

interface KeywordTabProps {}

const KeywordTab: React.FC<KeywordTabProps> = () => {
  const searchParams = useSearchParams()!;
  const router = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);

  const { data, isLoading } = useNaverKeywordSearch();
  return (
    <div>
      <Input.Search
        placeholder="키워드를 입력해주세요."
        enterButton="검색"
        size="large"
        onSearch={(value) => {
          params.set("q", value);
          router.push(pathname + "?" + params.toString());
        }}
        loading={isLoading}
      />
      <KeywordHistorySelect />
      <Table
        className="mt-4 w-full"
        loading={{
          spinning: isLoading,
        }}
        dataSource={data}
        bordered
        scroll={{ x: true }}
        columns={keywordColums}
        pagination={{
          pageSize: 10,
        }}
      />
    </div>
  );
};

export default KeywordTab;

const keywordColums = [
  {
    title: "키워드",
    dataIndex: "relKeyword",
    key: "relKeyword",
  },
  {
    title: "PC",
    dataIndex: "monthlyPcQcCnt",
    key: "monthlyPcQcCnt",
  },
  {
    title: "MOBILE",
    dataIndex: "monthlyMobileQcCnt",
    key: "monthlyMobileQcCnt",
  },
];
