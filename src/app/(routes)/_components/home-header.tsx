import React from "react";

interface HomeHeaderProps {}

const HomeHeader: React.FC<HomeHeaderProps> = () => {
  return (
    <div className="bg-blue-400 text-white py-5">
      <div className="max-w-screen-xl w-full flex items-end gap-2 justify-start mx-auto px-4">
        <h1 className="text-2xl font-bold">비에이</h1>
        <p>네이버 블로그 분석 서비스</p>
      </div>
    </div>
  );
};

export default HomeHeader;
