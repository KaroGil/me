import Image from "next/image";
import Link from "next/link";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { GrProjects, GrBlockQuote } from "react-icons/gr";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-24 bg-gradient-to-br from-blue-500 to-green-500 hover:via-white-200	to-85%">
      <div className="bg-white text-black p-6 md:p-10 w-full max-w-sm md:max-w-md lg:max-w-lg justify-between gap-5 flex flex-col">
        <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
            <Image
              src="/KarolinaGil.png"
              alt="Karolina Gil"
              width={200}
              height={200}
              className="rounded-full"
            />
          <div className="flex flex-col items-center justify-center text-center gap-1 md:text-left ">
            <h1 className="text-4xl font-bold">Karolina Gil</h1>
            <p> I am a 22 year old Data Science student at UiB</p>
          </div>
        </div>
        <div className="flex flex-row gap-4 justify-evenly">
          <Link href="/projects" className="flex flex-row gap-1 items-center"><GrProjects /> Projects</Link>
          <Link href="https://www.linkedin.com/in/karolina-gil-6bb5361a2/" target="_blank"><AiOutlineLinkedin  className="size-6"/></Link>
          <Link href="https://github.com/KaroGil" target="_blank"><VscGithub className="size-6"/></Link>
          <Link href="/articles" className="flex flex-row gap-1 items-center"><GrBlockQuote /> Articles</Link>
        </div>
      </div>
    </main>
  );
}
