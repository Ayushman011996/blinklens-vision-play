
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Software Developer",
    image: "https://i.pravatar.cc/150?img=11",
    quote: "BlinkLens saved me a trip to the optometrist. The results were surprisingly accurate when I compared them to my actual prescription!",
    rating: 5
  },
  {
    name: "Sarah Miller",
    role: "Teacher",
    image: "https://i.pravatar.cc/150?img=5",
    quote: "As someone who works with screens all day, being able to check my vision regularly has been incredibly helpful. Simple and effective!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Graphic Designer",
    image: "https://i.pravatar.cc/150?img=12",
    quote: "The interface is intuitive and the test feels like playing a game. Got my results in minutes and they matched my last eye exam.",
    rating: 4
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gradient-to-b from-white to-brand-light-gray section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Real Results from Real Users
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it - here's what people are saying about their BlinkLens experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-6 shadow-lg transform transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <Star key={i + testimonial.rating} className="h-5 w-5 text-gray-300" />
                ))}
              </div>
              
              <blockquote className="text-gray-600 italic mb-4">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block bg-white px-6 py-4 rounded-lg shadow-md">
            <div className="flex items-center justify-center space-x-2">
              <div className="text-brand-blue font-bold text-xl">4.8</div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <div className="text-gray-600">from 500+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
