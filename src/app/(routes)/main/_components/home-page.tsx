"use client";

import React, { Suspense } from "react";
import { Tabs, TabsProps } from "antd";
import KeywordTab from "./keyword-tab";
import BlogAnalysisTab from "./blog-analysis-tab";
import "../_lib/styles/home-page.css";
import HomeHeader from "./home-header";
import HomeFooter from "./home-footer";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Suspense>
      <div className="min-h-screen flex flex-col">
        <HomeHeader />
        <div className="max-w-screen-xl mx-auto p-5 w-full mb-16">
          <Tabs items={tabItems} />
        </div>
        <HomeFooter />
      </div>
    </Suspense>
  );
};

export default HomePage;

const tabItems: TabsProps["items"] = [
  {
    key: "analysis",
    label: "블로그",
    children: <BlogAnalysisTab />,
  },
  {
    key: "post",
    label: "포스팅",
    children: <BlogAnalysisTab />,
  },
  {
    key: "keyword",
    label: "키워드",
    children: <KeywordTab />,
  },
];
