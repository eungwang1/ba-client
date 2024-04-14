import { ColumnsType } from "antd/es/table";

export const postsColumns: ColumnsType = [
  {
    title: "제목",
    dataIndex: "titleWithInspectMessage",
    key: "titleWithInspectMessage",
    width: 300,
  },
  {
    title: "공감/댓글/사진/글자수",
    dataIndex: "co/sy/th/tl",
    key: "co/sy/th/tl",
    width: 140,
  },

  {
    title: "노출",
    dataIndex: "isSearchAvailability",
    key: "isSearchAvailability",
    width: 10,
  },
  {
    title: "순위",
    dataIndex: "rank",
    key: "rank",
    width: 300,
  },
];

export const blogInfoColumns: ColumnsType = [
  {
    title: "이름",
    dataIndex: "blogName",
    key: "blogName",
  },

  {
    title: "방문자(최근5일)",
    dataIndex: "visitorCnt",
    key: "visitorCnt",
  },
  {
    title: "누적 방문자",
    dataIndex: "totalVisitorCount",
    key: "totalVisitorCount",
  },
  {
    title: "분야",
    dataIndex: "blogDirectoryName",
    key: "blogDirectoryName",
  },
  {
    title: "카테고리별 포스트",
    dataIndex: "categoryList",
    key: "categoryList",
  },
  {
    title: "전체 포스트",
    dataIndex: "postCnt",
    key: "postCnt",
  },
  {
    title: "구독자",
    dataIndex: "subscriber",
    key: "subscriber",
  },
];
