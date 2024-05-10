import Header from "@/components/layout/Header";
import "./globals.css";
import Head from "./head";

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
