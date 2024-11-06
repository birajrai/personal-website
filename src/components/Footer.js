export default function Footer() {
    return (
        <footer className="bg-white text-black py-4">
            <div className="container mx-auto px-4 text-center">
                <hr className="my-4 border-t-2 border-gray-300" />
                <p className="text-sm">© {new Date().getFullYear()} Kirat Dewas. All rights reserved.</p>
            </div>
        </footer>
    );
}
