import { Metadata } from "next";
import HomePage from "./_components/home-page";

export const metadata: Metadata = {
  title: "비에이 | Blog Analysis",
  description: "네이버 블로그 분석 서비스 비에이",
  keywords:
    "비에이, 웨어이즈포스트, 블덱스, 블로그지수, 블로그지수사이트, 블로그누락확인, 블로그노출, 블로그분석",
  icons: "/favicon.ico",
};

export default function Home() {
  return <HomePage />;
}
