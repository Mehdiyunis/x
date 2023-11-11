"use client";
import { Provider } from "react-redux";
import { store } from "@/store";
import "./globals.css";
import Header from "@/components/layout/Header";
import { usePathname } from "next/navigation";
export default function RootLayout({ children }) {
  const pathname = usePathname();
  const showHeader = pathname == "/" ? false : true;

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <div className="bg-black min-h-screen h-full">
            {showHeader && <Header />}
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}
