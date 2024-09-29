import Image from "next/image";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 font-mono">
      <div className="bg-green-500 text-white py-6 text-center grid grid-cols-4 gap-6 p-6">
        {/* Header */}
        {/* Om meg seksjon */}
        <aside className="py-10 px-4 text-center col-span-1">
          <h2 className="text-2xl font-bold text-green-700">Om meg</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-700">
            Hei, jeg er Karolina! Jeg tar en master ved UiB og HVL.
          </p>
        </aside>
        <header className="py-6 text-center col-span-2 flex flex-col justify-center items-center">
          <h1 className="text-4xl">
            Velkommen til Karolina sin personlige portofolio!
          </h1>
          <div className="mt-4 rounded-full border-green-900 bg-green-700 text-white w-44 text-center p-1">
            LES MER
          </div>
        </header>
        <aside className="py-10 px-4 text-center col-span-1 flex flex-col justify-center items-center bg-green-400 bg-opacity-30 rounded-md h-fit">
          <div className="flex flex-row items-center justify-evenly">
            <Link
              href="https://www.linkedin.com/in/karolina-gil-6bb5361a2/"
              target="_blank"
            >
              <AiOutlineLinkedin className="size-6" />
            </Link>
            <Link href="https://github.com/KaroGil" target="_blank">
              <VscGithub className="size-6" />
            </Link>
          </div>
          <Link href="/projects" className="flex flex-row gap-1 items-center">
            Prosjekter
          </Link>
          <Link href="/articles" className="flex flex-row gap-1 items-center">
            Artikler
          </Link>
        </aside>
      </div>
      <div className="grid grid-cols-3 gap-6 p-6">
        {/* Prosjekter seksjon */}
        <section className="py-10 px-4 text-center">
          <h2 className="text-2xl font-bold text-green-600">Prosjekter</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-700">
            Her er en oversikt over prosjektene mine.
          </p>
          <ul className="mt-8 flex flex-col">
            <li className="bg-white rounded-lg shadow-md p-1 m-1 hover:bg-gray-200">
              <h3 className="text-xl font-bold text-green-600">Prosjekt 1</h3>
            </li>
            <li className="bg-white rounded-lg shadow-md p-1 m-1 hover:bg-gray-200">
              <h3 className="text-xl font-bold text-green-600">Prosjekt 2</h3>
            </li>
          </ul>
        </section>

        {/* Image of Karolina */}
        <div className="m-1">
          <Image
            src="/KarolinaGil.png"
            alt="Karolina Gils"
            width={200}
            height={200}
            className="rounded-md border-4 border-green-500"
          />
        </div>
        {/* Artikler seksjon */}
        <section className="py-10 px-4 text-center">
          <h2 className="text-2xl font-bold text-green-600">Artikler</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-700">
            Her er en oversikt over artiklene mine.
          </p>
          <ul className="mt-8 flex flex-col">
            <li className="bg-white rounded-lg shadow-md p-1 m-1 hover:bg-gray-200">
              <h3 className="text-xl font-bold text-green-600">A 1</h3>
            </li>
            <li className="bg-white rounded-lg shadow-md p-1 m-1 hover:bg-gray-200">
              <h3 className="text-xl font-bold text-green-600">A 2</h3>
            </li>
          </ul>
        </section>
      </div>
      {/* Footer med lenker til LinkedIn og GitHub */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <div className="flex justify-center space-x-4">
          <Link
            href="https://www.linkedin.com/in/karolina-gil-6bb5361a2/"
            target="_blank"
          >
            <AiOutlineLinkedin className="size-6" />
          </Link>
          <Link href="https://github.com/KaroGil" target="_blank">
            <VscGithub className="size-6" />
          </Link>
        </div>
        <p className="mt-4">© 2024 Karolina</p>
      </footer>
    </main>
  );
}
