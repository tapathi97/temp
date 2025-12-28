import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    { id: 1, title: 'The Azure Villa', category: 'Residential', image: 'https://images.unsplash.com/photo-1600596542815-60c37c663045?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80' },
    { id: 2, title: 'Helix Tower', category: 'Commercial', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80' },
    { id: 3, title: 'Urban Loft', category: 'Residential', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2666&q=80' },
    { id: 4, title: 'Tech Hub Office', category: 'Commercial', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2301&q=80' },
    { id: 5, title: 'Zen Spa', category: 'Commercial', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80' },
    { id: 6, title: 'Riverside Duplex', category: 'Residential', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80' },
    { id: 7, title: 'Eco Factory', category: 'Industrial', image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80' },
    { id: 8, title: 'Minimalist Studio', category: 'Residential', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80' },
    { id: 9, title: 'Skyline Penthouse', category: 'Residential', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80' },
];

const categories = ['All', 'Residential', 'Commercial', 'Industrial'];

export default function Portfolio() {
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <div className="pt-32 pb-20 px-4 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-serif mb-6">Our Portfolio</h1>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        A curated selection of our finest work, showcasing architectural excellence and interior innovation.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center mb-12 gap-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 text-sm font-medium tracking-widest uppercase transition-all duration-300 rounded-full border ${filter === cat
                                    ? 'bg-black text-white border-black'
                                    : 'bg-transparent text-gray-500 border-transparent hover:border-gray-300'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative overflow-hidden aspect-[4/3] cursor-pointer"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                                    <h3 className="text-2xl font-serif mb-2">{project.title}</h3>
                                    <p className="text-sm uppercase tracking-widest text-gray-300">{project.category}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
