import { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { Navigation } from "@/components";

export const metadata: Metadata = {
  title: "Courses | Cyan University",
  description:
    "Explore our full range of accredited programs recognized by both industry and academia",
  openGraph: {
    title: "Courses | Cyan University",
    description:
      "Explore our full range of accredited programs recognized by both industry and academia",
    images: [
      {
        url: "/assets/courses-page/courses-banner.png",
        width: 1200,
        height: 630,
        alt: "Cyan University Courses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Courses | Cyan University",
    description:
      "Explore our full range of accredited programs recognized by both industry and academia",
    images: ["/assets/courses-page/courses-banner.png"],
  },
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
