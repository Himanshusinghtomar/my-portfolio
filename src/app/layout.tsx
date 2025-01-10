import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Himanshu - Portfolio",
  description: "Full Stack Developer portfolio for Himanshu",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
