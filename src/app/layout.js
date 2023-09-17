import "./globals.css";
import { Akshar } from "next/font/google";

const akshar = Akshar({ subsets: ["latin"] });

export const metadata = {
  title: "Space",
  description: "Space landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={akshar.className}>{children}</body>
    </html>
  );
}
