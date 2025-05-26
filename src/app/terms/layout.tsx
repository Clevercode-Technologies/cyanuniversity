import type { Metadata } from "next";
import "./global.css";
import SmoothScroll from "@/components/SmoothScroll";
import { Navigation } from "@/components";

export const metadata: Metadata = {
  title: "Terms & Conditions | Cyan University",
  description:
    "Read our terms and conditions for using Cyan University's services",
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
