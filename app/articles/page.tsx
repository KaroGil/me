import Link from "next/link";
import { RiHomeLine } from "react-icons/ri";

export default function Articles() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-blue-500 to-green-500">
    <div className="bg-white text-black px-10 py-10 w-1/2 justify-between gap-5 flex flex-col">
        <Link href="/" className="flex flex-row gap-1 items-center hover:bg-slate-50 p-4"> <RiHomeLine /> Home </Link>

        <h1 className="text-xl font-bold underline">Articles about me: </h1>
      
        <Link target="_blank" href="https://www.uib.no/ii/160296/karolina-studerer-data-science" className="flex flex-row gap-1 items-center hover:bg-slate-50 p-4">Karolina studerer data science</Link>

    </div>
  </main>
  );
}
