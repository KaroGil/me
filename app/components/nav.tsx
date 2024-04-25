import Link from 'next/link'
import { GrProjects } from 'react-icons/gr'
import { RiHomeLine } from 'react-icons/ri'

export default function Nav() {
    return (
        <div className='flex flex-row justify-between'>
            <Link href="/" className="flex flex-row gap-1 items-center hover:bg-slate-50 p-4"> <RiHomeLine /> Home </Link>
            <Link href="/projects" className="flex flex-row gap-1 items-center hover:bg-slate-50 p-4"><GrProjects /> Projects</Link>
        </div>
    )
}
