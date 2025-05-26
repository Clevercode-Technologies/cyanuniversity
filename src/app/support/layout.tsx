import type { Metadata } from "next";
import "./global.css";
import SmoothScroll from "@/components/SmoothScroll";
import { Navigation } from "@/components";

export const metadata: Metadata = {
  title: "Support Center | Cyan University",
  description:
    "Get help and support for your learning journey at Cyan University",
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
