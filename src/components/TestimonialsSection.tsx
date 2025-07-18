import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import studentsImage from '@/assets/students-celebrating.jpg';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      program: "Computer Science, Class of 2023",
      content: "The eCAP portal made my application process incredibly smooth. The interface is intuitive and the support team was always available to help. I couldn't be happier with my college experience!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      program: "Engineering, Class of 2022",
      content: "From application to graduation, this institution exceeded my expectations. The career services helped me land my dream job at a top tech company. The education quality is outstanding.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      program: "Business Administration, Class of 2023",
      content: "The diversity and inclusion on campus is remarkable. I've made lifelong friends and connections that have shaped my career. The faculty genuinely cares about student success.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Student Success Stories</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Hear from our graduates about their transformative experiences and how our institution 
            helped them achieve their academic and career goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Testimonials */}
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-card-academic transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-accent"
                    />
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <div className="flex text-accent mr-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                      <Quote className="w-8 h-8 text-muted-foreground mb-3 opacity-50" />
                      <p className="text-muted-foreground mb-4 leading-relaxed italic">
                        "{testimonial.content}"
                      </p>
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.program}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-academic">
              <img 
                src={studentsImage} 
                alt="Students celebrating graduation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-card-academic border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Student Satisfaction</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-accent rounded-xl p-6 shadow-card-academic text-accent-foreground">
              <div className="text-center">
                <div className="text-2xl font-bold">4.9/5</div>
                <div className="text-sm opacity-80">Average Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-muted/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Join thousands of successful graduates who started their journey right here.
            </p>
            <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-button-academic">
              Begin Your Application
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;