import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { CounterStoreProvider } from "../_providers/counter-store-provider";
import { TanstackProviders } from "../_providers/tanstack-provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import "../_styles/global.css";

export const metadata: Metadata = {
  title: "블로그에이 | Blog Analysis",
  description: `블로그에이는 네이버 블로그 분석을 도와주는 서비스입니다.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="naver-site-verification"
          content="ba5d25ba28a1056c7c2e517133d829f3e94f9cc8"
        />
      </head>
      <body>
        <CounterStoreProvider>
          <TanstackProviders>
            <AntdRegistry>{children}</AntdRegistry>
          </TanstackProviders>
        </CounterStoreProvider>
      </body>
      <GoogleAnalytics gaId="G-88TSY80QY8" />
    </html>
  );
}
