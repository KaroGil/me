import Image from "next/image";
import Link from "next/link";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { GrProjects } from "react-icons/gr";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-blue-500 to-green-500 hover:via-white-200	to-85%">
      <div className="bg-white text-black px-10 py-10 w-1/2 justify-between gap-5 flex flex-col">
        <div className="flex flex-row justify-between gap-4">
            <Image
              src="/KarolinaGil.png"
              alt="Karolina Gil"
              width={200}
              height={200}
              className="rounded-full"
            />
          <div className="flex  flex-col items-center justify-center text-center gap-1">
            <h1 className="text-4xl font-bold">Karolina Gil</h1>
            <p> I am a 22 year old Data Science student at UiB</p>
          </div>
        </div>
        <div className="flex flex-row gap-4 justify-evenly">
          <Link href="/projects" className="flex flex-row gap-1 items-center"><GrProjects /> Projects</Link>
          <Link href="https://www.linkedin.com/in/karolina-gil-6bb5361a2/" target="_blank"><AiOutlineLinkedin  className="size-6"/></Link>
          <Link href="https://github.com/KaroGil" target="_blank"><VscGithub className="size-6"/></Link>
        </div>
      </div>
    </main>
  );
}
