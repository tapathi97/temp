import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const galleryImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80', title: 'Riverside Duplex' },
    { id: 2, src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2666&q=80', title: 'Urban Loft' },
    { id: 3, src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80', title: 'Minimalist Studio' },
    { id: 4, src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80', title: 'Zen Spa' },
    { id: 5, src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80', title: 'Helix Tower' },
];

export default function InteractiveGallery() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-10 pl-10 md:pl-20">
                    {/* Title Card */}
                    <div className="flex h-[400px] w-[300px] md:h-[500px] md:w-[400px] shrink-0 flex-col justify-center">
                        <h2 className="text-5xl md:text-8xl font-serif font-bold text-white leading-tight">
                            Featured <br />
                            <span className="text-gray-500">Works</span>
                        </h2>
                        <p className="mt-6 text-gray-400 max-w-xs">
                            Drag or scroll to explore our latest architectural masterpieces.
                        </p>
                    </div>

                    {/* Images */}
                    {galleryImages.map((image) => (
                        <div key={image.id} className="relative group h-[400px] w-[300px] md:h-[500px] md:w-[400px] shrink-0 overflow-hidden bg-gray-800">
                            <img
                                src={image.src}
                                alt={image.title}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                            <div className="absolute bottom-6 left-6">
                                <h3 className="text-2xl font-serif text-white font-medium">{image.title}</h3>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
