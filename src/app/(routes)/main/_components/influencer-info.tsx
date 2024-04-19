import type { InfluencerInfo } from "@/app/_types/graphql";
import React from "react";

interface InfluencerInfoProps extends InfluencerInfo {}

const InfluencerInfo: React.FC<InfluencerInfoProps> = (info) => {
  return (
    <div className="flex flex-col gap-1">
      <a href={info.url} target="_blank" rel="noopener noreferrer">
        {info.url}
      </a>
      <div>{`닉네임: ${info.nickName}`}</div>
      <div>{`구독자: ${info.subscriberCount}`}</div>
      <div>{`카테고리: ${info.category}`}</div>
      <div>{`키워드: ${info.keyword}`}</div>
      <div>{`소개: ${info.introduction}`}</div>
    </div>
  );
};

export default InfluencerInfo;
