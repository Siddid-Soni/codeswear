import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = () => {
    return (
        <nav className='flex flex-col md:flex-row justify-center md:justify-start items-center py-2 shadow-md'>
            <Link href={'/'}>
                <a className="logo mx-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                </a>
            </Link>
            <div className="nav">
                <ul className='flex items-center space-x-2 font-semibold text-md'>
                    <li><Link href={'/tshirts'}><a>Tshirts</a></Link></li>
                    <li><Link href={'/hoodies'}><a>Hoodies</a></Link></li>
                    <li><Link href={'/stickers'}><a>Stickers</a></Link></li>
                    <li><Link href={'/mugs'}><a>Mugs</a></Link></li>
                </ul>
            </div>
            <div className="cart absolute top-4 right-0 mx-5">
                <button><AiOutlineShoppingCart className='text-xl md:text-2xl'/></button>
            </div>
        </nav>
    )
}

export default Navbar