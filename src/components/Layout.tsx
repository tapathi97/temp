import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

// Main Layout Component
export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen bg-neutral-50 font-sans text-gray-900">
            <ScrollToTop />
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
