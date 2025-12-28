import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
    return (
        <div className="pt-32 pb-20 px-4 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-serif mb-8">Get in Touch</h1>
                        <p className="text-gray-500 text-lg mb-12 max-w-md">
                            Ready to start your project? Contact us for a consultation and let's build something extraordinary together.
                        </p>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-start space-x-6">
                                <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center shrink-0">
                                    <MapPin className="text-black" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-serif font-bold mb-2">Our Studio</h4>
                                    <p className="text-gray-500 leading-relaxed">
                                        Level 4, Square One,<br />
                                        Jubilee Hills, Hyderabad,<br />
                                        Telangana 500033
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6">
                                <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center shrink-0">
                                    <Mail className="text-black" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-serif font-bold mb-2">Email Us</h4>
                                    <p className="text-gray-500">hello@squaresncubes.com</p>
                                    <p className="text-gray-500">careers@squaresncubes.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6">
                                <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center shrink-0">
                                    <Phone className="text-black" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-serif font-bold mb-2">Call Us</h4>
                                    <p className="text-gray-500">+91 98765 43210</p>
                                    <p className="text-gray-500">+91 40 1234 5678</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-neutral-50 p-8 md:p-12"
                    >
                        <h3 className="text-2xl font-serif mb-8">Send us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-black transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input type="email" className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-black transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                <input type="text" className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-black transition-colors" placeholder="Project Inquiry" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea rows={6} className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-black transition-colors" placeholder="Tell us about your project..."></textarea>
                            </div>

                            <button type="submit" className="w-full bg-black text-white py-4 font-medium tracking-widest uppercase hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                                Send Message <Send size={16} />
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-20 w-full h-[400px] bg-gray-200 grayscale contrast-125 filter">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.997524945143!2d78.39796005!3d17.44778005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x11bbe7be7792411b!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1652781234567!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
