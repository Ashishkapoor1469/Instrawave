import Navbar from "./Components/NavBar";
import "./globals.css";
import NavTop from "./Components/NavTop";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden" data-theme="cupcake">
        <NavTop/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
