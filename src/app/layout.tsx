import type {Metadata} from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"
import Header from "@/components/header/Header";
import Wrapper from "@/components/wrapper/Wrapper";

export const metadata: Metadata = {
    title: "Things really do Talk",
    description: "Tell the stories your objects cannot",
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={``}>
        <Wrapper>
            <Header/>
        </Wrapper>
        {children}
        </body>
        </html>
    );
}
