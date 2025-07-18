import React from 'react';
import { GraduationCap, Menu, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="flex justify-between items-center py-2 text-sm border-b border-muted">
          <div className="flex items-center space-x-6 text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Phone className="w-3 h-3" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-3 h-3" />
              <span>admissions@ecap.edu</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-3 h-3" />
              <span>123 University Ave, Education City</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-4">
            <Button variant="ghost" size="sm">Student Portal</Button>
            <Button variant="ghost" size="sm">Faculty</Button>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg shadow-button-academic">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">eCAP</h1>
              <p className="text-sm text-muted-foreground">Electronic College Admission Portal</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
            <a href="#admissions" className="text-foreground hover:text-primary transition-colors font-medium">Admissions</a>
            <a href="#programs" className="text-foreground hover:text-primary transition-colors font-medium">Programs</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="outline" className="hidden md:inline-flex">
              Login
            </Button>
            <Button className="bg-gradient-primary hover:bg-primary-dark shadow-button-academic">
              Apply Now
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;