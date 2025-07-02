"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Calendar, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        budget: '',
        message: '',
      });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to make your event unforgettable? Get in touch to discuss your needs 
            and receive a personalized quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-semibold">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-semibold">alex@alexanderchen.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-semibold">San Francisco Bay Area</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-white mb-4">Quick Facts</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  Available for events nationwide
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  Flexible scheduling options
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  Custom packages available
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  24/7 event support
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <Calendar className="h-6 w-6 text-blue-400 mr-2" />
                Book Your Event
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-gray-300">
                    Your message has been sent successfully. I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-300 text-sm font-medium mb-2 block">
                        Full Name *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm font-medium mb-2 block">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-300 text-sm font-medium mb-2 block">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm font-medium mb-2 block">
                        Event Type *
                      </label>
                      <Select onValueChange={(value) => handleInputChange('eventType', value)}>
                        <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gala-dinner">Gala Dinner</SelectItem>
                          <SelectItem value="grand-opening">Grand Opening</SelectItem>
                          <SelectItem value="wedding">Wedding</SelectItem>
                          <SelectItem value="corporate">Corporate Event</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-300 text-sm font-medium mb-2 block">
                        Event Date
                      </label>
                      <Input
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => handleInputChange('eventDate', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm font-medium mb-2 block">
                        Budget Range
                      </label>
                      <Select onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5k">Under $5,000</SelectItem>
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-plus">$25,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-300 text-sm font-medium mb-2 block">
                      Event Details
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 min-h-[120px]"
                      placeholder="Tell me about your event, number of guests, venue, special requirements, etc."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}