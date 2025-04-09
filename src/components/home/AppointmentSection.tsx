
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CalendarIcon, Clock, UserRound, Phone, FileText, Mail } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  date: z.date({ required_error: 'Please select a date for your appointment' }),
  time: z.string({ required_error: 'Please select a time for your appointment' }),
  practiceArea: z.string({ required_error: 'Please select a practice area' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }).max(500, { message: 'Message must not exceed 500 characters' }),
});

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
];

const practiceAreas = [
  'Corporate Law', 
  'Commercial Litigation',
  'Real Estate Law',
  'Intellectual Property',
  'Energy & Natural Resources',
  'Family Law'
];

const AppointmentSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      
      // Show success toast
      toast({
        title: "Appointment Request Submitted",
        description: `We've received your request for ${format(values.date, 'PPP')} at ${values.time}. Our team will contact you shortly to confirm.`,
      });
      
      form.reset();
    }, 1500);
  }

  return (
    <section className="py-16 md:py-24 bg-light" data-aos="fade-up">
      <div className="container-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="pr-0 lg:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif">Schedule a Consultation</h2>
            <p className="text-secondary mb-8 text-lg">
              Our team of experienced Nigerian legal professionals is ready to assist you with your legal needs. Schedule a consultation with us to discuss your case.
            </p>
            
            <div className="space-y-8 mb-10">
              <div className="flex items-start space-x-4">
                <div className="bg-cream p-3 rounded-full text-charcoal mt-1 flex-shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Quick Response Time</h3>
                  <p className="text-secondary">Our team will respond to your inquiry within 24 hours.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-cream p-3 rounded-full text-charcoal mt-1 flex-shrink-0">
                  <UserRound size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Personalized Attention</h3>
                  <p className="text-secondary">Each case receives dedicated attention from our experienced attorneys.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-cream p-3 rounded-full text-charcoal mt-1 flex-shrink-0">
                  <FileText size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Thorough Case Analysis</h3>
                  <p className="text-secondary">We provide comprehensive evaluation of your legal situation under Nigerian law.</p>
                </div>
              </div>
            </div>
            
            <div className="p-8 bg-cream rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-5">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-accent" />
                  <span>+234 813 069 5026</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-accent" />
                  <span>info@ejewekelegal.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock size={20} className="text-accent" />
                  <span>Monday-Friday: 9:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-offwhite rounded-lg p-8 shadow-md border border-cream mt-8 lg:mt-0">
            <h3 className="text-2xl font-bold mb-8 pb-4 border-b border-cream">Book Your Appointment</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Appointment Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Select date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => {
                                // Disable weekends and dates before today
                                return (
                                  date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                                  date.getDay() === 0 ||
                                  date.getDay() === 6
                                );
                              }}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Time</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="practiceArea"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Practice Area</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select practice area" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {practiceAreas.map((area) => (
                            <SelectItem key={area} value={area}>
                              {area}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Brief Description of Your Legal Matter</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please provide a brief description of your legal issue..." 
                          className="resize-none min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent-dark text-offwhite py-6 mt-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Request Consultation"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
