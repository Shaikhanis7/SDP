// CallToActionSection.jsx
import { motion } from 'framer-motion';
import BlurFade from '@/components/magicui/blur-fade'; 

const CallToActionSection = () => {
  return (
    <div className="w-full bg-accent py-16">
      <BlurFade delay={0.25} inView>
        <div className="max-w-screen-xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p
            className="text-xl text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join thousands of others who have found their perfect job through our platform.
          </motion.p>
          <motion.button
            className="bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Join Now
          </motion.button>
        </div>
      </BlurFade>
    </div>
  );
};

export default CallToActionSection;
