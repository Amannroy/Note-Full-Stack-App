import Link from 'next/link';

export default function Navbar(){
    return(
        <nav className='flex justify-between items-center bg-blue-500 px-8 py-3'>
            <Link className="text-white font-bold" 
            href={"/"}>
             My Notes
            </Link>
            <Link className="bg-yellow-200 p-2 rounded" 
            href={"/addTopic"}>
            Add Topic
            </Link>
        </nav>
    );
}