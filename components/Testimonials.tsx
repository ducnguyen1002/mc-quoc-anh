"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Event Director, TechCorp',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "Alexander made our annual gala absolutely perfect. His professionalism and ability to connect with our audience was outstanding. Every moment flowed seamlessly, and our guests were thoroughly engaged throughout the evening.",
      event: 'Corporate Gala Dinner',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Store Owner, Luxe Boutique',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "The energy Alexander brought to our grand opening was incredible! He knew exactly how to work the crowd and create excitement around our brand launch. Sales exceeded our expectations, and we owe much of that success to his hosting.",
      event: 'Grand Opening',
    },
    {
      id: 3,
      name: 'Emily & David Rodriguez',
      role: 'Happy Couple',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "Our wedding day was everything we dreamed of and more, thanks to Alexander. He handled every transition beautifully, kept our guests entertained, and made sure we could just focus on enjoying our special day. Absolutely magical!",
      event: 'Wedding Reception',
    },
    {
      id: 4,
      name: 'Robert Kim',
      role: 'CEO, Innovation Labs',
      image: 'https://images.pexels.com/photos/1043424/pexels-photo-1043424.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "Alexander has hosted three major events for us, and each time he exceeds expectations. His preparation is meticulous, his delivery is flawless, and he has this amazing ability to adapt to any audience. Simply the best MC we've worked with.",
      event: 'Product Launch',
    },
    {
      id: 5,
      name: 'Jennifer Walsh',
      role: 'Charity Director, Hope Foundation',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: "For our charity fundraiser, Alexander struck the perfect balance between entertainment and sincerity. He helped us raise 40% more than our goal while keeping the atmosphere light and engaging. A true professional with a heart.",
      event: 'Fundraising Gala',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what event organizers and couples say 
            about working with me.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-gray-800/50 border-gray-700 p-8 md:p-12">
            <CardContent className="p-0">
              <div className="flex items-start mb-6">
                <Quote className="h-12 w-12 text-blue-400 mr-4 flex-shrink-0 mt-2" />
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                    "{testimonials[currentIndex].text}"
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-400">{testimonials[currentIndex].role}</p>
                    <p className="text-blue-400 text-sm">
                      {testimonials[currentIndex].event}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button
                    onClick={prevTestimonial}
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    onClick={nextTestimonial}
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-blue-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}