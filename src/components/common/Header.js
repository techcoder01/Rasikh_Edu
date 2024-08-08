
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {

  return (
    <header className="bg-black/60 text-white fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center max-w-5xl">
      <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="Rasikh Logo" width={120} height={40} className="filter brightness-150" />
        </Link>

        <div className="flex space-x-3 items-center">
          <div className='space-x-3 pl-2'>
            <Link href="/login">
              <button className='bg-[#1C85F2] text-white font-semibold px-4 py-1.5 rounded transition duration-300'>
                Login
              </button>    
            </Link>
            <Link href="/signup">
              <button className='bg-[#36393C] text-white font-semibold px-4 py-1.5 rounded transition duration-300'>
                Signup
              </button>    
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;