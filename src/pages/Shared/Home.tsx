import BlurFade from '@/components/magicui/blur-fade';


export default function Home(){
  return (
    <div className="flex  flex-col items-center justify-center bg-primary-foreground">
      <BlurFade delay={0.25} inView>
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">Find Your Dream Job</h1>
          <p className="mt-4 text-lg text-gray-300">
            Search millions of jobs and find the perfect fit for your career.
          </p>
          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Search Jobs
          </button>
        </div>
      </BlurFade>

    </div>
  );
}