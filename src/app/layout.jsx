import Navbar from "@/component/navbar/Navbar";
import "./globals.css";
import { Roboto } from "next/font/google";
import Footer from "@/component/footer/Footer";
import { ThemeProvider } from "@/context/Theme";

const inter = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Victors portfolio",
  description: "Fullstack MERN developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/port.png" type="image/x-icon" />
      <body className={inter.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
