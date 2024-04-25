import Nav from "@/app/components/nav";
import Link from "next/link";

export default function Project2() {
    
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-blue-500 to-green-500">
        <div className="bg-white text-black px-10 py-10 w-1/2 justify-between gap-5 flex flex-col">
            <Nav />
            <h1 className="text-4xl font-bold">Days until date</h1>
            <p> This is another one of my projects. This one is rather simple and was one I made because I was exited for the new hunger games movie to come out.
                so the primary function of this project is simply to show the time until a given date, or how many days have passed if the date is in the past.
            </p>
            <Link 
            href="https://days-until-date.vercel.app/" 
            target="_blank"
            className="flex flex-row gap-1 items-center rounded-md p-4 bg-gradient-to-br from-blue-400 to-green-400 hover:bg-gradient-to-br hover:from-green-400 hover:to-blue-400"
            > Go to project </Link>

        </div>
    </main>
  );
}
