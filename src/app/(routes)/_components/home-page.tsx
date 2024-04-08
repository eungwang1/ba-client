"use client";

import React, { Suspense } from "react";
import { Tabs, TabsProps } from "antd";
import KeywordTab from "./keyword-tab";
import BlogAnalysisTab from "./blog-analysis-tab";
import "../_lib/styles/home-page.css";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Suspense>
      <div className="max-w-screen-xl mx-auto p-5">
        <Tabs items={tabItems} />
      </div>
    </Suspense>
  );
};

export default HomePage;

const tabItems: TabsProps["items"] = [
  {
    key: "keyword",
    label: "키워드",
    children: <KeywordTab />,
  },
  {
    key: "analysis",
    label: "분석",
    children: <BlogAnalysisTab />,
  },
];
