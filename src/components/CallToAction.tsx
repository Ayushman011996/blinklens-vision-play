
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-brand-blue to-brand-teal text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to check your vision?
              </h2>
              <p className="text-lg opacity-90">
                It only takes a few minutes to complete your test and get estimated lens power results.
              </p>
              
              <ul className="space-y-3">
                {[
                  "No equipment needed - just your device",
                  "AI-powered accuracy",
                  "Results in minutes",
                  "Free basic test available"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4">
                <Button 
                  className="bg-white hover:bg-gray-100 text-brand-blue font-medium text-lg px-8 py-6"
                  size="lg"
                >
                  Start Free Test <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-center space-y-6">
                <div className="inline-block rounded-full bg-white/20 p-4 backdrop-blur-sm">
                  <img 
                    src="https://i.pravatar.cc/150?img=8" 
                    alt="Happy User" 
                    className="w-20 h-20 rounded-full border-4 border-white/40"
                  />
                </div>
                
                <blockquote className="text-lg italic">
                  "I was skeptical at first, but BlinkLens was incredibly accurate. My optometrist confirmed the results were very close to their measurements!"
                </blockquote>
                
                <div className="font-medium">
                  David Roberts
                  <div className="text-sm opacity-80">Marketing Executive</div>
                </div>
                
                <div className="pt-2">
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-300 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Star = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg>
);

export default CallToAction;
