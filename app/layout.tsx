import "./globals.css";
import { ReactNode } from "react";
import { Zen_Maru_Gothic } from "next/font/google";

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ja" className={zenMaruGothic.className}>
      <body>{children}</body>
    </html>
  );
}
