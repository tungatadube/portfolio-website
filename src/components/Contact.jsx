import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: false, message: '' });

    // Placeholder for EmailJS integration
    // You'll need to set up EmailJS and add your credentials
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Success
      setFormStatus({
        loading: false,
        success: true,
        error: false,
        message: 'Message sent successfully! I\'ll get back to you soon.',
      });

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ loading: false, success: false, error: false, message: '' });
      }, 5000);
    } catch (error) {
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Failed to send message. Please try again or email me directly.',
      });
    }
  };

  const contactInfo = [
    {
      icon: <HiMail className="w-6 h-6" />,
      label: 'Email',
      value: 'tungatadube@gmail.com',
      href: 'mailto:tungatadube@gmail.com',
    },
    {
      icon: <HiPhone className="w-6 h-6" />,
      label: 'Phone',
      value: '+61 0408 704 216',
      href: 'tel:+61408704216',
    },
    {
      icon: <HiLocationMarker className="w-6 h-6" />,
      label: 'Location',
      value: 'Adelaide, SA, Australia',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      href: 'https://linkedin.com/in/mduduzifrederickdube',
      label: 'LinkedIn',
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      href: 'https://github.com/tungatadube',
      label: 'GitHub',
    },
    {
      icon: <FaTwitter className="w-6 h-6" />,
      href: 'https://x.com/Tungata_zebiwe',
      label: 'Twitter',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-primary/15 via-transparent to-transparent opacity-50" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-radial from-secondary/10 via-transparent to-transparent opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6 rounded-full" />
          <p className="text-center text-gray-light text-lg mb-12 max-w-2xl mx-auto">
            I'm currently available for backend engineering, microservices architecture, or DevOps
            roles in Adelaide. Let's connect!
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.label}
              href={info.href}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-dark-lighter/50 backdrop-blur-lg border border-primary/20 hover:border-primary/40 rounded-xl p-6 text-center transition-all group"
            >
              <div className="flex justify-center mb-3 text-primary group-hover:scale-110 transition-transform">
                {info.icon}
              </div>
              <h3 className="text-white font-semibold mb-2">{info.label}</h3>
              <p className="text-gray-light">{info.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto bg-dark-lighter/50 backdrop-blur-lg border border-primary/20 rounded-2xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-darker/50 border border-gray-dark/50 rounded-lg text-white placeholder-gray-light/50 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-darker/50 border border-gray-dark/50 rounded-lg text-white placeholder-gray-light/50 focus:outline-none focus:border-primary transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-white font-semibold mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-darker/50 border border-gray-dark/50 rounded-lg text-white placeholder-gray-light/50 focus:outline-none focus:border-primary transition-colors"
                placeholder="What is this regarding?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white font-semibold mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 bg-dark-darker/50 border border-gray-dark/50 rounded-lg text-white placeholder-gray-light/50 focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            {formStatus.message && (
              <div
                className={`p-4 rounded-lg ${
                  formStatus.success
                    ? 'bg-green-500/20 border border-green-500/50 text-green-300'
                    : 'bg-red-500/20 border border-red-500/50 text-red-300'
                }`}
              >
                {formStatus.message}
              </div>
            )}

            <motion.button
              type="submit"
              disabled={formStatus.loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-primary text-white font-semibold py-4 px-6 rounded-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formStatus.loading ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center gap-6 mt-12"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 bg-dark-lighter/50 backdrop-blur-lg border-2 border-primary/30 hover:border-primary hover:bg-primary rounded-full flex items-center justify-center text-primary hover:text-white transition-all shadow-lg"
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
