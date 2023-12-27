import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <Link href="/">Home</Link>
            <Link  href="/">About</Link>
            <Link  href="/">Contact</Link>
            <Link  href="/">Services</Link>
            
        </div>
    );
};

export default Navbar;