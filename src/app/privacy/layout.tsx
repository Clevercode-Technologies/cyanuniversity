import type { Metadata } from "next";
import "./global.css";
import SmoothScroll from "@/components/SmoothScroll";
import { Navigation } from "@/components";

export const metadata: Metadata = {
  title: "Privacy Policy | Cyan University",
  description:
    "Learn about how Cyan University protects and manages your personal information",
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
