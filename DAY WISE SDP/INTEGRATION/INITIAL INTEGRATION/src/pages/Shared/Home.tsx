import { CardWithForm } from '@/components/Altered/CardWithForm';
import { FeaturedCompaniesSection } from '@/components/Altered/FeaturedCompaniesSection';
import { MainComponent } from '@/components/Altered/MainComponent';
import { ParentCard } from '@/components/Altered/ParentCard';
// import { ParentCard } from '@/components/Altered/ParentCard';
import BlurFade from '@/components/magicui/blur-fade';
import { useState } from 'react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex flex-col items-start justify-center bg-primary box-border">
      <BlurFade delay={0.25} inView>
        <div className="bg-primary-foreground pt-10 pb-10 w-[99vw]">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between">
            {/* Text Section */}
            <div className="text-center md:text-left mb-12 md:mb-0">
              <h1 className="text-5xl font-bold text-primary mb-4 leading-tight">
                Find Your Perfect Job 
              </h1>
              <p className="text-lg text-primary mb-6">
                Transform your career with tailored job opportunities. Whether you're seeking a new role or a fresh start, we offer positions across diverse industries that align with your skills and aspirations.
              </p>
              <p className="text-lg text-primary mb-6">
                From dynamic startups to established industry leaders, explore roles that will inspire and challenge you. Embark on your career journey today and unlock endless possibilities. ✨
              </p>
              <div className="text-center md:text-left">
                <button className="bg-primary text-primary-foreground font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300">
                  <span>Explore Opportunities</span>
                </button>
              </div>
            </div>

            {/* Search Section */}
            <div className="md:w-1/2">
              <div className="relative bg-white rounded-lg shadow-lg">
                <input
                  type="text"
                  placeholder="What role are you searching for?"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-3 px-4 pl-12 text-primary-foreground placeholder-primary-foreground rounded-lg border border-primary-foreground/20 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent bg-primary"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-foreground/70 w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"
                  />
                </svg>
              </div>
              <div className="text-center mt-4 flex w-full justify-center">
                <button className="bg-primary text-primary-foreground font-bold py-2 px-6 rounded-xl shadow-lg transition duration-300 flex items-center justify-center rounded-xl">
                  <span>Search Jobs</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Featured Companies */}
      <div className="w-full bg-primary py-16">
      <BlurFade delay={0.25} inView>
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-6">Featured Companies</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Example company logos */}
            <img src="data:image/png;base64,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" alt="Company Logo 1" className="h-16 w-auto"/>
            <img src="data:image/png;base64,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" alt="Company Logo 2" className="h-16 w-auto"/>
            <img src="data:image/png;base64,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" alt="Company Logo 3" className="h-16 w-auto"/>
            <img src="data:image/png;base64,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" alt="Company Logo 4" className="h-16 w-auto"/>
          </div>
        </div>
     </BlurFade>
      </div>
      {/* Job Listings
      <div className="w-full bg-primary-foreground py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="bg-primary shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
              <img src="/path-to/company-logo1.png" alt="Company Logo" className="h-12 w-auto mr-4"/>
              <h2 className="text-xl font-semibold text-primary-foreground">💡 Innovative Software Engineer</h2>
            </div>
            <p className="text-primary-foreground mb-4">Tech Innovators - San Francisco, CA</p>
            <p className="text-primary-foreground mb-4">
              Join a cutting-edge team and work on projects that shape the future of technology. Ideal for those with a passion for solving complex problems and developing innovative solutions. 🌐
            </p>
            <div className="flex gap-2 mb-4">
              <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm">Tech</span>
              <span className="bg-accent text-primary- px-3 py-1 rounded-full text-sm">Full-Time</span>
            </div>
            <button className="bg-accent hover:bg-accent/90 text-primary font-bold py-2 px-4 rounded-lg">
              Apply Now
            </button>
          </div>
          <div className="bg-primary shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
              <img src="/path-to/company-logo2.png" alt="Company Logo" className="h-12 w-auto mr-4"/>
              <h2 className="text-xl font-semibold text-primary-foreground">📈 Visionary Product Manager</h2>
            </div>
            <p className="text-primary-foreground mb-4">Global Ventures - New York, NY</p>
            <p className="text-primary-foreground mb-4">
              Lead impactful product initiatives and guide the vision for our offerings. Ideal for strategic thinkers with a knack for leadership and cross-functional collaboration. 🚀
            </p>
            <div className="flex gap-2 mb-4">
              <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm">Management</span>
              <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm">Remote</span>
            </div>
            <button className="bg-accent hover:bg-accent/90 text-primary font-bold py-2 px-4 rounded-lg">
              Apply Now
            </button>
          </div>
          <div className="bg-primary-foreground shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
              <img src="/path-to/company-logo3.png" alt="Company Logo" className="h-12 w-auto mr-4"/>
              <h2 className="text-xl font-semibold text-primary">🎨 Creative UX Designer</h2>
            </div>
            <p className="text-primary mb-4">Design Wizards - Remote</p>
            <p className="text-primary/70 mb-4">
              Create exceptional user experiences for diverse digital products. Perfect for imaginative designers who thrive on crafting intuitive and engaging user interfaces. 🌟
            </p>
            <div className="flex gap-2 mb-4">
              <span className="bg-accent text-primary-foreground px-3 py-1 rounded-full text-sm">Design</span>
              <span className="bg-accent text-primary-foreground px-3 py-1 rounded-full text-sm">Remote</span>
            </div>
            <button className="bg-accent hover:bg-accent/90 text-primary-foreground font-bold py-2 px-4 rounded-lg">
              Apply Now
            </button>
          </div>
         </div> */}
      {/* </div> */}


      <div className='flex justify-center items-center flex-row'>
           
           <ParentCard/>
      </div>
    <div>
    <FeaturedCompaniesSection/>
    </div>
    {/* <MainComponent/> */}
    <div className="w-full bg-primary py-16">
        <BlurFade delay={0.25} inView>
          <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-6">What Our Users Say</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {/* Add testimonial cards here */}
              
              <div className="bg-primary-foreground shadow-lg rounded-lg p-6 max-w-xs">
                <p className="text-primary mb-4">
                  "This platform helped me find my dream job! The process was easy and the support team was very helpful."
                </p>
                <p className="text-primary font-semibold">- John Doe, Software Engineer</p>
              </div>
              
              <div className="bg-primary-foreground shadow-lg rounded-lg p-6 max-w-xs">
                <p className="text-primary mb-4">
                  "This platform helped me find my dream job! The process was easy and the support team was very helpful."
                </p>
                <p className="text-primary font-semibold">- John Doe, Software Engineer</p>
              </div>
              
              <div className="bg-primary-foreground shadow-lg rounded-lg p-6 max-w-xs">
                <p className="text-primary mb-4">
                  "This platform helped me find my dream job! The process was easy and the support team was very helpful."
                </p>
                <p className="text-primary font-semibold">- John Doe, Software Engineer</p>
              </div>
             
             
            </div>
          </div>
        </BlurFade>
      </div>

      {/* Newsletter Subscription */}
      <div className="w-full bg-primary-foreground py-16">
        <BlurFade delay={0.25} inView>
          <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Stay Updated</h2>
            <p className="text-primary mb-8">
              Subscribe to our newsletter to get the latest job opportunities and career advice delivered straight to your inbox.
            </p>
            <div className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 py-3 px-4 text-primary-foreground placeholder-primary-foreground rounded-lg border border-primary-foreground/20 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent bg-primary"
                />
                <button className="bg-accent text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </div>

  );
}
