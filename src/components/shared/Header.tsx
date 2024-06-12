
import { pb } from '@/state/pb/client_config';
import Link from 'next/link';
import React, { useState } from 'react';

const Header = (user: any) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <header className="py-4 bg-black sm:py-6 text-white fixed w-full" >
      <div className=" mx-auto container px-8 ">
        <div className="flex items-center justify-between">
          <div className="shrink-0">
            <Link href="/">
              PEP
            </Link>
          </div>

          <div className="flex md:hidden">
            <button type="button" className="text-white" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
              <span x-show={!expanded} aria-hidden="true">
                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </span>

              <span x-show={expanded} aria-hidden="true">
                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
            </button>
          </div>

          <nav className="text-white hidden ml-auto mr-10 space-x-10 md:flex md:items-center md:justify-end lg:space-x-12">
            {!user && <Link href="/auth">Login</Link>}
            <Link href="/admin">Admin</Link>
          </nav>

          <div className="relative hidden md:items-center md:justify-center md:inline-flex group">
            <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
            <a href="#" title="" className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full" role="button"> Start free trial </a>
          </div>
        </div>

        {expanded && (
          <nav>
            <div className="flex flex-col pt-8 pb-4 space-y-6">
              {!user && <Link href="/auth">Login</Link>}
              <Link href="/admin">Admin</Link>
              <div className="relative inline-flex items-center justify-center group">
                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                <a href="#" title="" className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full" role="button"> Start free trial </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;