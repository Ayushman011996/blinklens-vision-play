
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Activity, Glasses } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl animate-fade-up">
            <div className="inline-flex items-center rounded-full bg-brand-blue/10 px-3 py-1 text-sm text-brand-blue">
              <span className="mr-1">✓</span> AI-Powered Vision Test
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight heading-gradient">
              Check Your Vision from Home
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              BlinkLens uses advanced AI technology to help you check your eyesight and estimate your lens power - all through a simple, interactive game.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/test">
                <Button 
                  className="bg-brand-blue hover:bg-brand-dark-blue text-white text-lg px-6 py-6"
                  size="lg"
                >
                  Start Free Test <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button 
                variant="outline"
                className="border-brand-blue text-brand-blue hover:bg-brand-blue/10 text-lg px-6 py-6"
                size="lg"
                onClick={() => {
                  const howItWorksSection = document.getElementById('how-it-works');
                  if (howItWorksSection) {
                    howItWorksSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Learn How It Works
              </Button>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-300 flex items-center justify-center text-white text-xs">AL</div>
                <div className="w-8 h-8 rounded-full bg-green-300 flex items-center justify-center text-white text-xs">JD</div>
                <div className="w-8 h-8 rounded-full bg-purple-300 flex items-center justify-center text-white text-xs">SM</div>
                <div className="w-8 h-8 rounded-full bg-yellow-300 flex items-center justify-center text-white text-xs">RK</div>
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">7,800+</span> people tested in the last month
              </p>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-blue/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-brand-teal/20 rounded-full filter blur-2xl"></div>
            
            <div className="relative glass-card rounded-2xl p-6 shadow-lg max-w-md mx-auto">
              <div className="absolute -top-4 -left-4 bg-white rounded-full p-3 shadow-md">
                <Eye className="h-6 w-6 text-brand-blue" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-md">
                <Glasses className="h-6 w-6 text-brand-blue" />
              </div>
              
              <div className="bg-brand-light-gray rounded-xl p-4 mb-6 shadow-inner">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg bg-white shadow-md">
                  <div className="flex items-center justify-center h-full">
                    <div className="text-9xl text-brand-blue font-bold opacity-25">E</div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Activity className="h-20 w-20 text-brand-teal animate-pulse-slow" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-center text-brand-dark-gray">
                  AI Vision Analysis
                </h3>
                <div className="flex justify-between items-center px-2">
                  <div className="text-sm">Test Progress</div>
                  <div className="text-sm font-medium">68%</div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-brand-blue rounded-full h-2 w-2/3"></div>
                </div>
                <div className="pt-2 text-center">
                  <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
                    Looking Good!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
