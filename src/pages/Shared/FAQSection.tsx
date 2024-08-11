// FAQSection.jsx
import { motion } from 'framer-motion';
import BlurFade from '@/components/magicui/blur-fade'; // Assuming you have this component

const faqs = [
  { question: 'How do I create an account?', answer: 'Click on the Sign Up button and follow the instructions.' },
  { question: 'How do I apply for a job?', answer: 'Browse job listings and click on Apply for the job you’re interested in.' },
  { question: 'Can I update my profile?', answer: 'Yes, you can update your profile by visiting the Profile section.' },
];

const FAQSection = () => {
  return (
    <div className="w-full bg-primary-foreground py-16">
      <BlurFade delay={0.25} inView>
        <div className="max-w-screen-xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold text-primary mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-primary-foreground p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
                <p className="text-primary">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </BlurFade>
    </div>
  );
};

export default FAQSection;
