
import Navbar from "@/components/ui/NavBar";
import "./globals.css";
import NavTop from "@/components/ui/NavTop";
import Footer from "@/components/ui/Footer";
import MouseFollow from "@/components/ui/MouseFollow"; 
import Chatbot from "@/components/ui/ChatBot";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden" data-theme="light" cz-shortcut-listen="true">
        <NavTop/>
        <MouseFollow />
        <Navbar/>
        {children}
        <Footer/>
        <Chatbot/>
      </body>
    </html>
  );
}
