import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { Navigation } from "@/components";

// Define metadata if needed.  You can also define it in the page.
export const metadata: Metadata = {
  title: "About Us | Cyan University",
  description: "Unlock the next level of your career",
};

interface CustomLayoutProps {
  children: React.ReactNode;
}

const CustomLayout = ({ children }: CustomLayoutProps) => {
  return (
    <SmoothScroll>
      <div className="nav__wrapper">
        <Navigation />
      </div>
      <main>{children}</main>
    </SmoothScroll>
  );
};

export default CustomLayout;
