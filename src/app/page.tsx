import AddMemoryButton from "@/components/buttons/AddMemoryButton";
import ObjectMemoryCard from "@/components/cards/ObjectMemoryCard";

export default function Home() {
    return (
        <div className={"min-h-screen bg-white overflow-visible"}>
            <div className={"flex flex-col items-center justify-center p-5 gap-y-5"}>
                <AddMemoryButton/>
                <ObjectMemoryCard/>
            </div>
        </div>
    );
}
