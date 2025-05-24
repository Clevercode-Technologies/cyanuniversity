import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { Navigation } from "@/components";

export const metadata: Metadata = {
  title: "Contact | Cyan University",
  description:
    "Start your journey at Cyan University. Learn about our admission process and requirements",
  openGraph: {
    title: "Contact | Cyan University",
    description:
      "Start your journey at Cyan University. Learn about our admission process and requirements",
    images: [
      {
        url: "/assets/contact/contact-banner.png",
        width: 1200,
        height: 630,
        alt: "Cyan University Admission",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Cyan University",
    description:
      "Start your journey at Cyan University. Learn about our admission process and requirements",
    images: ["/assets/contact/contact-banner.png"],
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
