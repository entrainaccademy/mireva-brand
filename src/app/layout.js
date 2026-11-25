import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata = {
  title: "Mireva | Premium, Imported, For India",
  description: "Mireva curates premium imported food and beverage experiences for India, brought to life through The Mireva Cafe.",
  icons: { icon: "/mireva-icon.png", apple: "/mireva-icon.png" },
};

export default function RootLayout({ children }) {
  return <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}><body>{children}</body></html>;
}
