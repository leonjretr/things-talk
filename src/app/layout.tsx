import type {Metadata} from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Providers } from "./providers";

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
        {/*<Wrapper>*/}
        {/*</Wrapper>*/}
        <Header/>
        <Providers>{children}</Providers>
        <Footer/>
        </body>
        </html>
    );
}
