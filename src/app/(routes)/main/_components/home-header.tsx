import { Tooltip } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HomeHeaderProps {}

const HomeHeader: React.FC<HomeHeaderProps> = () => {
  return (
    <div className="bg-blue-400 text-white py-4 ">
      <div className="flex justify-between max-w-screen-xl mx-auto px-4 items-center">
        <div className="w-full flex items-end gap-2 justify-start">
          <h1 className="text-2xl font-bold">블로그에이</h1>
          <p>네이버 블로그 분석 서비스</p>
        </div>
        <Tooltip title="이용자 단톡방">
          <Link
            className="-scale-x-100"
            href="https://open.kakao.com/o/gcyfdlmg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/home/kakao.svg"
              width={30}
              height={30}
              alt="logo"
            />
          </Link>
        </Tooltip>
      </div>
    </div>
  );
};

export default HomeHeader;
