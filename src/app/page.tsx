import Image from 'next/image'
import poster from "../../public/imgs/poster.png"
import Link from "next/link";

export default function Home() {
    return (
        <div className={"min-h-screen bg-white overflow-visible"}>
            <div className={"flex justify-center items-center p-5 gap-x-5"}>
                {/*<AddMemoryButton/>*/}
                {/*<ObjectMemoryCard title={"My first memory"} description={"Description of the first memory!"}/>*/}

                <div className={"flex flex-col text-md font-poppins font-medium max-w-2xl gap-y-3"}>
                    <p>Hola, amigo! My name is Leo and this is my third personal project, whose goal is to learn new
                        tools
                        that I will use in serious, commercial projects, to practice – not only the new tools, but
                        everything that making a project involves: conceptualizing, implementing, thinking, improvising,
                        solving issues, simply coding and gluing it all together.</p>
                    <p>
                        The idea is quite simple – to revive the spiritless. Let the person make notes about things
                        that
                        surround them, that are precious, that carry memories, that carry life – life that is not seen
                        by
                        others. And let others see it, feel it, touch it.
                    </p>
                    <p>
                        If I’m honest, that sounded way too poetic. But hopefully you do enjoy my creation – or at
                        least
                        skills. Thank you for visiting and spending this moment with me.
                    </p>
                    <p className={"mt-4 font-bold flex items-center gap-x-2"}>Ready to start? Add your
                        <Link href={"/me/add"}>
                            <button
                                className={"hover:text-brandTangerine transition hover:scale-110 p-2 border-2 border-black hover:border-brandTangerine rounded-md"}>
                                first memory
                            </button>
                        </Link>
                    </p>
                </div>
                <Image src={poster} alt="Main page poster" width={350} height={350}
                       className={"rounded-md "}/>

            </div>
        </div>
    );
}
