import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { CounterStoreProvider } from "../_providers/counter-store-provider";
import { TanstackProviders } from "../_providers/tanstack-provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import "../_styles/global.css";

export const metadata: Metadata = {
  title: "비에이 | Blog Analysis",
  description: `비에이는 네이버 블로그 분석을 도와주는 서비스입니다.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
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
