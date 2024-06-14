import Link from "next/link";


export default function ExternLink({ src, text } : { src: string, text : string}) {
    return (
        <Link 
        href={src}
        target="_blank"
        className="flex flex-row gap-1 items-center rounded-md p-4 bg-gradient-to-br from-blue-400 to-green-400 hover:bg-gradient-to-br hover:from-green-400 hover:to-blue-400"
        > {text} </Link>
    );
}