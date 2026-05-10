import Link from 'next/link'

export default function NotFound() {
    return (
        <div className={"min-h-screen flex flex-col items-center font-inter"}>
            <h2 className={"font-semibold text-6xl m-7"}>Your Memory or Page Not Found</h2>
            <p className={"text-2xl m-3"}>Sorry, we could not find the specific memory you are looking for.</p>
            <Link href="/memories" className="text-blue-500 underline font-poppins text-xl">
                Back to all memories
            </Link>
        </div>
    )
}