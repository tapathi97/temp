import { motion } from 'framer-motion';
import { ArrowRight, Ruler, Home as HomeIcon, Hammer } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/40 z-10"></div>
                    {/* Video Placeholder */}
                    <div className="w-full h-full bg-gray-900 flex items-center justify-center text-gray-700">
                        {/* Replace with actual video later */}
                        <img
                            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2666&q=80"
                            alt="Hero Background"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-bold mb-6 tracking-tight leading-tight"
                    >
                        Shaping Skylines, <br />
                        <span className="text-gray-200">Crafting Sanctuaries.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-lg md:text-xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto mb-10"
                    >
                        A minimal luxury architectural experience.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.5 }}
                    >
                        <Link
                            to="/portfolio"
                            className="inline-flex items-center px-8 py-4 bg-white text-black font-medium tracking-widest text-sm hover:bg-gray-100 transition-colors uppercase"
                        >
                            View Our Work
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* About Teaser */}
            <section className="py-24 md:py-32 bg-white px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="block text-sm font-bold tracking-widest text-gray-500 mb-6 uppercase"
                    >
                        Who We Are
                    </motion.span>
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-3xl md:text-5xl font-serif text-gray-900 leading-snug mb-12"
                    >
                        Based in Hyderabad, we define global standards in architecture and design. We don't just build structures; we curate lifestyles.
                    </motion.h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <Link to="/contact" className="text-black border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
                            Get in touch with us <ArrowRight className="inline ml-1" size={16} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-neutral-50 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 md:flex justify-between items-end">
                        <div className="mb-6 md:mb-0">
                            <h3 className="text-4xl font-serif mb-4">Our Expertise</h3>
                            <p className="text-gray-500 max-w-md">Comprehensive design solutions tailored to your vision.</p>
                        </div>
                        <Link to="/services" className="text-sm font-bold tracking-widest uppercase hover:text-gray-600 transition-colors">
                            View All Services
                        </Link>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {/* Service 1 */}
                        <motion.div variants={fadeInUp} className="group bg-white p-10 hover:shadow-xl transition-all duration-500 cursor-pointer">
                            <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-white transition-colors duration-500">
                                <Ruler size={24} />
                            </div>
                            <h4 className="text-2xl font-serif mb-4">Architecture</h4>
                            <p className="text-gray-500 mb-8 leading-relaxed">
                                From conceptual sketches to structural mastery, we design buildings that stand as landmarks of innovation.
                            </p>
                            <span className="inline-block border-b border-gray-300 pb-1 group-hover:border-black transition-colors duration-300">Learn More</span>
                        </motion.div>

                        {/* Service 2 */}
                        <motion.div variants={fadeInUp} className="group bg-white p-10 hover:shadow-xl transition-all duration-500 cursor-pointer">
                            <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-white transition-colors duration-500">
                                <HomeIcon size={24} />
                            </div>
                            <h4 className="text-2xl font-serif mb-4">Interior Design</h4>
                            <p className="text-gray-500 mb-8 leading-relaxed">
                                We craft interiors that reflect your personality, blending aesthetics with functionality for a truly bespoke experience.
                            </p>
                            <span className="inline-block border-b border-gray-300 pb-1 group-hover:border-black transition-colors duration-300">Learn More</span>
                        </motion.div>

                        {/* Service 3 */}
                        <motion.div variants={fadeInUp} className="group bg-white p-10 hover:shadow-xl transition-all duration-500 cursor-pointer">
                            <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-white transition-colors duration-500">
                                <Hammer size={24} />
                            </div>
                            <h4 className="text-2xl font-serif mb-4">Construction</h4>
                            <p className="text-gray-500 mb-8 leading-relaxed">
                                Precision engineering and high-quality materials ensure that our designs are built to last generations.
                            </p>
                            <span className="inline-block border-b border-gray-300 pb-1 group-hover:border-black transition-colors duration-300">Learn More</span>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
