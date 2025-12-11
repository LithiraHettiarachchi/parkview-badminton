import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Parkview Badminton Club - London's Premier Badminton Community",
    description: "Join Parkview Badminton Club for friendly, competitive badminton sessions in London. Book courts, meet fellow players, and improve your game. Sessions on Sundays, Tuesdays, and Thursdays.",
    keywords: [
        "badminton club London",
        "badminton sessions",
        "badminton court booking",
        "London badminton",
        "intermediate badminton",
        "badminton coaching",
        "Parkview Badminton",
        "sports club London",
    ],
    authors: [{ name: "Parkview Badminton Club" }],
    openGraph: {
        type: "website",
        locale: "en_GB",
        url: "https://parkviewbadminton.com",
        title: "Parkview Badminton Club - London",
        description: "Join our friendly badminton community. Book sessions, improve your game, and meet fellow enthusiasts.",
        siteName: "Parkview Badminton Club",
    },
    twitter: {
        card: "summary_large_image",
        title: "Parkview Badminton Club - London",
        description: "Friendly, competitive badminton sessions in London.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className} suppressHydrationWarning>{children}</body>
        </html>
    );
}
