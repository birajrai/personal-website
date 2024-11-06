import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faImages, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';

const menuItems = [
    { name: 'Home', href: '/', icon: faHome },
    { name: 'About', href: '/about', icon: faInfoCircle },
    { name: 'Gallery', href: '/gallery', icon: faImages }
];

const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/neppixel', icon: faFacebook, color: 'text-blue-600' },
    { name: 'GitHub', href: 'https://github.com/birajrai', icon: faGithub, color: 'text-gray-900' },
    { name: 'Discord', href: '/discord', icon: faDiscord, color: 'text-[#7289DA]' }
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    return (
        <header className="bg-white text-gray-900 py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-3xl font-extrabold text-[#20262E] uppercase">
                    Biraj<span className="text-[70px] text-[#8f40da]">.</span>
                </Link>

                <div className="hidden md:flex space-x-4">
                    <div className="flex space-x-4">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center text-gray-900 hover:text-[#8f40da] transition-colors duration-300"
                            >
                                <FontAwesomeIcon icon={item.icon} className="mr-2 text-xl" />
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex space-x-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-2xl ${social.color} hover:text-opacity-80 transition-all duration-300`}
                            >
                                <FontAwesomeIcon icon={social.icon} />
                            </a>
                        ))}
                    </div>
                </div>

                <button
                    onClick={toggleMenu}
                    className="md:hidden text-2xl text-gray-900 focus:outline-none"
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>

            <div
                className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                onClick={toggleMenu}
            >
                <div
                    className={`fixed right-0 top-0 bg-white text-gray-900 w-3/4 h-full p-6 transform transition-transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        className="absolute top-4 right-4 text-gray-900"
                        onClick={toggleMenu}
                    >
                        <FontAwesomeIcon icon={faTimes} size="lg" />
                    </button>

                    <ul className="space-y-4">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="flex items-center text-xl hover:text-[#8f40da] transition-colors duration-300"
                                    onClick={toggleMenu}
                                >
                                    <FontAwesomeIcon icon={item.icon} className="mr-2" />
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-2xl ${social.color} hover:text-opacity-80 mr-4 transition-all duration-300`}
                            >
                                <FontAwesomeIcon icon={social.icon} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}
