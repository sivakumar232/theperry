import Link from 'next/link';

export default function Navbar() {
    const navLinks = [
        { name: 'Our Work', href: '/#work' },
        { name: 'Our Services', href: '/#services' },
        { name: 'Our Campaigns', href: '/#campaigns' },
        { name: 'About', href: '/#about' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-beige/5">
            <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
                {/* Left: Logo */}
                <Link href="/" className="text-xl font-bold font-switzer tracking-tight text-beige hover:text-beige/90 transition-colors">
                    The Perry
                </Link>

                {/* Middle: Navigation Links */}
                <div className="hidden md:flex items-center gap-8 ">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium font-clash text-beige hover:text-beige transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right: CTA Button */}
                <div>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium font-clash transition-all duration-300 bg-beige text-black rounded-full hover:bg-beige hover:-translate-y-0.5"
                    >
                        Get in Touch
                    </Link>
                </div>
            </div>
        </nav>
    );
}
