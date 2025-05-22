import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { Navigation } from "@/components";

export const metadata: Metadata = {
  title: "Join Walit-list | Cyan University",
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
