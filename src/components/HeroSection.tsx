import React from 'react';
import { ArrowRight, UserPlus, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroCampus from '@/assets/hero-campus.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroCampus} 
          alt="Campus view" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Gateway to
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent"> Excellence</span>
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Streamlined college admissions made simple. Join thousands of students who have 
              successfully navigated their path to higher education through our innovative portal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent-light text-academic-navy shadow-button-academic"
              >
                Start Application
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Learn More
              </Button>
            </div>
            <div className="flex items-center space-x-6 text-white/80">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Fast Application Process</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Login/Signup Card */}
          <div className="animate-slide-in-right">
            <Card className="bg-white/95 backdrop-blur-sm shadow-academic border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center mb-6 text-primary">
                  Access Your Portal
                </h3>
                
                <div className="space-y-4">
                  <Button className="w-full bg-gradient-primary hover:bg-primary-dark shadow-button-academic" size="lg">
                    <LogIn className="mr-2 w-5 h-5" />
                    Student Login
                  </Button>
                  
                  <Button variant="outline" className="w-full" size="lg">
                    <UserPlus className="mr-2 w-5 h-5" />
                    Create Account
                  </Button>
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-muted" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" size="sm">
                      Parent Portal
                    </Button>
                    <Button variant="outline" size="sm">
                      Counselor Login
                    </Button>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Need help? <a href="#contact" className="text-primary hover:underline">Contact Support</a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;