import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-3xl font-serif font-bold mb-6">Squares N' Cubes</h3>
                        <p className="text-gray-400 max-w-sm mb-8 font-light leading-relaxed">
                            Based in Hyderabad, defining global standards in architecture and interior design.
                            Crafting sanctuaries that inspire and endure.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 tracking-wide">EXPLORE</h4>
                        <ul className="space-y-4">
                            <li><a href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</a></li>
                            <li><a href="/portfolio" className="text-gray-400 hover:text-white transition-colors text-sm">Portfolio</a></li>
                            <li><a href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Services</a></li>
                            <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 tracking-wide">NEWSLETTER</h4>
                        <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest updates.</p>
                        <form className="flex flex-col space-y-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-white text-black px-4 py-3 font-medium hover:bg-gray-200 transition-colors uppercase tracking-widest text-xs"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© 2025 Squares N' Cubes. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
