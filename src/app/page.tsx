import Image from 'next/image'
import background from "../../public/imgs/background.png"
import background2 from "../../public/imgs/background2.png"
import Link from "next/link";

export default function Home() {
    return (
        <div className={"min-h-screen bg-white overflow-visible"}>
            <div className={"flex flex-col items-center p-5 gap-x-5"}>
                <div className={"relative w-full overflow-hidden max-w-5xl rounded-lg"}>
                    <div className={"flex justify-center"}>
                        <Image src={background} alt={"Main page background"}
                               className={"rounded-lg aspect-[16/9]"}/>
                    </div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-sm">
                        <div className="flex flex-col items-center p-4 rounded-lg max-w-xl transition-all">
                            <h1 className="text-white text-2xl mob3:text-3xl sm:text-5xl lg:text-7xl font-poppins font-bold backdrop-blur-sm px-4 rounded-md">
                                things talk.
                            </h1>
                            <p className="text-white text-xs mob3:text-sm sm:text-base max-w-md mt-4 font-quicksand font-semibold backdrop-blur-sm p-2 rounded-md">
                                everything has a story. share what matters
                            </p>
                            <Link href="/me/add">
                                <button
                                    className="mt-6 bg-white text-xs mob2:text-sm sm:text-base text-black transition hover:scale-110  hover:bg-brandLightgold hover:text-brandWalnut font-quicksand px-6 py-3 rounded-lg font-bold">
                                    try now →
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col font-inter items-center sm:hidden mt-10 w-full gap-2.5">
                    <div
                        className="bg-neutral-100 rounded-2xl rounded-bl-none px-5 py-3 self-start max-w-[80%] shadow-sm">
                        <p className="text-sm text-black font-bold">
                            things? and talk??
                        </p>
                    </div>
                    <div
                        className="bg-neutral-100 rounded-2xl rounded-bl-none px-5 py-3 self-start max-w-[75%] shadow-sm">
                        <p className="text-sm text-black font-medium">
                            what do you even mean???
                        </p>
                    </div>

                    <div
                        className="bg-brandWalnut text-white rounded-2xl rounded-br-none px-5 py-3 self-end max-w-[80%] shadow-sm mt-3">
                        <p className="text-sm">
                            that is right. its not your hearing.
                        </p>
                        <p className="text-sm mt-1">
                            things can talk.
                        </p>
                    </div>

                    <h1 className="underline font-bold mt-3 text-2xl  self-center mr-2">
                        literally.
                    </h1>
                </div>

                <div className={"relative w-full overflow-hidden max-w-5xl rounded-lg mt-7"}>
                    <div className={"flex justify-center"}>
                        <Image src={background2} alt={"Main page background 2"}
                               className={"rounded-lg sm:sm:aspect-[16/9]"}/>
                    </div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center p-4 rounded-lg max-w-xl transition-all">
                            <div className={"mt-20 backdrop-blur-sm text-white font-poppins p-2 rounded-lg"}>
                                Create a digital home for the objects that matter most and the memories they carry
                            </div>
                        </div>
                    </div>
                </div>

                <Link href="/me/add">
                    <button
                        className="mt-6 bg-brandWalnut text-white transition hover:scale-110  font-quicksand px-6 py-3 rounded-lg font-bold">
                        start now →
                    </button>
                </Link>

            </div>
        </div>
    );
}
