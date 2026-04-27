import Image from 'next/image'
import background from "../../public/imgs/background.png"
import Link from "next/link";

export default function Home() {
    return (
        <div className={"min-h-screen bg-white overflow-visible"}>
            <div className={"flex flex-col items-center p-5 gap-x-5"}>
                <div className={"relative w-full"}>
                    <div className={"flex justify-center"}>
                        <Image src={background} alt={"Main page background"} width={1000} height={300}
                               className={"rounded-lg"}/>
                    </div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center backdrop-blur-sm p-4 rounded-lg">
                            <h1 className="text-white text-7xl font-poppins font-bold backdrop-blur-sm px-4 rounded-md">
                                things talk.
                            </h1>
                            <p className="text-white max-w-md mt-4 font-quicksand font-semibold backdrop-blur-sm p-2 rounded-md">
                                everything has a story. share what matters
                            </p>
                            <Link href="/me/add">
                                <button
                                    className="mt-6 bg-white text-black transition hover:scale-110  hover:bg-brandLightgold hover:text-brandWalnut font-quicksand px-6 py-3 rounded-lg font-bold">
                                    try now →
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                {/*<div className={"flex flex-col text-md font-poppins font-medium max-w-2xl gap-y-3 mt-5"}>*/}
                {/*    <p>Hola, amigo! My name is Leo and this is my third personal project, whose goal is to learn new*/}
                {/*        tools*/}
                {/*        that I will use in serious, commercial projects, to practice – not only the new tools, but*/}
                {/*        everything that making a project involves: conceptualizing, implementing, thinking, improvising,*/}
                {/*        solving issues, simply coding and gluing it all together.</p>*/}
                {/*    <p>*/}
                {/*        The idea is quite simple – to revive the spiritless. Let the person make notes about things*/}
                {/*        that*/}
                {/*        surround them, that are precious, that carry memories, that carry life – life that is not seen*/}
                {/*        by*/}
                {/*        others. And let others see it, feel it, touch it.*/}
                {/*    </p>*/}
                {/*    <p>*/}
                {/*        If I’m honest, that sounded way too poetic. But hopefully you do enjoy my creation – or at*/}
                {/*        least*/}
                {/*        skills. Thank you for visiting and spending this moment with me.*/}
                {/*    </p>*/}

                {/*</div>*/}

            </div>
        </div>
    );
}
