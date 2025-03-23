
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MessageSquare, User, Mail, Phone, BriefcaseBusiness, FileText } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from "@/components/ui/use-toast";

const AppointmentPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    area: '',
    date: '',
    time: '',
    message: '',
  });

  const legalAreas = [
    { value: 'corporate', label: 'Corporate Law' },
    { value: 'litigation', label: 'Litigation' },
    { value: 'property', label: 'Property Law' },
    { value: 'family', label: 'Family Law' },
    { value: 'intellectual', label: 'Intellectual Property' },
    { value: 'employment', label: 'Employment Law' },
    { value: 'tax', label: 'Tax Advisory' },
    { value: 'other', label: 'Other' },
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation could be added here
    
    // Success message
    toast({
      title: "Appointment Request Submitted",
      description: "We'll contact you shortly to confirm your consultation.",
      variant: "default",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      area: '',
      date: '',
      time: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-light">
        {/* Hero Section */}
        <section className="bg-primary text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 to-primary/90"></div>
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+')]"></div>
          <div className="container-lg relative z-10">
            <div className="max-w-3xl" data-aos="fade-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Schedule a Consultation</h1>
              <p className="text-lg text-light/90 max-w-2xl">
                Book an appointment with our experienced legal team to discuss your matter and explore how we can assist you.
              </p>
            </div>
          </div>
        </section>

        {/* Appointment Form Section */}
        <section className="py-16">
          <div className="container-lg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2" data-aos="fade-up">
                <Card className="shadow-card bg-white">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6 text-primary">Your Information</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <div className="relative">
                            <Input 
                              id="name" 
                              name="name" 
                              placeholder="Your full name"
                              value={formData.name}
                              onChange={handleChange}
                              className="pl-10"
                              required
                            />
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bluegray" size={16} />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <div className="relative">
                            <Input 
                              id="email" 
                              name="email" 
                              type="email" 
                              placeholder="Your email address"
                              value={formData.email}
                              onChange={handleChange}
                              className="pl-10"
                              required
                            />
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bluegray" size={16} />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <div className="relative">
                            <Input 
                              id="phone" 
                              name="phone" 
                              placeholder="Your phone number"
                              value={formData.phone}
                              onChange={handleChange}
                              className="pl-10"
                              required
                            />
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bluegray" size={16} />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="area">Legal Area</Label>
                          <div className="relative">
                            <Select onValueChange={(value) => handleSelectChange('area', value)}>
                              <SelectTrigger id="area" className="pl-10">
                                <SelectValue placeholder="Select legal area" />
                              </SelectTrigger>
                              <SelectContent>
                                {legalAreas.map((area) => (
                                  <SelectItem key={area.value} value={area.value}>
                                    {area.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <BriefcaseBusiness className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bluegray" size={16} />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="date">Preferred Date</Label>
                          <div className="relative">
                            <Input 
                              id="date" 
                              name="date" 
                              type="date" 
                              value={formData.date}
                              onChange={handleChange}
                              className="pl-10"
                              required
                            />
                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bluegray" size={16} />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="time">Preferred Time</Label>
                          <div className="relative">
                            <Select onValueChange={(value) => handleSelectChange('time', value)}>
                              <SelectTrigger id="time" className="pl-10">
                                <SelectValue placeholder="Select time slot" />
                              </SelectTrigger>
                              <SelectContent>
                                {timeSlots.map((time) => (
                                  <SelectItem key={time} value={time}>
                                    {time}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bluegray" size={16} />
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Brief description of your legal matter</Label>
                        <div className="relative">
                          <Textarea 
                            id="message" 
                            name="message" 
                            placeholder="Please provide a brief overview of your legal matter"
                            value={formData.message}
                            onChange={handleChange}
                            className="pl-10 min-h-[120px]"
                            required
                          />
                          <MessageSquare className="absolute left-3 top-6 text-bluegray" size={16} />
                        </div>
                      </div>
                      
                      <Button type="submit" variant="highlight" className="w-full md:w-auto font-medium">
                        Submit Appointment Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
              
              <div data-aos="fade-up" data-aos-delay="100">
                <div className="bg-primary text-white p-8 rounded-lg shadow-card">
                  <h3 className="text-xl font-bold mb-6">What to Expect</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mr-4 mt-1 text-highlight">
                        <FileText size={18} />
                      </div>
                      <p className="text-light/90">
                        After submitting your request, we'll review your information and contact you to confirm your appointment.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-4 mt-1 text-highlight">
                        <Clock size={18} />
                      </div>
                      <p className="text-light/90">
                        Initial consultations typically last 30-60 minutes, allowing enough time to discuss your legal needs.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-4 mt-1 text-highlight">
                        <BriefcaseBusiness size={18} />
                      </div>
                      <p className="text-light/90">
                        You'll meet with an attorney specialized in your specific legal area who can provide tailored advice.
                      </p>
                    </li>
                  </ul>
                  
                  <hr className="my-6 border-white/20" />
                  
                  <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                  <ul className="space-y-2 text-light/90">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8 space-y-4">
                    <Button asChild variant="outline" className="w-full justify-start text-white border-white/30 hover:bg-white/10">
                      <a href="tel:+1234567890" className="flex items-center">
                        <Phone size={16} className="mr-2" />
                        <span>(123) 456-7890</span>
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full justify-start text-white border-white/30 hover:bg-white/10">
                      <a href="mailto:info@ejeweke.com" className="flex items-center">
                        <Mail size={16} className="mr-2" />
                        <span>info@ejeweke.com</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AppointmentPage;
