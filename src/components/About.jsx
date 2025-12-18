import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const StatCard = ({ number, label, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="relative bg-gradient-to-br from-dark-lighter to-dark-darker rounded-xl p-6 shadow-lg border border-primary/20 hover:border-primary/40 transition-all group hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-full rounded-t-xl" />
      <div className="text-4xl font-extrabold text-gradient mb-2">{number}</div>
      <div className="text-gray-light/70 text-sm">{label}</div>
    </motion.div>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { number: '6+', label: 'Years Experience' },
    { number: '$2B+', label: 'Annual Transactions' },
    { number: '15M+', label: 'Active Users' },
    { number: '40+', label: 'REST APIs Built' },
  ];

  return (
    <section id="about" className="py-20 bg-dark-lighter dark:bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white dark:text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-full mx-auto mb-12 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 text-gray-light dark:text-gray-light text-lg leading-relaxed"
          >
            <p>
              I'm a backend software engineer with over 6 years of experience architecting and deploying
              enterprise-grade fintech systems. Recently relocated to Adelaide, I bring international
              experience in building high-volume, mission-critical applications.
            </p>
            <p>
              My expertise lies in Spring Boot microservices, Kubernetes orchestration, and CI/CD
              automation. I've successfully led system modernization initiatives, migrated legacy
              applications to cloud-native architectures, and maintained 99.9% uptime for systems
              processing billions in transactions.
            </p>
            <p>
              I'm passionate about building scalable, secure systems and am currently seeking backend
              engineering or DevOps opportunities in Adelaide where I can contribute my experience to
              innovative teams.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                number={stat.number}
                label={stat.label}
                delay={0.3 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
