
import Link from "next/link";
import { RiHomeLine } from "react-icons/ri";

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-blue-500 to-green-500">
    <div className="bg-white text-black px-10 py-10 w-1/2 justify-between gap-5 flex flex-col">
        <Link href="/" className="flex flex-row gap-1 items-center hover:bg-slate-50 p-4"> <RiHomeLine /> Home </Link>
      
        <Link href="/projects/project1" className="flex flex-row gap-1 items-center hover:bg-slate-50 p-4"> Currency converter </Link>
        <Link href="/projects/project2" className="flex flex-row gap-1 items-center hover:bg-slate-50 p-4"> Days until date </Link>
        <Link href="/projects" className="flex flex-row gap-1 items-center hover:bg-slate-50 p-4"> Project 3 - to be added... </Link>
        <Link href="/projects" className="flex flex-row gap-1 items-center hover:bg-slate-50 p-4"> Project 4 - to be added ...</Link>
    </div>
  </main>
  );
}
