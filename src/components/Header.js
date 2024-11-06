// src/components/Header.js
import Link from 'next/link'

export default function Header() {
    return (
        <header className="bg-blue-600 text-white py-4">
            <div className="container mx-auto flex justify-around">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/about" className="hover:underline">About</Link>
                <Link href="/gallery" className="hover:underline">Gallery</Link>
            </div>
        </header>
    )
}
