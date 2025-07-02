import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Quốc Anh - Professional MC | Gala Dinners, Grand Openings, Weddings",
	description:
		"Professional Master of Ceremonies specializing in Gala Dinners, Grand Openings, and Weddings. Elevating your most important moments with exceptional hosting and unforgettable experiences.",
	keywords:
		"MC, Master of Ceremonies, Gala Dinner, Grand Opening, Wedding, Event Host, Professional MC, San Francisco",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	return (
		<html
			lang="en"
			className="scroll-smooth"
		>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
