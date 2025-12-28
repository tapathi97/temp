import { motion } from 'framer-motion';

const services = [
    {
        id: 1,
        title: 'Architecture',
        description: 'We believe that architecture is the art of organizing space. Our approach combines functional requirements with aesthetic vision to create structures that inspire. From residential villas to commercial skyscrapers, we ensure every project is grounded in sustainability and innovation.',
        image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80',
        align: 'left'
    },
    {
        id: 2,
        title: 'Interior Design',
        description: 'Our interior design philosophy centers on the human experience. We curate textures, lighting, and furniture to create environments that evoke emotion. Whether it’s a cozy home or a dynamic office, we tailor every detail to your lifestyle and brand identity.',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
        align: 'right'
    },
    {
        id: 3,
        title: 'Space Planning',
        description: 'Efficient use of space is critical in modern design. We analyze spatial flows and functional needs to optimize layouts for comfort and productivity. Our strategic planning ensures that every square foot is utilized effectively without compromising on style.',
        image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2301&q=80',
        align: 'left'
    },
    {
        id: 4,
        title: 'Consultation & Management',
        description: 'From initial concept to final handover, we provide comprehensive project management services. We coordinate with contractors, vendors, and engineers to ensure your project is delivered on time, within budget, and to the highest standards of quality.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2831&q=80',
        align: 'right'
    }
];

export default function Services() {
    return (
        <div className="pt-32 pb-20 px-4 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <h1 className="text-4xl md:text-6xl font-serif mb-6">Our Services</h1>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                        Holistic design solutions ranging from architectural blueprinting to bespoke interior styling.
                    </p>
                </div>

                <div className="space-y-32">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`flex flex-col ${service.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}
                        >
                            {/* Image Section */}
                            <motion.div
                                initial={{ opacity: 0, x: service.align === 'left' ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8 }}
                                className="w-full md:w-1/2"
                            >
                                <div className="relative overflow-hidden group">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                            </motion.div>

                            {/* Text Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="w-full md:w-1/2"
                            >
                                <span className="text-gray-400 text-sm font-bold tracking-widest uppercase mb-4 block">0{index + 1}</span>
                                <h3 className="text-3xl md:text-4xl font-serif mb-6">{service.title}</h3>
                                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                                    {service.description}
                                </p>
                                <button className="text-black font-medium text-sm tracking-widest uppercase border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
                                    Details
                                </button>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
