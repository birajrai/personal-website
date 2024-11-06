import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow w-full">{children}</main>
            <Footer />
        </div>
    )
}
