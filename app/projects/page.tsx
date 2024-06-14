import Link from "next/link";
import { RiHomeLine } from "react-icons/ri";

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-24 bg-gradient-to-br from-blue-500 to-green-500">
    <div className="bg-white text-black p-6 md:p-10 w-full max-w-sm md:max-w-md lg:max-w-lg justify-between gap-5 flex flex-col">
        <Link href="/" className="flex flex-row gap-1 items-center hover:bg-slate-50 p-4"> <RiHomeLine /> Home </Link>
      
        <Link href="/projects/project1" className="flex flex-row gap-1 items-center hover:bg-slate-50 p-4"> Currency converter </Link>
        <Link href="/projects/project2" className="flex flex-row gap-1 items-center hover:bg-slate-50 p-4"> Days until date </Link>
        <Link href="/projects/project3" className="flex flex-row gap-1 items-center hover:bg-slate-50 p-4"> Project 3: Document travels; in progress... </Link>
        <Link href="/projects/project4" className="flex flex-row gap-1 items-center hover:bg-slate-50 p-4"> Project 4 - to be added ...</Link>
        <Link href="/projects/project5" className="flex flex-row gap-1 items-center hover:bg-slate-50 p-4"> Project 5 - Interactive Map</Link>

    </div>
  </main>
  );
}
