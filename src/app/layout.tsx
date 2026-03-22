import type {Metadata} from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Providers } from "./providers";

export const metadata: Metadata = {
    title: "things really do talk",
    description: "Tell the stories your objects cannot",
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <title>things really do talk</title>
            <link rel="icon" href="/src/app/icon.ico" sizes="any"/>
        </head>
        <body className={"antialiased"}>
        {/*<Wrapper>*/}
        {/*</Wrapper>*/}
        <Header/>
        <Providers>{children}</Providers>
        <Footer/>
        </body>
        </html>
    );
}
