import React from "react";

interface HomeFooterProps {}

const HomeFooter: React.FC<HomeFooterProps> = () => {
  return (
    <footer className="mt-auto bg-gray-50 border-t border-gray-200">
      <div className="text-gray-400 text-sm max-w-screen-xl mx-auto p-5 w-full h-full flex flex-col gap-1">
        <div>© 2024 비에이</div>
        <div>사업자등록번호: 784-19-02020 ⁞ 대표: 심은광</div>
        <div>사업장소재지: 서울특별시 구로구 가마산로77</div>
        <div>통신판매업신고번호: 2023-서울구로-1204</div>
      </div>
    </footer>
  );
};

export default HomeFooter;
