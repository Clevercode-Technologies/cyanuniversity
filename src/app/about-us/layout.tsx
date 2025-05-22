import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { Navigation } from "@/components";

// Define metadata if needed.  You can also define it in the page.
export const metadata: Metadata = {
  title: "About Us | Cyan University",
  description:
    "Learn about Cyan University's mission, vision, and commitment to excellence in education",
  openGraph: {
    title: "About Us | Cyan University",
    description:
      "Learn about Cyan University's mission, vision, and commitment to excellence in education",
    images: [
      {
        url: "/assets/about-page/about-banner.png",
        width: 1200,
        height: 630,
        alt: "About Cyan University",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Cyan University",
    description:
      "Learn about Cyan University's mission, vision, and commitment to excellence in education",
    images: ["/assets/about-page/about-banner.png"],
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
