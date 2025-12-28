import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './PageTransition';

// Main Layout Component
export default function Layout() {
    const location = useLocation();

    return (
        <div className="flex flex-col min-h-screen bg-neutral-50 font-sans text-gray-900">
            <ScrollToTop />
            <Navbar />
            <main className="flex-grow">
                <AnimatePresence mode="wait">
                    <PageTransition key={location.pathname}>
                        <Outlet />
                    </PageTransition>
                </AnimatePresence>
            </main>
            <Footer />
        </div>
    );
}
